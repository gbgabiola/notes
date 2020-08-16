# Modern JavaScript Fundamentals

- [What is JavaScript?](#what-is-javascript)
- [Why Learn JavaScript?](#why-learn-javascript)
- [Using the Console](#using-the-console)
- [Variables - var, let, const](#variables---var-let-const)
- [Data Types in JavaScript](#data-types-in-javascript)
- [Types of Conversion](#types-of-conversion)
- [Numbers - The Math Object](#numbers---the-math-object)
- [String Methods - Concatenation](#string-methods---concatenation)
- [Template Literals](#template-literals)
- [Arrays - Array Methods](#arrays---array-methods)
- [Object Literals](#object-literals)
- [Dates - Times](#dates---times)
- [If Statements - Comparison Operators](#if-statements---comparison-operators)
- [Switches](#switches)
- [Functions](#functions)
- [Constructor Functions & Prototypes](#constructor-functions--prototypes)
- [ES6 Classes](#es6-classes)
- [General Loops](#general-loops)
- [Window Methods / Objects / Properties](#window-methods--objects--properties)
- [Block Scope With let const](#block-scope-with-let-const)


## What is JavaScript?

- high level, interpreted programming language
- conforms to the **ECMAScript** specification
- multi-paradigm
- runs on the client/browser as well as on the server (Node.js)


## Why Learn JavaScript?

- it is the programming language of the browser
- build very interactive user interfaces with frameworks like React, Vue, and Angular
- used in building very fast server side and full stack applications
- used in mobile development (React Native, NativeScript, Ionic)
- used in desktop application development (Electron JS)


## Using the Console

```js
console.log('//--- CONSOLE ---//');

console.table({ a: 1, b: 2 });
console.error('Ths is an error!');
// console.clear();
console.warn('This is a warning!');

// Check the time it takes to log to the console
console.time('Time');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.timeEnd('Time');
```


## Variables - var, let, const

`var` and `let` are pretty much the same, they can be reassigned, but
`const` variables cannot be reassigned to a new type

```js
// var keyword
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

var greeting; // init var
console.log(greeting); // greeting will return undefined because it has no value
greeting = 'Hello'; // assigning a value to greeting variable.
console.log(greeting); // log variable value in the console.

/**
 * ******************************
 * Variables rules:
 * can contain letters, numbers, _, $
 * cannot start with a number.
 *
 * Multi Word Variable Names:
 *
 * var firstName = 'John';    // camelCase
 * var first_name = 'Sara';   // under_score
 * var FirstName = 'Tom';     // PascalCase
 * var firstname;             // lowercase
 * ******************************
 */

// let keyword
let name2;                     // init variable.
name2 = 'John Doe';            // assign a value to variable.
console.log(name2);
name2 = 'Steve Smith';         // reassign value to the variable.
console.log(name2);

// const keyword
const person = {              // create an onject
  name: 'John',
  age: 30
}

console.log(person); // log object literal

person.name = 'Sara'; // taking the object property and mutating/changing the value
person.age = 32; // taking the object property and mutating/changing the value.
console.log(person); // log the new object literal values.

const numbers = [1,2,3,4,5]; // create an Array.
console.log(numbers); // log the 5 items within the array

numbers.push(6); // adding 6 to the array using the push method
console.log(numbers); // log the number arrays with 6 items
```


## Data Types in JavaScript

### 6 Primitive Data Types

```js
// 1. String
const name = 'John Doe';

// 2. Numbers
const age = 45;

// 3. Boolean
const hasKinds = true;

// 4. Null
const car = null;

// 5. Undefined
let test;

// 6. Symbol
const sym = Symbol();
```

### Reference Data Type - Objects

```js
// Array
const hobbies = ['movies', 'music'];

// Object Literal
const address = {
  city: 'London',
  state: 'England'
}

// Date
const today = new Date();

console.log(today);
console.log(typeof today);
```


## Types of Conversion

```js
let val;

// Number to String
val = String(555);
val = String(4 + 4);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4]);

// toString()
val = (5).toString(); // Number to String

val = true.toString(); // 'true' - Boolean to String

// String to Number
val = Number('5');

// Boolean to Number
val = Number(true); // 1
val = Number(false); // 0

val = Number(null); // 0
val = Number('hello'); // NaN

// Array to Number
val = Number([1,2,3]); // NaN

val = parseInt('100.30'); // 100 integer only
val = parseFloat('100.31'); // 100.31
```

### Output

```js
console.log(val);
console.log(typeof val);
console.log(val.length); // will only work on strings (or else undefined)
console.log(val.toFixed());// will only work on numbers (or else NaN)
```

### Type Coercion

```js
const val1 = String(5);
const val2 = 6;
// const sum = va1 + val2; // '56'
const sum = Number(va1 + val2);

console.log(sum);
console.log(typeof sum);
// 56
// number
// js concat the String(5) to 6
```


## Numbers - The Math Object

```js
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2; // 150
val = num1 * num2; // 5000
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 * num2; // 0

// Math object
val = Math.PI; // 3.14159265
val = Math.E; // 2.71828182
val = Math.round(2.4); // 2
val = Math.ceil(2.4); // 3 rounding up
val = Math.floor(2.8); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3
val = Math.pow(8, 2); // 64
val = Math.min(2,33,4,1,55,6,3,-2); // -2
val = Math.min(2,33,4,1,55,6,3,-2); // 55
val = Math.random(); // 0.2312423
val = Math.random() * 20); // 0-19.823492
val = Math.random() * 20 + 1; // 1-20.1121241
val = Math.floor(Math.random() * 20 + 1); // 1-20 random number

console.log(val)
```


## String Methods - Concatenation

```js
const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Genesis';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName; // WilliamJohnson

// Concatenation
val = firstName + ' ' + lastName; // William Johnson

// Append
val = 'Genesis '; // Genesis
val += 'Gabiola'; // Genesis Gabiola

val = 'Hello, my name is ' + firstName + ' and I am ' + age; // Hello, my name is William and I am 36

// Escaping
val = 'That\'s awesome, I can\'t wait';
val = "That's awesome, I can't wait";

// Length
val = firstName.length; // 7

// concat() Method
val = firstName.concat(' ', lastName); // William Johnson

// Change case
val = firstName.toUpperCase(); // WILLIAM
val = firstName.toLowerCase(); // william

val = firstName[0]; // W

// indexOf()
val = firstName.indexOf('l'); // l
val = firstName.lastIndexOf('l') // 3

// charAt()
val = firstName.charAt('2'); // l

// Get last char
val = firstName.charAt(firstName.length - 1); // m

// substring()
val = firstName.substring(0, 4); // Will

// slice()
val = firstName.slice(0, 4); // liam
val = firstName.slice(-3); // iam

// split()
val = str.split(' '); // split the words by selecting space
val = tags.split(','); // split the words by selecting comma

// replace()
val = str.replace('Genesis', 'Jack'); // Hello there my name is Jack

// includes()
val = str.includes('Hello'); // true
val = str.includes('foo'); // false

console.log(val);
```


## Template Literals

```js
const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5)
html = '<ul><li>Name: '+ name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
       '<li>Name: '+ name + '</li>' +
       '<li>Age: '+ age + '</li>' +
       '<li>Job: '+ job + '</li>' +
       '<li>City: '+ city + '</li>' +
       '</ul>';

function hello() {
  return 'hello';
}
// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;
```


## Arrays - Array Methods

```js
// Create some arrays
const numbers = [43,56,23,5];
const numbers2 = new Array(22,45,34);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// Get array length
val = numbers.length; // 4

// Check if it is array
val = Array.isArray(numbers); // true

// Get single value
val = numbers[3] // 23
val = numbers[0] // 43

// Insert into array
numbers[2] = 100; // [43, 56, 100, 23, 5]
    
// Find index of value
val = numbers.indexOf(36); // 5

// Mutating arrays

// Add on to end
numbers.push(250); // [..., 23, 5, 250]
// Add on to front
numbers.unshift(120); // [120, 43, 56,..]
// Take off from end
numbers.pop(); // [..., 23, 5]
// Take off from front
numbers.shift(); // [43, 56,...]
// Splice values
numbers.splice(1,3); // [43, 5]
// Reverse
numbers.reverse(); // [5, 43]

// Concatenate arrays
val = numbers.concat(numbers2); // [5, 43, 22, 45, 33]

// Sorting arrays
val = fruit.sort(); // ['Apple', 'Banana', 'Orange', 'Pear']
val = numbers.sort(); // sort the first number

// Use the "compare function"
val = numbers.sort(function(x, y) {
  return x - y;
});

// Reverse sort
val = numbers.sort(function(x, y) {
  return y - x;
});

// Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
```


## Object Literals

```js
const person {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    return 2017 - this.age; // 1987
    // Use this keyword to access inside the object
  }
}
let val;

val = person;

// Get specific value
val = person.firstName; // Steve
val = person['lastName']; // Smith
val = person.age; // 30
val = person.hobbies[1]; // sport
val = person.address.state; // 'FL'
val = person.address['city']; // 'Miami'
val = person.getBirthYear(); // 1987

console.log(val);

const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'Nancy', age: 40 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
```


## Dates - Times

```js
let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981 11:25:00');
birthday = new Date('9/10/1981 11:25:00');

val = today.getMonth();
val = today.getDate());
val = today.getday();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2); // Mar 10
birthday.setDate(12); // Mar 12
birthday.setFullYear(1985); // Mar 12 1985
birthday.setHours(3); // 03:00:00
birthday.setMinutes(30); // 03:30:00
birthday.setSeconds(25); // 03:30:25

console.log(birthday);
```


## If Statements - Comparison Operators

```js
// if (something) {
//   do something
// } else {
//   do something else
// }
const id = 100;

// Equal to
if (id == 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
} // INCORRECT

// Not equal to
if(id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
} // CORRECT

// Equal to value & type
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
} // CORRECT

// Not equal to value & type
if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
} // INCORRECT

// Test if undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
} // NO ID

// Greater or less than
if (id > 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
} // INCORRECT

// if else
const color = 'yellow';

if (color === 'red'){
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// Logical Operators
const name = 'Steve';
const age = 4;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
} // Steve is a child

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`)
} else {
  console.log(`${name} is registered for the race`);
} // Steve can not run in race

// Ternary Operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// Without braces
if (id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');
```


## Switches

```js
const color = 'red';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let day;

switch (new Date().getDay()) {
  case: 0:
    day = 'Sunday';
    break;
  case: 1:
    day = 'Monday';
    break;
  case: 2:
    day = 'Tuesday';
    break;
  case: 3:
    day = 'Wednesday';
    break;
  case: 4:
    day = 'Thursday';
    break;
  case: 5:
    day = 'Friday';
    break;
  case: 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);
```


## Functions

```js
// Function Declarations
function greet(firstName = 'John', lastName = 'Doe') {
  // ES5
  // if (typeof firstName === 'undefined') { firstName = 'John'; }
  // if (typeof lastName === 'undefined') { lastName = 'Doe'; }
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('Steve', 'Smith')); // Hello Steve Smith

// Function Expressions
const square = function(num) {
  return num * num;
};
console.log(square(8)); // 64

// Arrow Function
const square = (num) => num * num; // 64

// Immediately Invokable Function Expressions - IIFEs
function() {
  console.log('IIFE Ran..');
})();

function(name) {
  console.log('Hello ' + name);
})('Genesis'); // Hello Genesis

// Property Methods
const todo = {
  add: function() {
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log('Delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();
```


## Constructor Functions & Prototypes

```js
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1.getBirthYear());
console.log(person1.getFullName());
```


## ES6 Classes

```js
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1.getBirthYear());
console.log(person1.getFullName());
```


## General Loops

```js
// for loop
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite number');
    continue;
  }
  if (i === 5) {
    console.log('Stop the loop');
    break;
  }
  console.log('Number ' + i);
}

// while loop
let i = 0;
while (i < 10;) {
  console.log('Number ' + i);
  i++;
}

// do while loop
let i = 0;
do {
  console.log('Number ' + i);
  i++;
} while (i < 10);

// loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// forEach
cars.forEach(function(car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});


const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' },
  { id: 4, name: 'Steve' }
];

// map
const ids = users.map(function() {
  return user.id;
});
console.log(ids);

// filter
const username = users.filter(function(user) {
  return user.name === 'Sara';
});

// for in loop
const user = {
  firstName: 'John',
  lastName: 'Does',
  age: 40
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
```


## Window Methods / Objects / Properties

```js
// Alert
alert('Hello World');

// Prompt
const input = prompt();
alert(input);

// Confirm
if (confirm('Are you sure')) {
  console.log('YES');
} else {
  console.log('NO');
}

let val;
// Outer height and width
val = windows.outerHeight;
val = windows.outerWidth;

// Inner height and width
val = windows.innerHeight;
val = windows.innerWidth;

// Scroll points
val = windows.scrollY; // for vertical
val = windows.scrollX; // for horizontal

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
window.location.href = 'https://google.com';

// Reload
window.location.reload();

// History Object
window.history.go(-2);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
```


## Block Scope With let const

```js
// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

test();

if (true) {
  // Block Level Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
}

for (let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);
```
