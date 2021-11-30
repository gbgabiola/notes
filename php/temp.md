# Basic PHP

- PHP Installation & Setup
- Syntax & Operators
- Variables & Data Types
- Control Structures & Functions
- Type Casting & Error Handling
- php.ini / web server configs
- Working With Arrays
- Working With Dates


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


## Superglobals

- Superglobals are built-in variables that are always available in all scopes
- available Superglobals variables:
  - `$GLOBALS`
  - `$_SERVER`
  - `$_GET`
  - `$_POST`
  - `$_FILES`
  - `$_COOKIE`
  - `$_SESSION`
  - `$_REQUEST`
  - `$_ENV`
- `$_SERVER`
  - `SERVER_NAME` name of the server host under which the current script is executing
  - `HTTP_HOST` Contents of the Host: header from the current request, if there is one
  - `SERVER_SOFTWARE` is what server is running
  - `DOCUMENT_ROOT` directory under which the current script is executing, as defined in the server's configuration file
