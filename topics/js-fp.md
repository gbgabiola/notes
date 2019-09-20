# [Functional Programming](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming)

**Functional programming** is an approach to software development based around the evaluation of functions. Like mathematics, functions in programming map input to output to produce a result. You can combine basic functions in many ways to build more and more complex programs.

Functional programming follows a few core principles:

- Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation
- Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data
- Functions have minimal side effects in the program

The functional programming software development approach breaks a program into small, testable parts. This section covers basic functional programming principles in JavaScript.


- [Learn About Functional Programming](#learn-about-functional-programming)
- [Understand Functional Programming Terminology](#understand-functional-programming-terminology)
- [Understand the Hazards of Using Imperative Code](#understand-the-hazards-of-using-imperative-code)
- [Avoid Mutations and Side Effects Using Functional Programming](#avoid-mutations-and-side-effects-using-functional-programming)
- [Pass Arguments to Avoid External Dependence in a Function](#pass-arguments-to-avoid-external-dependence-in-a-function)
- [Refactor Global Variables Out of Functions](#refactor-global-variables-out-of-functions)
- [Use the map Method to Extract Data from an Array](#use-the-map-method-to-extract-data-from-an-array)
- [Implement map on a Prototype](#implement-map-on-a-prototype)
- [Use the filter Method to Extract Data from an Array](#use-the-filter-method-to-extract-data-from-an-array)
- [Implement the filter Method on a Prototype](#implement-the-filter-method-on-a-prototype)
- [Return Part of an Array Using the slice Method](#return-part-of-an-array-using-the-slice-method)
- [Remove Elements from an Array Using slice Instead of splice](#remove-elements-from-an-array-using-slice-instead-of-splice)
- [Combine Two Arrays Using the concat Method](#combine-two-arrays-using-the-concat-method)
- [Add Elements to the End of an Array Using concat Instead of push](#add-elements-to-the-end-of-an-array-using-concat-instead-of-push)
- [Use the reduce Method to Analyze Data](#use-the-reduce-method-to-analyze-data)
- [Sort an Array Alphabetically using the sort Method](#sort-an-array-alphabetically-using-the-sort-method)
- [Return a Sorted Array Without Changing the Original Array](#return-a-sorted-array-without-changing-the-original-array)
- [Split a String into an Array Using the split Method](#split-a-string-into-an-array-using-the-split-method)
- [Combine an Array into a String Using the join Method](#combine-an-array-into-a-string-using-the-join-method)
- [Use the every Method to Check that Every Element in an Array Meets a Criteria](#use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria)
- [Use the some Method to Check that Any Elements in an Array Meet a Criteria](#use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria)
- [Introduction to Currying and Partial Application](#introduction-to-currying-and-partial-application)


## Learn About Functional Programming

Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

`INPUT -> PROCESS -> OUTPUT`

Functional programming is about:

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
2. Pure functions - the same input always gives the same output
3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled


## Understand Functional Programming Terminology

We can modify `getTea` to accept a function as a parameter to be able to change the type of tea it prepares. This makes `getTea` more flexible, and gives the programmer more control when client requests change.

But first, let's cover some functional terminology:

`Callbacks` are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in `filter`, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called `first class` functions. In JavaScript, all functions are `first class` functions.

The functions that take a function as an argument, or return a function as a return value are called `higher order` functions.

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a `lambda`.


## Understand the Hazards of Using Imperative Code

Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables. A classic example is writing a `for` loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the `for` loop mentioned above, you could call the `map` method which handles the details of iterating over an array. This helps to avoid semantic errors.

Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.


## Avoid Mutations and Side Effects Using Functional Programming

`splice` changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

This is a small example of a much larger pattern, you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

One of the core principle of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

Recall that in functional programming, changing or altering things is called `mutation`, and the outcome is called a `side effect`. A function, ideally, should be a `pure function`, meaning that it does not cause any side effects.


## Pass Arguments to Avoid External Dependence in a Function

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.


## Refactor Global Variables Out of Functions

Two distinct principles for functional programming:

1. Don't alter a variable or object - create new variables and objects and return them if need be from a function.
2. Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.


## Use the map Method to Extract Data from an Array

As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered `First Class Objects` in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

`Array.prototype.map()`, or simply `map` is one of the simple array functions which are methods on the array object prototype.

Remember that the `map` method is a way to iterate over each item in an array. It creates a new array (without changing the original one) after applying a callback function to every element.


## Implement map on a Prototype

`Array.prototype.map()` or `map()` method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, `map` is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

It would teach us a lot about `map` to try to implement a version of it that behaves exactly like the `Array.prototype.map()` with a `for` loop or `Array.prototype.forEach()`.

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.


## Use the filter Method to Extract Data from an Array

Another useful array function is `Array.prototype.filter()`, or simply `filter()`. The `filter` method returns a new array which is at most as long as the original array, but usually has fewer items.

`Filter` doesn't alter the original array, just like `map`. It takes a callback function that applies the logic inside the callback on each element of the array. If an element returns true based on the criteria in the callback function, then it is included in the new array.


## Implement the filter Method on a Prototype

It would teach us a lot about the `filter` method if we try to implement a version of it that behaves exactly like `Array.prototype.filter()`. It can use either a `for` loop or `Array.prototype.forEach()`.

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.


## Return Part of an Array Using the slice Method

The `slice` method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The `slice` method does not mutate the original array, but returns a new one.

Here's an example:

```js
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]
```

## Remove Elements from an Array Using slice Instead of splice

A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the `splice` method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the `splice` method mutates the original array it is called on. Here's an example:

```js
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]
```

`slice` method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the `slice` method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the `slice` method instead of `splice` helps to avoid any array-mutating side effects.


## Combine Two Arrays Using the concat Method

`Concatenation` means to join items end to end. JavaScript offers the `concat` method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to `concat`, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

```js
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]
```


## Add Elements to the End of an Array Using concat Instead of push

Functional programming is all about creating and using non-mutating functions.

`concat` method is a way to combine arrays into a new one without mutating the original arrays. Compare `concat` to the `push` method. `Push` adds an item to the end of the same array it is called on, which mutates that array. Here's an example:

```js
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way
```

`Concat` offers a way to add new items to the end of an array without any mutating side effects.


## Use the reduce Method to Analyze Data

`Array.prototype.reduce()`, or simply `reduce()`, is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the `reduce` method.

This is not the case with the `filter` and `map` methods since they do not allow interaction between two different elements of the array. For example, if you want to compare elements of the array, or add them together, `filter` or `map` could not process that.

The `reduce` method allows for more general forms of array processing, and it's possible to show that both `filter` and `map` can be derived as a special application of `reduce`.


## Sort an Array Alphabetically using the sort Method

The `sort` method sorts the elements of an array according to the callback function.

For example:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a < b;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
```

Note: It's encouraged to provide a callback function to specify how to sort the array items. JavaScript's default sorting method is by string Unicode point value, which may return unexpected results.


## Return a Sorted Array Without Changing the Original Array

A side effect of the `sort` method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that `concat` returns a new array), then run the `sort` method.


## Split a String into an Array Using the split Method

The `split` method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

```js
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]
```

Since strings are immutable, the `split` method makes it easier to work with them.


## Combine an Array into a String Using the join Method

The `join` method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

```js
var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"
```


## Use the every Method to Check that Every Element in an Array Meets a Criteria

The `every` method works with arrays to check if _every_ element passes a particular test. It returns a Boolean value, `true` if all values meet the criteria, `false` if not.

For example, the following code would check if every element in the `numbers` array is less than 10:

```js
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
```


## Use the some Method to Check that Any Elements in an Array Meet a Criteria

The `some` method works with arrays to check if _any_ element passes a particular test. It returns a Boolean value, `true` if any of the values meet the criteria, `false` if not.

For example, the following code would check if any element in the `numbers` array is less than 10:

```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true
```


## Introduction to Currying and Partial Application

The `arity` of a function is the number of arguments it requires. `Currying` a function means to convert a function of N `arity` into N functions of `arity` 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:

```js
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
curried(1)(2) // Returns 3
```

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the `curried` function in the example above:

```js
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
```

Similarly, `partial application` can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.

Here's an example:

```js
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
```
