# Ruby's Enumerables

- [each](#each)
- [map](#map)
- [select](#select)
- [all?](#all)
- [any?](#any)
- [none?](#none)
- [one?](#one)
- [count](#count)
- [sum](#sum)
- [max and min](#max-and-min)
- [flatten](#flatten)

## each

`each` method allows you to go over a list of items, without having to keep track of the number of iterations, or having to increase some kind of counter, Ruby's way of doing "repeat until done".

```rb
numbers = [1, 3, 5, 7]
numbers.each { |n| puts n }
# 1
# 3
# 5
# 7
```


## map

`map` method takes an enumerable object and a block, and runs the block for each element, outputting each returned value from the block (the original object is unchanged unless you use map!).

```rb
names = ["john", "many"]

# here we map one array to another, convert each element by some rule
names.map { |name| name.capitalize } # ["John", "Mary"]
```


## select

`select` method returns a new array containing all elements of array for which the given block returns a true value.

```rb
[1,2,3,4,5,6].select { |num| num.even? }
```


## all?

`all?` method returns true when all elements result in true when passed into the block.

```rb
p [2, 4, 6].all? { |el| el.even? }  # => true
p [2, 3, 6].all? { |el| el.even? }  # => false
```


## any?

`any?` method returns true when all at least one element results in true when passed into the block.

```rb
p [3, 4, 7].any? { |el| el.even? }  # => true
p [3, 5, 7].any? { |el| el.even? }  # => false
```


## none?

`none?` method returns true when no elements of result in true when passed into the block.

```rb
p [1, 3, 5].none? { |el| el.even? } # => true
p [1, 4, 5].none? { |el| el.even? } # => false
```


## one?

`one?` method returns true when exactly one element results in true when passed into the block.

```rb
p [1, 4, 5].one? { |el| el.even? }  # => true
p [1, 4, 6].one? { |el| el.even? }  # => false
p [1, 3, 5].one? { |el| el.even? }  # => false
```


## count

`count` method returns a number representing the count of elements that result in true when passed into the block.

```rb
p [1, 2, 3, 4, 5, 6].count { |el| el.even? }    # => 3
p [1, 3, 5].count { |el| el.even? }             # => 0
```


## sum

`sum` method returns the total sum of all elements

```rb
p [1, -3, 5].sum   # => 3
```


## max and min

`max` and `min` methods return the maximum or minimum element

```rb
p [1, -3, 5].min    # => -3
p [1, -3, 5].max    # => 5
p [].max            # => nil
```


## flatten

`flatten` method returns the 1 dimensional version of any multidimensional array

```rb
multi_d = [
  [["a", "b"], "c"],
  [["d"], ["e"]],
  "f"
]

p multi_d.flatten   # => ["a", "b", "c", "d", "e", "f"]
```
