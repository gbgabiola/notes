# Algorithm

A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.

To make solving problems easier, it can be helpful to break them down into many chunks. Then, each chunk can be solved one by one. For example, if you are building a calculator, don't try to solve the problem as a whole. First, consider how to get inputs. Then, determine each arithmetic operation one by one. Finally, display the results.

- [Convert Celsius to Fahrenheit](#convert-celsius-to-fahrenheit)
- [Reverse a String](#reverse-a-string)
- [Factorialize a Number](#factorialize-a-number)
- [Find the Longest Word in a String](#find-the-longest-word-in-a-string)
- [Return Largest Numbers in Arrays](#return-largest-numbers-in-arrays)
- [Confirm the Ending](#confirm-the-ending)
- [Repeat a String Repeat a String](#repeat-a-string-repeat-a-string)
- [Truncate a String](#truncate-a-string)
- [Finders Keepers](#finders-keepers)
- [Boo who](#boo-who)
- [Title Case a Sentence](#title-case-a-sentence)
- [Slice and Splice](#slice-and-splice)
- [Falsy Bouncer](#falsy-bouncer)
- [Where do I Belong](#where-do-i-belong)


## Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times `9/5`, plus `32`.

```js
function convertToF(celsius) {
  var fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
```

**Test**:

```js
// Change the inputs below to test your code
convertToF(30); // 86
```


## Reverse a String

You may need to turn the string into an array before you can reverse it and result must be a string.

```js
function reverseString(str) {
  // Create a an empty str to hold reversed str
  let newStr = '';
  // Start at the last char of the str, each iteration newStr gets concatenated with itself and current char
  for (let i = str.length - 1; i >= 0; i--) newStr += str[i];
  return newStr; // Return final reversed str

  // or
  // split str each char and will turn it into array, reverse it, then join the array of char which joined back together by each char
  return str.split('').reverse().join('');
}
```

**Test**:

```js
reverseString('hello');
```


## Factorialize a Number

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation `n!`

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

```js
function factorialize(num) {
  // Using while loop
  // let count = 1;
  // let i = 1;
  // while (i <= num) {
  //   count *= i;
  //   i++;
  // }
  // return count;

  // Using recursion
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
```

**Test**:

```js
factorialize(5); // 120
```

## Find the Longest Word in a String

Return the length of the longest word in the provided sentence and your response should be a number.

### Solution 1: Using `for` loop

```js
function findLongestWordLength(str) {
  // Step 1: Split str into an array of strings
  const splitStr = str.split(' ');

  // Step 2: Initiate a variable to hold the length of the longest word
  let longestWord = 0;
  // Step 3: Create for loop
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > longestWord) {
      longestWord = splitStr[i].length; // longestWord takes this new value
    }
  }
  // Step 4: Return the longestWord
  return longestWord;
}
```

### Solution 2: Using `sort()` method

```js
function findLongestWordLength(str) {
  // Step 1: Split str into an array of strings
  const splitStr = str.split(' ');

  // Step 2: Sort the elements in the array
  const longestWord = splitStr.sort((a, b) => b.length - a.length);

  // Step 3: Return the length of the first element of the array
  return longestWord[0].length;
}
```

### Solution 3: Using `reduce()` method

```js
function findLongestWordLength(str) {
  // Step 1: Split str into an array of strings
  const splitStr = str.split(' ');

  // Step 2: Use reduce method
  const longestWord = splitStr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');

  // Step 3: Return the length of the longestWord
  return longestWord.length;
}
```

**Test**:

```js
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog')); // 6
```


## Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax `arr[i]`.

### Solution 1: Using `for` loop

```js
function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    results[i] = largest;
  }
  return results;
}
```

### Solution 2: Using `forEach()`, `Math.max.appy()` method and arrow function

```js
function largestOfFour(arr) {
  const results = [];

  arr.forEach((a) => {
    results.push(Math.max.apply(null, a));
  });
  return results;
}
```

### Solution 3: Using `map()` and `apply()` method

```js
function largestOfFour(arr) {
  // Step 1: Map over the arrays
  return arr.map(subArray => { // Step 3: Return the largest numbers of each sub-arrays
    
    // Step 2. Return the largest numbers for each sub-arrays with Math.max() method, use null instead of 'this' keyword
    return Math.max.apply(null, subArray);
  });
}
```

### Solution 4: Using `map()`, `reduce()` method and ternary operator

```js
// Intermediate
function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}
```

### Solution 5: Using `map()`, `apply()`, `bind()` and `Math.max()` method

```js
// Intermediate
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
```

### Solution 6: Using `for` loop, `Math.max()` and `push()` method

```js
function largestOfFour(arr) {
  const arg = []; // to put the numbers in
  const len = arr.length; // how many miniarrays there are
  for(let i = 0; i < len; i++) { // loops the number of miniarrays
    let lar = 0; // to store the biggest int of four
    lar = arr[0]; // lar = firstnum of miniarray
    lar = Math.max(...arr[i]); // to find the highest value of the four
    arg.push(lar); // pushes biggest num on arg
  }
  return arg; // returns arg
}
```

**Test**:

```js
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [5, 27, 39, 1001]
```


## Confirm the Ending

Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).

This challenge can be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

### Solution 1: Using `substr()` method

```js
function confirmEnding(str, target) {
  // Step 1: Use the substr method
  // Step 2: Return true or false
  return str.substr(-target.length) === target ? true : false;
  
  // The str is 'Bastian' and the target is 'n' 
  // target.length = 1 so -target.length = -1
  // if ('Bastian'.substr(-1) === 'n')
  // if ('n' === 'n')
}
```

### Solution 2: Using `slice()` or `substr()` method

```js
function confirmEnding(str, target) {
  // Step 1: Create variable ending and set it equal to the last char in str equal to the length of target
  let ending = str.slice(str.length - target.length)
            // str.slice(Bastian.length - n.length)
            // str.slice(7              - 1)
            // str.slice(6)
            // 'n'

  // Step 2: Return true if ending equals target, otherwise false
  return ending === target; // 'n' === 'n' (true)

  // Same solution but in just one line, Using slice() or substr()
  return str.slice(str.length - target.length) === target;
  return str.substr(str.length - target.length) === target;
}
```

**Test**:

```js
confirmEnding('Bastian', 'n'); // true
```

## Repeat a String Repeat a String

Repeat a given string `str` (first argument) for `num` times (second argument). Return an empty string if num is `not` a positive number.

### Using `while` loop

```js
function repeatStringNumTimes(str, num) {
  // Step 1: Create an empty str to store the repeated str
  let repeatedStr = '';

  // Step 2: Set while as long as num is greater than 0
  while (num > 0) {
    repeatedStr += str;
    num--; // decrement num
  }
  // Step 3: Return the repeatedStr
  return repeatedStr;
}
```

### Using `for` loop

```js
function repeatStringNumTimes(str, num) {
  // Step 1: Create an empty str to store the repeated str
  let repeatedStr = '';

  // Step 2: Use for loop as long as i is less than or equal to num, then add str to repeatedStr
  for (let i = 1; i <= num; i++) {
    repeatedStr += str;
  }
  // Step 3: Return the repeatedStr
  return repeatedStr;
}
```

### Using Recursion

```js
function repeatStringNumTimes(str, num) {
  // Step 1: Check if num is greater than 0
  // Step 2: If true, use recursion
  // Step 3: Else (means num <= 0), then return empty string
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
```

### Using `repeat()` method

```js
function repeatStringNumTimes(str, num) {
  //Step 1: Check if num is positive, return the repeated string
  //Step 2: Else (means num <= 0), return an empty string
  return num > 0 ? str.repeat(num) : '';
}
```

**Test**:

```js
repeatStringNumTimes('abc', 3); // abcabcabc
```


## Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.

### Using `slice()` method

```js
function truncateString(str, num) {
  // Step 1: Check if str.length is less than or equal to num, if true return str (don't truncate)
  if (str.length <= num) {
    return str
  }

  // Step 2: Return str truncated with '...' concatenated to the end of str
  return str.slice(0, num) + '...'
}
```

### Using `slice()` or `substr()` method and ternary operator 

```js
function truncateString(str, num) {
  // Step 1: Check if str.length is greater than num if true, then concatenate '...'
  // Step 2: Else (false), return just str (don't truncate)
  return str.length > num ? str.slice(0, num) + '...' : str; // Using slice()
  // return str.length > num ? str.substr(0, num) + '...' : str; // Using substr()
}
```

**Test**:

```js
truncateString(A-tisket a-tasket A green and yellow basket, 8); // A-tisket...
```


## Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

### Using `for` loop

```js
function findElement(arr, func) {
  let num;

  for(let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) return num;
  }
}
```

### Using `find()` method

```js
function findElement(arr, func) {
  // find() will stop the loop once the value is found
  return arr.find(func);
}
```

### Using `filter()` method

```js
function findElement(arr, func) {
  // Gets the first elem from arr returned by filter() (targetting index[0])
  let [a] = arr.filter(num => func(num)); return a;

   // filter() the provide array by the function provided and return only the first element
  return arr.filter(func)[0];
}
```

### Using `map()` and `indexOf()` method

```js
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}
```

**Test**:

```js
findElement([1, 2, 3, 4], num => num % 2 === 0); // 2
```

## Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

### Using ternary operator

```js
function booWho(bool) {
  // Adding ternary operator is optional because it will always evaluate the condition first to true then false
  return bool === true || bool === false; // ? true : false are optional
}
```

### Using `typeof` operator

```js
function booWho(bool) {
  // Check the typeof bool if it's equal true, return true, else return false
  return typeof bool === 'boolean';
}
```

**Test**:

```js
booWho(null); // false
```


## Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.

### Solution 1: Using `for` loop

```js
function titleCase(str) {
  // Step 1: Create a new string, lowercase the string
  // Step 2: Split the string into an array of strings
  let newStr = str.toLowerCase().split(' ');

  // Step 3: Create a for loop
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
  }

  // Step 4: Return the string by joining them from array into a string
  return newStr.join(' ');
}
```

### Solution 2: Using ES6 `map()` method

```js
function titleCase(str) {
  return str
    .toLowerCase() // Step 1. Lowercase the string
    .split(' ') // Step 2: Split the string into an array of strings
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Step 3: Map over the array
    .join(' '); // Step 4: Return the new string by joining them from array into a string
}
```

### Solution 3: Using ES6 `map()` and `replace()` method

```js
function titleCase(str) {
  return str
    .toLowerCase() // Step 1. Lowercase the string
    .split(' ') // Step 2: Split the string into an array of strings
    .map(word => word.replace(word[0], word[0].toUpperCase())) // Step 3: Map over the array
    .join(' '); // Step 4: Return the string by joining them from array into a string
}
```

### Solution 4: Using ES6 `map()` method

```js
function titleCase(str) {
  return str.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substr(1)).join(' ');
}
```

### Solution 5: Using ES6 `map()` method and RegEx

```js
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (str) => str.toUpperCase());
}
```

**Test**:

```js
titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
```


## Slice and Splice

You are given two arrays and an index.

Use the array methods `slice` and `splice` to copy each element of the first array into the second array, in order.

Begin inserting elements at index `n` of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

### Solution 1: Using `slice()` and `splice()` method (Optional: rest operator)

```js
function frankenSplice(arr1, arr2, n) {
  // Step 1: Create a copy of arr2 to keep the orginal arr2 when slice method applied to the arr2 then assign to a new variable (arr2Copy), Note: no need to set parameters on slice
  let arr2Copy = arr2.slice(); // or [...arr2]

  // Step 2: Loop through the arr1, each item should be splice into a arr2Copy using the index (n), then increment the given index (n) after doing splice
  for (let i = 0; i < arr1.length; i++) {
    arr2Copy.splice(n, 0, arr1[i]);
    n++;
  }
  // Step 3: Return the arr2Copy
  return arr2Copy;
}
```

### Solution 2: Using `slice()` and `splice()` method, rest and spread operator

```js
function frankenSplice(arr1, arr2, n) {
  // Step 1: Create a copy of arr2 to keep the orginal arr2 when slice method applied to the arr2 then assign to a new variable (arr2Copy), Note: no need to set parameters on slice
  let arr2Copy = arr2.slice(); // or using function rest parameter [...arr2] 
  // Step 2: Each item should be splice into a arr2Copy using the index (n)
  arr2Copy.splice(n, 0, ...arr1);
  // Step 3: Return the arr2Copy
  return arr2Copy;
}
```

**Test**:

```js
frankenSplice([1, 2, 3], [4, 5, 6], 1); // [4, 1, 2, 3, 5, 6]
```


## Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are `false`, `null`, `0`, `''`, `undefined`, and `NaN`.

**Hint**: Try converting each value to a Boolean.

### Solution 1: Using `for` loop

```js
function bouncer(arr) {
  // Step 1: Create an empty array
  let newArr = [];

  // Step 2: Use for loop iterate over the given array
  for (let i = 0; i < arr.length; i++) // or (let item of arr)
  // Step 3: Check if current element truthy or falsy, if element is truthy push it to the new array
  if (arr[i]) newArr.push(arr[i]) // or (item) newArr.push(item)
  // Step 4: Return the new array
  return newArr;
}
```

### Solution 2: Using `filter()` method

```js
function bouncer(arr) {
  // filter method expects a function that returns a Boolean value which takes a single argument and returns true/false
  return arr.filter(Boolean);

  // return arr.filter(arr => Boolean(arr));
  // return arr.filter(item => item);
}
```

**Test**:

```js
bouncer([7, 'ate', '', false, 9]); // [7, 'ate', 9]
```


## Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, `getIndexToIns([1,2,3,4], 1.5)` should return `1` because it is greater than `1` (index 0), but less than `2` (index 1).

Likewise, `getIndexToIns([20,3,5], 19)` should return `2` because once the array has been sorted it will look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).


### Solution 1:

```js
function getIndexToIns(arr, num) {
  return num;
}
```

**Test**:

```js
getIndexToIns([40, 60], 50); // 1
```
