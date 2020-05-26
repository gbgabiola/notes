# Advanced Ruby

- [Rubyist Style](#rubyist-style)
- [Common Enumerables](#common-enumerables)
- [Symbols](#symbols)


## Rubyist Style

### Implicit Returns

Ruby's method automatically return the evaluation of their last executed expression, use explicit return to do an early return.

```rb
# Less preferred
def get_avg(num_1, num_2)
  return (num_1 + num_2) / 2
end

# Preferred by a Rubyist
def get_avg(num_1, num_2)
  (num_1 + num_2) / 2
end
```

### Omitting parentheses for method calls with no arguments

When calling a method without passing any arguments, you can drop the parentheses altogether.

```rb
def say_hi
  puts "hi"
end

# Less preferred 
say_hi()

# Preferred by a Rubyist
say_hi
```

### Use single line conditionals when possible

When we have a single line in the body of a simple if statement (that is not attached to an elsif or else), we can turn it into a one-liner:

```rb
raining = true

# Less preferred
if raining
  puts "don't forget an umbrella!"
end

# Preferred by a Rubyist
puts "don't forget an umbrella!" if raining
```

### Use built-in methods

```rb
num = 6

# Less preferred
p num % 2 == 0

# Preferred by a Rubyist
p num.even?
```

```rb
people = ["Joey", "Bex", "Andrew"]

# Less preferred
p people[people.length - 1]

# Preferred by a Rubyist
p people[-1]
p people.last
```

### Use enumerables to iterate

There are many enumerables in Ruby that have specific use cases. These tools can really make the code read like english.

```rb
# Less preferred
def repeat_hi(num)
  i = 0
  while i < num
    puts "hi"
    i += 1
  end
end

# Preferred by a Rubyist
def repeat_hi(num)
  num.times { puts "hi" }
end
```

Given a problem, not all enumerables are equal. Some methods will immediately solve the problem at hand elegantly.

```rb
# Less preferred
def all_numbers_even?(nums)
  nums.each do |num|
      return false if num % 2 != 0
  end

  true
end

# Preferred by a Rubyist
def all_numbers_even?(nums)
  nums.all? { |num| num.even? }
end
```

## Common Enumerables

### each

`each` method allows you to go over a list of items, without having to keep track of the number of iterations, or having to increase some kind of counter, Ruby's way of doing "repeat until done".

```rb
numbers = [1, 3, 5, 7]
numbers.each { |n| puts n }
# 1
# 3
# 5
# 7
```

### map

`map` method takes an enumerable object and a block, and runs the block for each element, outputting each returned value from the block (the original object is unchanged unless you use map!).

```rb
names = ["john", "many"]

# here we map one array to another, convert each element by some rule
names.map { |name| name.capitalize } # ["John", "Mary"]
```

### select

`select` method returns a new array containing all elements of array for which the given block returns a true value.

```rb
[1,2,3,4,5,6].select { |num| num.even? }
```

### all?

`all?` method returns true when all elements result in true when passed into the block.

```rb
p [2, 4, 6].all? { |el| el.even? }  # => true
p [2, 3, 6].all? { |el| el.even? }  # => false
```

### any?

`any?` method returns true when all at least one element results in true when passed into the block.

```rb
p [3, 4, 7].any? { |el| el.even? }  # => true
p [3, 5, 7].any? { |el| el.even? }  # => false
```

### none?

`none?` method returns true when no elements of result in true when passed into the block.

```rb
p [1, 3, 5].none? { |el| el.even? } # => true
p [1, 4, 5].none? { |el| el.even? } # => false
```

### one?

`one?` method returns true when exactly one element results in true when passed into the block.

```rb
p [1, 4, 5].one? { |el| el.even? }  # => true
p [1, 4, 6].one? { |el| el.even? }  # => false
p [1, 3, 5].one? { |el| el.even? }  # => false
```

### count

`count` method returns a number representing the count of elements that result in true when passed into the block.

```rb
p [1, 2, 3, 4, 5, 6].count { |el| el.even? }    # => 3
p [1, 3, 5].count { |el| el.even? }             # => 0
```

### sum

`sum` method returns the total sum of all elements

```rb
p [1, -3, 5].sum   # => 3
```

### max and min

`max` and `min` methods return the maximum or minimum element

```rb
p [1, -3, 5].min    # => -3
p [1, -3, 5].max    # => 5
p [].max            # => nil
```

### flatten

`flatten` method returns the 1 dimensional version of any multidimensional array

```rb
multi_d = [
  [["a", "b"], "c"],
  [["d"], ["e"]],
  "f"
]

p multi_d.flatten   # => ["a", "b", "c", "d", "e", "f"]
```


## Symbols

In Ruby, we can denote a symbol using a colon (:) before writing characters. A string is wrapped in quotes, a symbol just has a leading colon.

```rb
str = "hello"   # the string 
sym = :hello    # the symbol

p str.length    # => 5
p sym.length    # => 5

p str[1]        # => "e"
p sym[1]        # => "e"

# A string is different from a symbol!
p str == sym    # => false
```

### Symbols are Immutable

The most apparent difference between strings and symbols is that strings are mutable, while **symbols are immutable**.

```rb
str = "hello"
sym = :hello

str[0] = "x"
sym[0] = "x"

p str   # => "xello"
p sym   # => :hello
```

`object_id` method will return the memory address of some data.

```rb
"hello".object_id   # => 70233443667980
"hello".object_id   # => 70233443606440
"hello".object_id   # => 70233443438700
```

If we don't intend to mutate the string, we can use a symbol to save some memory. A symbol value will be stored in exactly one memory location:

```rb
:hello.object_id    # => 2899228
:hello.object_id    # => 2899228
:hello.object_id    # => 2899228
```

Because of these characteristics, symbols are often used to act as unique identifiers in our code. We'll be able to ensure the the identifier will remain intact, without change, while also being efficient with memory.

### Symbols as hash keys

One common way to a symbol is as the key in a hash:

```rb
person = { :name=>"John", :pet=>"dog", :friends=>["David", "Alex", "Peter"] }
p person         # => {:name=>"John", :pet=>"dog", :friends=>["David", "Alex", "Peter"]}
p person[:pet]   #=> "dog
```

When initializing a hash with symbol keys, Ruby offers a shortcut. We can drop the rocket (`=>`) and move the colon (`:`) to the right of the symbol:

```rb
person = { name:"John", pet:"dog", friends:["David", "Alex", "Peter"] }
p person         # => {:name=>"John", :pet=>"dog", :friends=>["David", "Alex", "Peter"]}
p person[:pet]   #=> "dog
```

This shortcut is only allowed when initializing the symbols in the hash. When getting a value from the hash after initialization, we must always put the colon on the left like normal. `hash[:key]` is the correct syntax. Writing `hash[key:]` is invalid.
