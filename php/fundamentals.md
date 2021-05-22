# PHP Fundamentals


- [Introduction](#introduction)
- [Variables, Constants, Data Types](#variables-constants-data-types)
- [Arrays](#arrays)
- [Loops](#loops)
- [Functions](#functions)
- [Conditionals & Comparison](#conditionals--comparison)
- [Dates & Timestamps](#dates--timestamps)
- [Include & Require](#include--require)


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


## Functions

- function is a block of code that can be repeatedly called
- name convention
  - camelCase: `myFunction()`
  - lower_case: `my_function()`
  - PascalCase: `MyFunction()`, mostly used for classes
- create a function using `function` keyword then name of a function with parenthesis
  - e.g., `function myFunction() { }`
- call or run a function by calling its name with parenthesis
  - e.g., `myFunction();`
- function accepts
  - parameters are variable inside a function parenthesis
    - can add default value
  - arguments are the values passed into the parenthesis when calling a function
- `return` keyword returns the value instead of just printing it
- passed by reference by adding `&` in front parameter


## Conditionals & Comparison

- conditional
  - using `if`, `elseif` and `else` statements
    ```php
    if ($num > 0) {
      # code...
    } elseif ($num < 0) {
      # code...
    } else {
      # code...
    }
    ```
  - nesting if statements
    ```php
    if ($num > 5) {
      # code...
      if ($Num < 10) {
        # code...
      }
    }
    ```
  - switch statements used for multiple conditions
    ```php
    switch ($favColor) {
      case 'red':
        echo 'Your favorite color is red';
        break;
      default:
        echo 'Your favorite color is something else';
    }
    ```
- comparison operators
  - `==` equal to
  - `===` equal value and equal type
  - `!=` not equal
  - `<>` not equal
  - `!==` not equal value or not equal type
  - `>` greater than
  - `<` less than
  - `>=` greater than or equal to
  - `<=` less than or equal to
  - `?` ternary operator
- logical operators
  - `&&` And `and`
  - `||` Or `or`
  - `!`	Not
  - `xor` Xor: one has to be true but not both


## Dates & Timestamps

- date
  - `d`: day
  - `m`: Month
  - `Y`: Year
  - `l`: Day of the Week
- timestamps
  - `h`: Hour
  - `i`: Minute
  - `s`: Seconds
  - `a`: AM or PM
- timezones
  - `date_default_timezone_get()` gets the timezone
  - `date_default_timezone_set('Asia/Manila')` sets the timezone
  - Unix timestamp is a long integer containing the number of seconds between the Unix Epoch (January 1 1970 00:00:00 GMT) and the time specified.
- `mktime()` returns the Unix timestamp of the arguments given
- `strtotime()` takes a string and convert it into Unix timestamp
- [php date link](https://www.php.net/manual/en/function.date.php)
  ```php
  echo date('Y/m/d');
  date_default_timezone_set('Asia/Manila');
  echo date_default_timezone_get();
  echo date('h:i:sa');

  $timestamp = mktime(3, 17, 43, 2, 14, 1993);

  $timestamp2 = strtotime('7:00pm March 22 2016');
  $timestamp3 = strtotime('tomorrow');
  $timestamp4 = strtotime('next Sunday');
  $timestamp5 = strtotime('+2 Days');
  echo date('m/d/Y h:i:sa', $timestamp5);
  ```


## Include & Require


- `include()` statement will only generate a PHP warning but allow script execution to continue
- `require()` statement will generate a fatal error and stops the script execution
  - use this if you don't want to continue the script
- `require_one()` is identical to `require()` except PHP will check if the file has already been included, it will not include it again
- `include`, `require`, and `require_once` allows us to insert codes into another php file
  - usually used for template files
  - minimize the population of codes in a single file
  - e.g., `include 'inc/header.php';`
