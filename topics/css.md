Set font size for easy rem calculations

- default document font size = 16px, 1rem = 16px, 100% = 16px
- (100% / 16px) * 10 = 62.5%, 1rem = 10px, 62.5% = 10px

  ```css
  html {
    font-size: 62.5%;
  }
  ```

A few media query to set some font sizes at different screen sizes.

- This helps automate a bit of responsiveness.
- The trick is to use the rem unit for size values, margin and padding.
- Because rem is relative to the document font size
- when we scale up or down the font size on the document
- it will affect all properties using rem units for the values.


- Use the em unit for breakpoints
- The calculation is the following
- screen size divided by browser base font size
- As an example: a breakpoint at 980px
- 980px / 16px = 61.25em

```css
/* 1200px / 16px = 75em */
@media (max-width: 75em) {
  html {
    font-size: 60%;
  }
}

/* 980px / 16px = 61.25em */
@media (max-width: 61.25em) {
  html {
    font-size: 58%;
  }
}

/* 460px / 16px = 28.75em */
@media (max-width: 28.75em) {
  html {
    font-size: 55%;
  }
}
```

## CSS Custom Properties

### Introduction

- main most benefits of CSS preprocessors are:
  - they allow to nest selectors
  - the provide an easy imports functionality
  - they give us variables
- **CSS Custom Properties** is a modern CSS feature commonly known as **CSS Variables**
- CSS is not a programming language, it's mainly a declarative syntax to tell browsers how they should display an HTML page
- variable is a name that refers to a value
  - helps reduce repetition and inconsistencies in our CSS, by centralizing the values definition
- introduces a unique feature that CSS preprocessors won't never have: **we can access and change the value of a CSS Variable programmatically using JS**
- browser support for CSS Custom Properties is **very good**, according to [Can I Use](https://www.caniuse.com/#feat=css-variables)


### Custom Properties basics

- CSS Custom Property is defined with a special syntax, prepending two dashes to a name (`--variable-name`), then a colon and a value
  - access it using `var()` function
  - values can be any valid CSS value

  ```css
  :root {
    --primary-color: yellow;
    --default-padding: 30px 30px 20px 20px;
    --default-color: red;
    --default-background: #fff;
  }

  p {
    color: var(--primary-color)
  }
  ```


### Create variables inside any element

- CSS Variables can be defined inside any element
  - case sensitive, e.g., `--width` is different than `--Width`
- **scope** is what changes in those elements

  ```css
  :root {
    --default-color: red;
  }

  body {
    --default-color: red;
  }

  main {
    --default-color: red;
  }

  p {
    --default-color: red;
  }

  span {
    --default-color: red;
  }

  a:hover {
    --default-color: red;
  }
  ```


### Variables scope

- adding variables to a selector makes them available to all its children
- `:root` is a CSS pseudo-class that identifies the root element of a tree
- in the context of an HTML document, `:root` points to the `html` element, except that `:root` has higher specificity
- in the context of an SVG image, `:root` points to the `svg` tag
- variables can be **reassigned**
- we can also overwrite a variable inside the HTML using **inline styles**
- CSS Variables follow the normal CSS cascading rules, with precedence set according to specificity


### Interacting with a CSS Variable value using JS

- set a variable value using plain JS
 
  ```js
  const element = document.getElementById('my-element');
  element.style.setProperty('--variable-name', 'a-value');
  ```

- access a variable value, in case the variable is defined on :root

  ```js
  const styles = getComputedStyle(document.documentElement);
  const value = String(styles.getPropertyValue('--variable-name')).trim();
  ```

- get the style applied to a specific element, in case of variables set with a different scope

  ```js
  const element = document.getElementById('my-element');
  const styles = getComputedStyle(element);
  const value = String(styles.getPropertyValue('--variable-name')).trim();
  ```


### Handling invalid values

- if a variable is assigned to a property which does not accept the variable value, it's considered invalid
  - e.g., passing a pixel value to a `position` property, rem value to a `color` property
  - line will be considered invalid and ignored


### Math in CSS Variables

- `calc()` function is used to do math in CSS Variables

  ```css
  :root {
    --default-left-padding: calc(10px * 2);
  }
  ```


### Media queries with CSS Variables

- CSS Variables normally apply to media queries

  ```css
  body {
    --width: 500px;
  }

  @media screen and (max-width: 1000px) and (min-width: 700px) {
    --width: 800px;
  }

  .container {
    width: var(--width);
  }
  ```


### Setting a fallback value for var()

- `var()`  function accepts a second parameter, which is the default fallback value when the variable value is not set

  ```css
  .container {
    margin: var(--default-margin, 30px);
  }
  ```
