# PHP Fundamentals


- [Introduction](#introduction)
- [Web Server & Setup](#web-server--setup)
- [PHP Syntax](#php-syntax)
- [Constants & Variable variables](#constants--variable-variables)
- [Data Types & Type Casting](#data-types--type-casting)
- [Expressions](#expressions)
- [Operators](#operators)
- [Control Structures](#control-structures)
- [Functions](#functions)


## Introduction

- PHP
  - PHP: Hypertext Preprocessor
  - Server Side Programming /Scripting Language
  - can be embedded directly within HTML (`<?php ?>`)
  - files uses a `.php` file extension
- How it works
  - Clients makes a request
  - Server runs PHP / extensions
  - Query database if needed
  - Load other files if needed
  - Result is sent back to client
- Why use it
  - Easy To Learn
  - Free & Open Source
  - Great Support
  - Cross Platform
  - Freedom
  - Frameworks
  - Database Compatibility
- Can do
  - Create dynamic page content
  - Interact with files on the server
  - Collect & process forms
  - Send/receive cookies
  - Interact with databases
  - Access control
  - Encrypt data
  - Almost anything else
- Can build
  - Basic Websites
  - Blog Types Websites
  - Shopping Carts
  - Social Networks
  - Content Management Systems
  - Membership Websites
  - Search Engines
  - Backend APIs


## Web Server & Setup

- Web Server refers to a hardware or software or both
  - can process incoming requests using different protocols, e.g., `http` protocol which is used by the browser
  - can host either single or multiple websites on the same server using the same resource through virtual host
  - most common Web Servers
    - Apache
    - Nginx
- PHP Setup
  - PHP Installed in OS
    - Manual installation
    - Manual DB installation
    - Manual configuration
  - XAMPP / MAMP / WAMP
    - Pros
      - All in one solution
      - Contains Web Server and database
      - Preconfigured
    - Cons
      - No multiple PHP/MySQL versions
      - Not for production
      - Difficult to maintain multiple projects
      - "Works on my machine"
  - Virtual Machine / Docker
    - Better alternative
  - Code Editors
    - Sublime Text
    - VS Code
    - Atom
    - PHPStorm


## PHP Syntax

- `?>` is optional when writing pure php
  - avoids accidental space/text
- Used for printing
- **Best practice**: always add semicolon at the end of the statement
  - `echo` is faster, but doesn't return a value 
  - `print` returns a value and can be used with expressions
- **Variables**
  - prefix `$` to create variable
  - start with letter or underscore
  - only letters, numbers and underscores
  - case sensitive
  - by default, assigned by value
  - prefix with `&` to assign by reference 
  - enclose variables inside curly braces `{}`
    - more readable and shows clarity
- `.` is **concatenation** operator
- PHP in HTML
  - use `<?=` for printing
  - use `<?php` to process some php
- **Comments**
  - `//` or `#` for single line comment
  - `/* */` for multi-line comment


## Constants & Variable variables

- **Constant**
  - variables that cannot be changed
  - **Best practice**: use all uppercase
  - 2 ways to define constants:
    - using `define` function
      - 1st param: variable name
      - 2nd param: variable value
      - 3rd param: `true` for case insensitive (depracated)
      - e.g., `define('GREETING', 'Hello World');`
      - defined at a runtime
    - using `const` keyword
      - defined at a compile time
      - cannot be use within control structures like loops or if statements
  - `defined` function checks if the constant has been defined
  - **Note**: use constants with data that doesn't change often
  - **Magic constants** are predefined constants that can change on the basis of their use
    - starts and ends with double underscore (`__`)
- **Variable variables** takes the value of a variable and treats that as the name of a variable


## Data Types & Type Casting

- PHP is dynamically typed, also known as weakly typed language which doesn't require to define the type of variable
  - type checking happens at runtime
  - more flexible in exchange of performance which can result in unexpected bugs
- **Data Types**
  - **4 Scaler Types**
    - `bool` (**Boolean**)
      - expresses truth value either `true` or `false`
      - used mostly in control structure
      - Values that evaluates to `false`
        - int: `0`, `-0`
        - float: `0.0`, `-0.0`
        - string: `''`, `'0'`
        - array: `[]` 
        - null
      - `is_bool` function returns `true` if boolean
    - `int` (**Integer**)
      - can be defined by:
        - decimal/base10: `42`
        - hexadecimal: `0x2A` -> `42`
        - octal: `055` -> `45`
        - binary: `0b110` -> `6` 
      - in type casting, if its data type cannot be converted it will return 0
      - `is_int` or `is_integer` function returns `true` if integer
    - `float`
      - can be defined by:
        - exponential float: `13.5e3` -> `13500`, `13.5e-3` -> `0.0135`
      - `floor` function rounds the fraction down
      - `ceil` function rounds the fraction up
      - **Note**:
        - never trust the floating numbers to the last digit and never compare floating numbers directly for equality
        - constant `NAN` (Not A Number) will return when some operations or calculations cannot be computed
        - constant `INF` (Infinity) will return when reach out of bounds of float
      - `is_nan` function returns `true` when `NAN`
      - `is_infinite` function returns `true` if infinite
      - `is_finite` function returns `true` if not infinite
    - `string`
      - charaters in a string can be access using index (zero based)
      - 4 ways to define strings
        - **single quoted**
        - **double quoted** can include variables
        - **heredoc syntax** treats string as enclosed in double quotes
        - **nowdoc syntax** treats string as enclosed in single quotes
      - `nl2br` function inserts HTML line breaks before all newlines in a string
      - **Note**: use **heredoc** or **nowdoc** for multi-line strings with complex expressions
        - better than having lots of concatenation
        - better than needing to escape quotes inside quotes
  - **4 Compound Types**
    - **array**
      - a list of values which can be multiple data types
      - 2 ways to define array
        - `array()` an old syntax
        - `[]` a new syntax
      - **Indexed Arrays** are zero based index (key)
        - `count` function return the length of an array or an object
        - `$arrayVariable[] = 'Strings';` adds `Strings` at the end of the array
        - `array_push` pushes one or more elements onto the end of array
          - mutates the array, the variable is passed by reference which modifies the original array
        - `array_pop` function removes the last element from an array and returns it
        - `array_shift` function removes the first element from an array and returns it
          - re-index the key
        - remove elements using
        - `unset` function can be used to remove element/s 
          - doesn't re-index arrays
        - `isset` function determines if variable is declared and is different than `null`
        - `array_keys_exists` function returns `true` if the given key is set in the array
      - **Associative Arrays** is when keys are named
        - keys must be either string or integer
        - add elements to associative arrays at specified keys
        - duplicate keys & overwriting
        - keys are not required, but PHP will automatically assign an integer key
      - **Multi-Dimensioal Arrays** are arrays inside an array
        - can be access by keys and index
    - **object**
    - **callable**
    - **iterable**
  - **2 Special Types**
    - **resource**
    - **null**
      - considered be `null` if:
        - assigned the constant `null`
        - not been set a value
        - unset by using `unset` function
      - `is_null` function returns `true` if `null`
- Get the data type
  - `gettype` function returns the type of a variable _value_
  - `var_dump` function displays structured information that includes its type and value
- `print_r` function displays a readable information about a variable
- Automatic type detection is by how the variable's value is set
- **Type Juggling** / **Type Coercion**
  - PHP will try and convert the given value to the appropriate data type
  - `declare(strict_types=1);` for strict mode
  - Strict mode will throw an error when pass another type
- **Type Casting**
  - the name of the desired type is written in parentheses before the variable which is to be cast


## Expressions

- expressions are anything that has a value or evaluates to a value
  - PHP is an expression-oriented language where almost everything is an expression, e.g., constants, variables, literal values, etc...


## Operators

- Operator are used to perform operation
- Operators divided by three groups:
  - **unary** takes 1 value
  - **binary** takes 2 values
  - **ternary** takes 3 values
- **Arithmetic Operators**
  - `+` **Addition**
  - `-` **Subtraction**
  - `*` **Multiplication**
  - `/` **Division**
    - `fdiv` function returns floating point result of dividing the `$x` by the `$y`
      - if `$y` is zero, then `INF`, `-INF`, or `NAN` will be returned
  - `%` **Modulo**
  - `**` **Exponentiation**
  - `+$x` **Identity** converts `$x` to int or float
  - `-$x` **Negation** opposite of `$x`
- **Assignment Operators** (`=`)
  - **Arithmetic Assignment Operators**
    - `+=` **Arithmetic Addition**
    - `-=` **Arithmetic Subtraction**
    - `*=` **Arithmetic Multiplication**
    - `/=` **Arithmetic Division**
    - `%=` **Arithmetic Modulus**
    - `**=` **Arithmetic Exponentiation**
- **String Operators**
  - `.=` **String Concatenation**
- **Comparison Operators**
  - `==` **Equal**
  - `===` **Identical**
  - `!=` **Not equal**
  - `!==` **Not Identical**
  - `<` **Less than**
  - `>` **Greater than**
  - `<=` **Less than or equal to**
  - `>=` **Greater than or equal to**
  - `<=>` **Spaceship** an int less than, equal to, or greater than zero when `$x` is less than, equal to, or greater than `$y`, respectively
  - `?:` **Ternary operator**
  - `??=` **Null Coalesce**
- **Error Control Operators**
  - `@` suppress any error (**Note**: not recommended)
- **Incrementing/Decrementing Operators**
  - `++$a` **Pre-increment**, increment then return
  - `$a++` **Post-increment**, returns then increment
  - `-$a` **Pre-decrement**, decrement then return
  - `$a-` **Post-decrement**, returns then decrement
- **Logical Operators**
  - `and` or `&&` **And**
  - `or` or `||` **Or**
  - `xor` **Xor** returns `true` if either is `true`, but not both
  - `!` **Not**
- **Bitwise Operators**
  - `&` **And**
  - `|` **Or** (inclusive or)
  - `^` **Xor** (exclusive or)
  - `~` **Not**
  - `<<` **Shift left** steps to the left (each step means "multiply by two")
  - `>>` **Shift right** steps to the right (each step means "divide by two")
- **Array Operators**
  - `+`	**Union**
  - `==` **Equality**
  - `===` **Identity**
  - `!=` or `<>` **Inequality**
  - `!==` **Non-identity**
- [Operator Precedence & Associativity](https://www.php.net/manual/en/language.operators.precedence.php#language.operators.precedence) 
  - **Note**: use parentheses
    - adds clarity and readability
    - being explicit on how the operators are group instead of relying on the precedence of the associativity


## Control Structures

- allows to group multiple statements and control the flow of the code execution

### if/else Conditional Statements

- **if / else / elseif**
  - used for conditional execution of codes
  - `if` expression evaluates to `true`, PHP will execute statement
  - `else` extends an `if` statement and only executes it when all statements evaluates to `false`
  - `elseif` executes a different statement in case the original `if` expression evaluates to `false`
- **Loops**
  - `while` loop execute the statement(s) repeatedly, as long as the expression evaluates to `true`
  - `for` loop has 3 expressions, 1st is initialization, 2nd is conditional, 3rd is increment
    - loop continues as long the expression evaluates to `true`, if the expression evaluates to `false`, the execution of the loop ends
  - `do-while` loop like `while` loop, except that it's guaranteed to run at least once even of the expression evaluates to `false` right from the beginning
  - `foreach` construct works only on arrays and objects
    - `json_encode` returns the JSON representation of a value
    - `implode` joins array elements with a string
  - **Note**: performance issue arise when calling function in a conditional expression, store it in a variable then call the variable instead
- `break` ends execution of the current loop
- `continue` skips the loop iteration and continue execution at the condition evaluation and then the beginning of the next iteration
- `switch` statement is similar to a series of `if` statements
  - **Note**: does loose comparison
- `match` expression branches evaluation based on an identity check (`===`) of a value
- `return` returns program control to the calling module
  - if called within a function, it immediately ends execution of the current function
  - if called from global scope, then execution of the current script file is ended
- `declare` construct is used to set execution directives for a block of code
  - `ticks` directive 
  - `encoding` directive
  - `strict_types` directive affects type coercion
- alternative syntax format: `<?php if (conditional): ?>` then `<?php endif; ?>`
- `include` expression includes and evaluates the specified file
- `include_once` 
- `require` is identical to `include` except upon failure it will not display the output and gives an error
- `require_once` 


## Functions

- functions is a block of code that can optionally take an input, and return a value
  - need not be defined before referencing, except when a function  is conditionally defined
  - all functions/classes have global scope even if defined inside functions/classes
  - functions within functions
    - functions inside can be access as long as the parent function is called first
  - **Note**: Not recommended to define function conditionally or inside a function
- **Function Return**
  - any **type** may be returned, including arrays and objects
  - if `return` is omitted the value `null` will be returned
  - `mixed` type which value can be any value
- **Function arguments**
  - arguments are information passed to a function
  - parameters vs arguments
    - parameters are passed to a function definition
    - arguments are actual value passed to a function execution
  - **Note**: use `strict_types` to avoid confusion with types
  - every parameters requires arguments or else error
  - optional parameters must be defined after non-optional parameters
  - arguments by default are passed by values
  - **Argument unpacking** refers to an operation that consists of assigning an iterable of values to a list of variables in a single assignment statement
    - using **Splat** (`...`) operator
  - **Variadic** functions accepts variable number of arguments
  - **Named arguments** allow passing arguments to a function based on the parameter name, rather than the parameter position
