# JavaScript Shorthand Techniques


- [Declaring variables](#declaring-variables)
- [Assigning values to multiple variables](#assigning-values-to-multiple-variables)
- [Ternary operator](#ternary-operator)
- [Assigning default value](#assigning-default-value)
- [AND (`&&`) Short circuit evaluation](#and--short-circuit-evaluation)
- [Swap two variables](#swap-two-variables)
- [Arrow Function](#arrow-function)
- [Template Literals](#template-literals)
- [Multi-line String](#multi-line-string)
- [Multiple condition checking](#multiple-condition-checking)
- [Object Property Assignment](#object-property-assignment)
- [String into a Number](#string-into-a-number)
- [Repeat a string for multiple times](#repeat-a-string-for-multiple-times)
- [Exponent Power](#exponent-power)
- [Double NOT bitwise operator (`~~`)](#double-not-bitwise-operator-)
- [Find max and min number in array](#find-max-and-min-number-in-array)
- [For loop](#for-loop)
- [Merge arrays](#merge-arrays)
- [Deep cloning of multi-level object](#deep-cloning-of-multi-level-object)
- [Get character from string](#get-character-from-string)


## Declaring variables

```js
let x; 
let y = 20; 

// Shorthand
let x, y = 20;
```


## Assigning values to multiple variables

```js
let a, b, c; 
a = 5; 
b = 8; 
c = 12;
 
// Shorthand using array destructuring
let [a, b, c] = [5, 8, 12];
```


## Ternary operator

```js
let avg = 72; 

let result;
if (avg >= 75) {
  result = 'Passed'; 
} else { 
  result = 'Failed'; 
}

// Shorthand
let result = avg >= 75 ? 'Passed' : 'Failed';
```


## Assigning default value

OR (`||`) short circuit evaluation can be used to assign a default value to a variable in case the expected value found falsy.

```js
let imgPath; 
let path = getImagePath(); 
if (path !== null && path !== undefined && path !== '') { 
  imgPath = path; 
} else { 
  imgPath = 'default.jpg'; 
} 

// Shorthand
let imgPath = getImagePath() || 'default.jpg';
```


## AND (`&&`) Short circuit evaluation

```js
if (isLoggedin) {
  goToHomepage(); 
} 

// Shorthand when calling a function only if variable is true
isLoggedin && goToHomepage();
```


## Swap two variables

We can swap two variables with array destructuring assignment without using a third variable.

```js
let str1 = 'Hello', str2 = 'World';

const temp = str1; 
str1 = str2; 
str2 = temp; 

// Shorthand 
[str1, str2] = [str2, str1];
```


## Arrow Function

```js
function sum(num1, num2) { 
  return num1 + num2; 
} 

// Shorthand
const sum = (num1, num2) => num1 + num2;
```


## Template Literals

```js
console.log('You received a memo from ' + person + ' about ' + project); 

// Shorthand
console.log(`You received a memo from ${person} about ${project}`);
```


## Multi-line String

```js
console.log('JavaScript, often abbreviated as JS, is a\n' +             'programming language that conforms to the \n' + 
'ECMAScript specification. JavaScript is high-level,\n' + 
'often just-in-time compiled, and multi-paradigm.' );

// Shorthand 
console.log(`JavaScript, often abbreviated as JS, is a
programming language that conforms to the
ECMAScript specification. JavaScript is high-level,
often just-in-time compiled, and multi-paradigm.`);
```


## Multiple condition checking

For multiple value matching, we can put all values in array and use `indexOf()` or `includes()` method.

```js
if (value === 1 || value === 'one' || value === 2 || value === 'two') { 
  // Execute some code 
} 

// Shorthand 1
if ([1, 'one', 2, 'two'].indexOf(value) >= 0) { 
  // Execute some code 
}

// Shorthand 2
if ([1, 'one', 2, 'two'].includes(value)) { 
  // Execute some code 
}
```


## Object Property Assignment

If the variable name and object key name is same then we can just mention variable name in object literals instead of both key and value. JS automatically set the key same as variable name and assign the value as variable value.

```js
let firstname = 'Genesis';
let lastname = 'Gabiola';

let obj = {firstname: firstname, lastname: lastname}; 

// Shorthand
let obj = {firstname, lastname};
```


## String into a Number

`parseInt` and `parseFloat` methods are available to convert a string to number, but can also be done using unary operator (`+`) in front of string value.

```js
parseInt('365'); 
parseFloat('28.4'); 

// Shorthand
+'365'; 
+'28.4';
```


## Repeat a string for multiple times

```js
let str = ''; 
for (let i = 0; i < 5; i ++) { 
  str += 'Hi'; 
} 
str; // "HiHiHiHiHi"

// Shorthand 
'Hi'.repeat(5); // "HiHiHiHiHi"
```


## Exponent Power

```js
Math.pow(4, 3); // 64 

// Shorthand
4**3; // 64
```


## Double NOT bitwise operator (`~~`)

This only works for 32 bit integers, so any number higher than 2147483647, it is recommended to use Math.floor().

```js
Math.floor(6.8); // 6

// Shorthand
~~6.8; // 6
```


## Find max and min number in array

```js
// Shorthand 
const arr = [6, 33, 23, 17]; 
Math.max(...arr); // 33 
Math.min(...arr); // 6
```


## For loop

We can use `for...of` loop to iterate through arrays and `for...in` loop access the index of each value.

```js
let arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) { 
  console.log(arr[i]); 
}

// Shorthand: for of loop 
for (const val of arr) { 
  console.log(val); 
} 

// Shorthand: for in loop 
for (const index in arr) { 
  console.log(`index: ${index} and value: ${arr[index]}`); 
}
```


## Merge arrays

```js
let arr1 = [20, 30];

let arr2 = arr1.concat([60, 80]); // [20, 30, 60, 80]

//Shorthand 
let arr2 = [...arr1, 60, 80];  // [20, 30, 60, 80]
```


## Deep cloning of multi-level object

We can us `JSON.stringify()` and `JSON.parse()` if our object doesn't contains functions, `undefined`, `NaN` or `Date` as values.

We can deep clone using spread operator, if we have single level object.

```js
let obj = {x: 20, y: {z: 30}}; 

const makeDeepClone = (obj) => {
  let newObject = {};
  Object.keys(obj).map(key => {
    if(typeof obj[key] === 'object') {
      newObject[key] = makeDeepClone(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  });
 return newObject;
}
const cloneObj = makeDeepClone(obj);

// Shorthand
const cloneObj = JSON.parse(JSON.stringify(obj));

//Shorthand for single level object
let obj = {x: 20, y: 'hello'};
const cloneObj = {...obj};
```


## Get character from string

```js
let str = 'jscurious.com';
str.charAt(2); // c

//Shorthand 
str[2]; // c
```
