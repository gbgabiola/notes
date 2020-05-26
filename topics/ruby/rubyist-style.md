# Rubyist Style

- [Implicit Returns](#implicit-returns)
- [Omitting parentheses for method calls with no arguments](#omitting-parentheses-for-method-calls-with-no-arguments)
- [Use single line conditionals when possible](#use-single-line-conditionals-when-possible)
- [Use built-in methods](#use-built-in-methods)
- [Use enumerables to iterate](#use-enumerables-to-iterate)

## Implicit Returns

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

## Omitting parentheses for method calls with no arguments

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

## Use single line conditionals when possible

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

## Use built-in methods

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

## Use enumerables to iterate

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
