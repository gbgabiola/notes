# TypeScript

- [What is TypeScript](#what-is-typescript)
- [Pros & Cons](#pros--cons)
- [Compiling TypeScript](#compiling-typescript)
- [TS Config and Folder Structure](#ts-config-and-folder-structure)
- [Basic Types](#basic-types)
- [Arrays & Tuples](#arrays--tuples)
- [Union & Enum](#union--enum)
- [Objects](#objects)
- [Type Assertion](#type-assertion)
- [Functions](#functions)
- [Interfaces](#interfaces)
- [Function Interface](#function-interface)
- [Classes](#classes)
- [Data Modifier](#data-modifier)
- [Implement Interface in Class](#implement-interface-in-class)
- [Extending Classes (Subclasses)](#extending-classes-subclasses)
- [Generics](#generics)


## What is TypeScript

- TypeScript is an open source language and is a superset of JS
  - Offers additional features to JS including static types
  - Using types is completely **optional**
  - Compiles down to regular JS
  - Can be used for frontend JS as well as backend with Node.js
  - Includes most features from ES6, ES7 (classes, arrow functions, etc.)
  - Types from 3rd-party libraries can be added with **type definition**


## Pros & Cons

- **Pros**
  - More Robust
  - Easily Spot Bugs
  - Predictability
  - Readability
  - Popular
- **Cons**
  - More Code to Write
  - More to Learn
  - Required Compilation
  - Not True Static Typing


## Compiling TypeScript

- TypeScript uses `.ts` and `.tsx` extensions
- **TSC** (TypeScript Compiler) is used to compile `.ts` files down to JS
- Can watch files and report errors at compile time
- Many tools include TS compilation by default
- Most IDEs have great support for TS
- The `tsconfig.json` file is used to configure how TypeScript works


## TS Config and Folder Structure

- `tsc --init` generates a `tsconfig.json file`
- `"target"`
- `"module"`
- `"outDir"` can be set to like `"./dist"`
- `"rootDir"` can be set to like `"./src"`


## Basic Types

```ts
let id: number = 5
let name: string = 'Genesis'
let isPublished: boolean = true
let random: any = 'Hello'
```


## Arrays & Tuples

```ts
let ids: number[] = [1, 2, 3, 4, 5]
// ids.push('Hello')
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Genesis', true]

// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Genesis'],
  [2, 'Diana'],
  [3, 'Alex'],
]
```


## Union & Enum

```ts
let pid: string | number;
pid = '14';

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

console.log(Direction1.Up); // 1
console.log(Direction1.Down); // 2
console.log(Direction1.Left); // 3
console.log(Direction1.Right); // 4

console.log(Direction2.Up); // Up
console.log(Direction2.Down); // Down
console.log(Direction2.Left); // Left
console.log(Direction2.Right); // Right
```


## Objects

```ts
// Messy Approach
// const user: {
//   id: number,
//   name: string
// } = {
//   id: 1,
//   name: 'Genesis',
// };

// Organized Approach
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Genesis',
};
```


## Type Assertion

```ts
let cid: any = 1

// Option 1:
let customerId = <number>cid

// Option 2
let customerId = cid as number
```


## Functions

```ts
function addNum(num1: number, num2: number): number {
  return num1 + num2;
}

// Void
function log(message: string | number): void {
  console.log(message);
}
```


## Interfaces

- `?` for optional property
- `readonly` property

```ts
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number
}

const user: UserInterface = {
  id: 1,
  name: 'Genesis',
};
```


## Function Interface

```ts
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
```


## Classes

```ts
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const genesis = new Person(1, 'Genesis Gabiola');
const alexa = new Person(2, 'Alexa Jones');
console.log(genesis, alexa);
```


## Data Modifier

- `private` property can only be accessed within its class
- `protected` property can only be accessed within its class
- `public` is the same thing as removing it

```ts
class Person {
  // public id: number;
  private id: number;
  // protected id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}

const genesis = new Person(1, 'Genesis Gabiola');

// genesis.id = 5; // will error if with private/protected
// console.log(genesis.register());
```


## Implement Interface in Class

```ts
interface PersonInterface {
  id: number;
  name: string;
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}
```


## Extending Classes (Subclasses)

```ts
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Class
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Jette', 'Developer');
console.log(emp.register());
```


## Generics

- generic `<T>` is like a placeholder of the type, e.g., `<number>`, `<string>`, etc.

```ts
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Genesis', 'Ruth', 'Robert']);
strArray.push('Harry');
```
