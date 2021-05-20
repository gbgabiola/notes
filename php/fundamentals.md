# PHP Fundamentals


### Table of Contents

- [Introduction](#introduction)
- [Variables, Constants, Data Types](#variables-constants-data-types)
- [Arrays](#arrays)
- [Loops](#loops)


## Introduction

- php
  - PHP: Hypertext Preprocessor
  - Server Side Programming /Scripting Language
  - can be embedded directly within HTML (`<?php ?>`)
  - files uses a `.php` file extension
- how it works
  - Clients makes a request
  - Server runs PHP / extensions
  - Query database if needed
  - Load other files if needed
  - Result is sent back to client
- why use it
  - Easy To Learn
  - Free & Open Source
  - Great Support
  - Cross Platform
  - Freedom
  - Frameworks
  - Database Compatibility
- can do
  - Create dynamic page content
  - Interact with files on the server
  - Collect & process forms
  - Send/receive cookies
  - Interact with databases
  - Access control
  - Encrypt data
  - Almost anything else
- can build
  - Basic Websites
  - Blog Types Websites
  - Shopping Carts
  - Social Networks
  - Content Management Systems
  - Membership Websites
  - Search Engines
  - Backend APIs


## Variables, Constants, Data Types

- used for printing
  - `echo` is faster, but doesn't return a value 
  - `print` returns a value and can be used with expressions
- comments
  - `//` single line comment
  - `/* */` multi-line comment
- variable
  - prefix `$` to create variable
  - start with letter or underscore
  - only letters, numbers and underscores
  - case sensitive
  - `$output`
- data types
  - String, characters inside quotes
  - Integers, numbers
  - floats, numbers with decimals
  - Booleans, `true` or `false`
  - Arrays
  - Objects
  - NULL
  - Resource
- concatenation
  - use `.` instead of `+`
- escape sequences
  - using `\`
- constants
  - variables that cannot be changed
  - using `define` function
    - 1st parameter: variable name
    - 2nd paramenter: variable value
    - 3rd parameter: `true` for case insensitive (depracated)
    - e.g., `define('GREETING', 'Hello World', true);`
  - common practice is use all uppercase


## Arrays

- Array is a variable that holds multiple values
  - zero based
  - can use `array` function or using brackets `[]`
- 3 types
  - Indexed
    - `count()` counts the number of items
    - `print_r()` is like `echo` for arrays
    - `var_dump()` displays key/value pairs including data types
    - e.g., `['Genesis', 28]` or `array('Genesis', 28)`
  - Associative
    - allows to define key/value pairs
    - e.g., `['Genesis' => 28]` or `array('Genesis' => 28)`
  - Multi-dimensional
    - nested arrays: arrays inside an array
    - e.g., `$cars = array(array('Honda', 20, 10), array('Toyota', 30, 20), array('Ford', 23, 12));`


## Loops

- loops execute code set number of times
- 4 types of loop
  - For
    - usually used when you know the number of times its going to be executed
    - params: initializer, condition, increment
    - e.g., `for ($i = 0; $i < 10; $i++) { }`
  - While
    - params: condition
    - e.g., `while ($i < 10) { }`
  - Do...While
    - always going to run at least once
    - params: condition
    - e.g., `do { } while($i < 10)`
  - Foreach
    - used for arrays
    - Indexed: e.g., `foreach ($people as $person) { }`
    - Associative: e.g., `foreach ($people as $person => $email) { }`
