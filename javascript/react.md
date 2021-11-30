# React


React is a JavaScript library, so JavaScript knowledge is a must.


## JSX

- JSX is a syntax extension stands for JavaScript XML, which allows us to write HTML in React
  - not required, but helpful when working with UI inside JS code
  - allows to show more useful error and warning messages
- embed JS expressions by wrapping it in curly braces
  - parentheses are recommended when splitting JSX over multiple lines to avoid [automatic semicolon insertion (ASI)](https://stackoverflow.com/q/2846283)
- JSX expressions become regular JS function calls and evaluate to JS objects
  - can be used in `if` statements and `for` loops, assign to variables, accept as arguments, and return from functions
- use quotes to specify string literals as attributes
  - use quotes for string values
  - curly braces for expressions
  - but not both in the same attribute
  - **Note:** React DOM uses _camelCase_ property naming convention instead of HTML attribute names
- if tag is empty close it immediately with `/>`
- by default, React DOM escapes any values and convert it to a string before rendering
  - this helps prevent XSS (cross-site-scripting) attacks
- JSX Represents Objects
  - Babel compiles JSX down to `React.createElement()` calls


## Rendering Elements

- `ReactDOM.render()` renders React element into a root DOM node
