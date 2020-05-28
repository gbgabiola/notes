# React

<!-- ## ES5 vs ES6
### variable
arrow function
string interpolation -->

JavaScript concepts needed to be comfortable with using before learning React.

- [Variables](#variables)
- [Data Types](#data-types)
- [Working with Strings](#working-with-strings)
- [Conditionals](#conditionals)
- [Functions](#functions)
- [Objects](#objects)
- [Arrays](#arrays)
- [Array Methods](#array-methods)
- [Destructuring](#destructuring)
- [Modules](#modules)
- [Fetching Data and Working with APIs](#fetching-data-and-working-with-apis)
- [Manipulating the DOM](#manipulating-the-dom)
- [Handling Events](#handling-events)
- [Recommended Courses To Learn JavaScript](#recommended-courses-to-learn-javascript)


## Variables

`const` and `let` are **block scope variables** which can't be used outside the code block in which they were declared.

### Using it in react

```jsx
function App () {
  const myName = 'John Doe';
  let myAge = '27';
 
  return (
  <>
    <h1>{myName}</h1>
    <h1>{myAge}</h1>
  </>
  )
}
```

## Data Types

- `Strings` are used when you need to work with and manipulate text
- `Numbers` are used when you need to work with numbers (e.g when performing calculations)
- `Booleans` are used to hold true/false values
- `null` and `undefined` are used when a variable or object is _empty_


## Working with Strings

**String concatenation** is when you use the `+` operator to append strings together, but a better approach is to use **Template Literals**.

```js
const string = "Hi, my name is" + myName + " and I am " + age + " years old."

const string = `Hi, my name is ${myName} and I am ${age} years old`
```

**Note**: The variables within the `${}` syntax gets converted to string when the code runs

### Using it in React

```jsx
function WorkingWithStrings() {
  const myName = 'John Doe';
  const age = '27';
 
  return (
  <>
  <h1>{`Hi, my name is ${myName} and I am ${age} years old.`}</h1>
  </>
  );
}
```


## Conditionals

**Conditionals** are used when you want your code to do one thing based on some condition.

```js
if (condition) {
  statement_if_true()
} else {
  statment_if_false()
}

// Using ternary operator
condition ? statement_if_true : statement_if_false
```

**Ternary Operator** is a just a simplified if statement which reads as "if the condition is `true`, run the code to the left of the colon (`:`), otherwise run the code to the right of the colon (`:`) which result to `false`.

### Using it in React

```jsx
const MyDataComponent = (props) => {
  return (
    <>
      {props.condition ?
      <div>statement_if_true</div> : <div>statement_if_false</div>}
    </>
  )
}
```

Behind the scenes, the ternary operator is just an `if`/`else` statement, which is useful to make the code easier to follow and understand.

**Note**: Only use the ternary operator for basic `if`/`else` statements. If your conditionals are quite long with alot of logic, its best to use the `if`/`else` statement for readability.


## Functions

**Functions** are _blocks_ of code that let us write reusable code, and are quite heavily used in JavaScript and React.

We usually assign this function to a variable, so we can _call
it_ within our code.

Functions can return data by using the `return` keyword.

```js
const square = function(num) {
  return num * 2;
}
 
const result = square(4) // 8
```

**Arrow Functions** is a new syntax ES6 feature that allows us to write more concise functions with optional **implicit return**

```js
const multiplyBy2 = (num) => {
  return number * 2;
}

// implicit return
const multiplyBy2 = num => num * 2;
```

**Note**: You can only use **implicit returns** when your function returns something straight away. If you have variables, function calls, or other logic, you’ll need to use `{}` block with a `return` statement.


## Objects

## Arrays

## Array Methods

## Destructuring

## Modules

## Fetching Data and Working with APIs

## Manipulating the DOM

## Handling Events

## Recommended Courses To Learn JavaScript

---

**Components** are the building blocks of any React app and a typical React app will have many of these.

**Component** is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

A **component** in React is just a function that returns some JSX.

**State** is basically an object that represents a part of an app that can change, which the UI _reacts_ to. State can be anything; objects, booleans, arrays, strings or integers

The **useState** object gives us a variable with the **current value**, and a function that **lets us change that value**. When we call **useState** we can define an **initial** value.

Whenever the components state changes, React will re-render the component with the new state.

state belongs to the individual component, each component that renders is a copy, and has its own state/data.

Think of **Props** as data that gets passed to a component, which the component can then use

Mental Note: "Context is primarily used when some data needs to be accessible by many components at different nesting levels." - React Docs.
