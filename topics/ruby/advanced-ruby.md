# Advanced Ruby

- [Rubyist Style](#rubyist-style)
- [Common Enumerables](#common-enumerables)
- [Symbols](#symbols)
- [Default Arguments](#default-arguments)
- [Option Hashes](#option-hashes)
- [Splat Operator](#splat-operator)


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


## Default Arguments

We can assign a default value in the parameter list when writing methods.

```rb
# Let's make num an optional parameter.
# By default, num will have the value of 1
def repeat(message, num=1)
  message * num
end

p repeat("hi") # => "hi"
p repeat("hi", 3) # => "hihihi"
```

The `repeat` method above has an optional `num` argument. If we call `repeat` without explicitly passing in a value for `num`, `num` will be implicitly passed in with the value 1. This is useful for implementing methods with a default behavior.

We are free to use any default value for an optional argument, so the possibilities are endless. A fairly common design pattern is to set an arg to `nil` by default and have logic based on that scenario:

```rb
def greet(person_1, person_2=nil)
  if person_2.nil?
    p "Hey " + person_1
  else
    p "Hey " + person_1 + " and " + person_2
  end
end

greet("John") # => "Hey John"
greet("John", "Arthur") # => "Hey John and Arthur"
```
To avoid confusion, it's best practice to have optional parameters listed after the required ones. If we stick to this convention, we can always expect arguments to be taken in the same order we pass them in. So avoid writing code like this:

```rb
def greet(person_1="default", person_2)
  p person_1 + " and " + person_2
end

greet("John") # => "default and John"
```

The method above is not intuitive because although `"John"` is first argument passed in, `person_2` will be assigned `"John"`. Avoid this by only assigning default values at the end of the parameter list.


## Option Hashes

If you have a method that accepts a hash as an argument, you can omit the braces when passing in the hash:

```rb
def method(hash)
  p hash  # {"location"=>"SF", "color"=>"red", "size"=>100}
end

method({ "location" => "SF", "color" => "red", "size" => 100 })

# this also works:
method("location" => "SF", "color" => "red", "size" => 100)
```

This can really clean things up when you have other arguments before the hash:

```rb
def modify_string(str, options)
  str.upcase! if options["upper"]
  p str * options["repeats"]
end

# less readable
modify_string("bye", {"upper"=>true, "repeats"=>3}) # => "BYEBYEBYE"

# more readable
modify_string("bye", "upper"=>true, "repeats"=>3)   # => "BYEBYEBYE"
```

Combining this with the default arguments we covered in the previous section can make our code even more flexible:

```rb
def modify_string(str, options = { "upper" => false, "repeats" => 1 })
  str.upcase! if options["upper"]
  p str * options["repeats"]
end

modify_string("bye")   # => "bye"
modify_string("bye", "upper" => true, "repeats" => 3)   # => "BYEBYEBYE"
```


## Splat Operator

There are few different ways to use the splat (`*`) operator in Ruby.

### Using splat to accept additional arguments

Ruby methods are pretty strict in that we must pass in the exact number of arguments that a method expects. If we pass in too many, we will receive an error:

```rb
def method(arg_1, arg_2)
  p arg_1
  p arg_2
end

method("a", "b", "c", "d", "e") # ArgumentError: wrong number of arguments (given 5, expected 2)
```

Building upon the code above, if we want our method to have the ability to accept at least two arguments with potentially more, we can add a splat parameter. The additional arguments will be gathered into an array for us to use as we see fit:

```rb
def method(arg_1, arg_2, *other_args)
  p arg_1         # "a"
  p arg_2         # "b"
  p other_args    # ["c", "d", "e"]
end

method("a", "b", "c", "d", "e")
```

If we pass in exactly two arguments, then `other_args` will be an empty array:

```rb
def method(arg_1, arg_2, *other_args)
  p arg_1         # "a"
  p arg_2         # "b"
  p other_args    # []
end

method("a", "b")
```

Notice that in any scenario, the arguments are passed in positionally. This means that in the example above, `arg_1` is assigned "a", `arg_2` is assigned "b", and there is no additional data being passed, so `other_args` is empty.

As a best practice, we should use splat at the end of the parameter list to avoid confusion. So avoid writing code like this:

```rb
# Avoid doing this, it's confusing:
def method(*other_args, required_arg)
  p other_args    # ["a", "b"]
  p required_arg  # "c"
end

method("a", "b", "c")
```

### Using splat to decompose an array

We can also use splat to decompose or unpack elements of an array. Let's say we had an array containing some elements, but we wanted each individual element to become an argument:

```rb
def greet(first_name, last_name)
  p "Hey " + first_name + ", your last name is " + last_name
end

names = ["grace", "hopper"]
greet(names)    # ArgumentError: wrong number of arguments (given 1, expected 2)
```

The code above does not work because we are passing in the full array as the `first_name`, making `last_name` a missing argument. Thankfully we can use a splat to unpack this array:

```rb
def greet(first_name, last_name)
  p "Hey " + first_name + ", your last name is " + last_name
end

names = ["Grace", "Hopper"]
greet(*names)    # => "Hey Grace, your last name is Hopper"
```

When using splat to unpack an array, you can imagine that the `*` will remove the brackets (`[]`) that enclose the array. This leaves us with a simple comma separated list, perfect for passing in arguments. If you imagine `*` as removing the brackets around an array, we can figure out some other creative ways to use this tool:

```rb
arr_1 = ["a", "b"]
arr_2 = ["d", "e"]
arr_3 = [ *arr_1, "c", *arr_2 ]
p arr_3 # => ["a", "b", "c", "d", "e"]
```

### Using splat to decompose a hash

We can use a double splat (`**`) to perform a similar unpacking of a hash's key-value pairs. Double splat will only work with hashes where the keys are symbols:

```rb
old_hash = { a: 1, b: 2 }
new_hash = { **old_hash, c: 3 }
p new_hash # => {:a=>1, :b=>2, :c=>3}
```
