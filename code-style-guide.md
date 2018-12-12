# Code Style Guide

## HTML Guide

#### Syntax
- Use soft tabs with two spaces—they're the only way to guarantee code renders the same in any environment.
- Nested elements should be indented once (two spaces).
- Always use double quotes, never single quotes, on attributes.
- Don't include a trailing slash in self-closing elements—the [HTML5 spec](http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) says they're optional.
- Don’t omit optional closing tags (e.g. `</li>` or `</body>`).

```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>Page title</title>
    <link rel="stylesheet" href="code-guide.css">
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>

    <script src="code-guide.js"></script>
  </body>
</html>
```

#### Attribute order
HTML attributes should come in this particular order for easier reading of code.

- `class`
- `id`, `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value`
- `title`, `alt`
- `role`, `aria`-*

Classes make for great reusable components, so they come first. Ids are more specific and should be used sparingly (e.g., for in-page bookmarks), so they come second.

```html
<a class="..." id="..." data-toggle="modal" href="#">
  Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```


## CSS Guide

#### Syntax
- Use soft tabs with two spaces—they're the only way to guarantee code renders the same in any environment.
- When grouping selectors, keep individual selectors to a single line.
- Include one space before the opening brace of declaration blocks for legibility.
- Place closing braces of declaration blocks on a new line.
- Include one space after `:` for each declaration.
- Each declaration should appear on its own line for more accurate error reporting.
- End all declarations with a semi-colon. The last declaration's is optional, but your code is more error prone without it.
- Comma-separated property values should include a space after each comma (e.g., `box-shadow`).
- Don't include spaces after commas _within_ `rgb()`, `rgba()`, `hsl()`, `hsla()`, or `rect()` values. This helps differentiate multiple color values (comma, no space) from multiple property values (comma with space).
- Don't prefix property values or color parameters with a leading zero (e.g., `.5` instead of `0.5` and `-.5px` instead of `-0.5px`).
- Lowercase all hex values, e.g., `#fff`. Lowercase letters are much easier to discern when scanning a document as they tend to have more unique shapes.
- Use shorthand hex values where available, e.g., `#fff` instead of `#ffffff`.
- Quote attribute values in selectors, e.g., `input[type="text"]`. [They’re only optional in some cases](http://mathiasbynens.be/notes/unquoted-attribute-values#css), and it’s a good practice for consistency.
- Avoid specifying units for zero values, e.g., `margin: 0`; instead of `margin: 0px;`.

#### Declaration Order
Related property declarations should be grouped together following the order:

1. Positioning
     - position
     - top
     - right
     - bottom
     - left
     - z-index

2. Box model
     - display
     - float
     - width
     - height
     - max-width
     - max-height
     - min-width
     - min-height
     - padding
     - padding-top
     - padding-right
     - padding-bottom
     - padding-left
     - margin
     - margin-top
     - margin-right
     - margin-bottom
     - margin-left
     - margin-collapse
     - margin-top-collapse
     - margin-right-collapse
     - margin-bottom-collapse
     - margin-left-collapse
     - overflow
     - overflow-x
     - overflow-y
     - clip
     - clear

3. Typographic
     - font
     - font-family
     - font-size
     - font-smoothing
     - osx-font-smoothing
     - font-style
     - font-weight
     - hyphens
     - src
     - line-height
     - letter-spacing
     - word-spacing
     - color
     - text-align
     - text-decoration
     - text-indent
     - text-overflow
     - text-rendering
     - text-size-adjust
     - text-shadow
     - text-transform
     - word-break
     - word-wrap
     - white-space
     - vertical-align
     - list-style
     - list-style-type
     - list-style-position
     - list-style-image
     - pointer-events
     - cursor
  
4. Visual
     - background
     - background-attachment
     - background-color
     - background-image
     - background-position
     - background-repeat
     - background-size
     - border
     - border-collapse
     - border-top
     - border-right
     - border-bottom
     - border-left
     - border-color
     - border-image
     - border-top-color
     - border-right-color
     - border-bottom-color
     - border-left-color
     - border-spacing
     - border-style
     - border-top-style
     - border-right-style
     - border-bottom-style
     - border-left-style
     - border-width
     - border-top-width
     - border-right-width
     - border-bottom-width
     - border-left-width
     - border-radius
     - border-top-right-radius
     - border-bottom-right-radius
     - border-bottom-left-radius
     - border-top-left-radius
     - border-radius-topright
     - border-radius-bottomright
     - border-radius-bottomleft
     - border-radius-topleft
     - content
     - quotes
     - outline
     - outline-offset
     - opacity
     - filter
     - visibility
     - size
     - zoom
     - transform
     - box-align
     - box-flex
     - box-orient
     - box-pack
     - box-shadow
     - box-sizing
     - table-layout
     - animation
     - animation-delay
     - animation-duration
     - animation-iteration-count
     - animation-name
     - animation-play-state
     - animation-timing-function
     - animation-fill-mode
     - transition
     - transition-delay
     - transition-duration
     - transition-property
     - transition-timing-function
     - background-clip
     - backface-visibility
     - resize
     - appearance
     - user-select
     - interpolation-mode
     - direction
     - marks
     - page
     - set-link-source
     - unicode-bidi
     - speak

Positioning comes first because it can remove an element from the normal flow of the document and override box model related styles. The box model comes next as it dictates a component's dimensions and placement.

#### Don't use @import
Compared to `<link>`s, `@import` is slower, adds extra page requests, and can cause other unforeseen problems. Avoid them and instead opt for an alternate approach:

- Use multiple `<link>` elements
- Compile your CSS with a preprocessor like Sass or Less into a single file
- Concatenate your CSS files with features provided in Rails, Jekyll, and other environments

```html
<!-- Use link elements -->
<link rel="stylesheet" href="core.css">

<!-- Avoid @imports -->
<style>
  @import url("more.css");
</style>
```

#### Media query placement
Place media queries as close to their relevant rule sets whenever possible. Don't bundle them all in a separate stylesheet or at the end of the document. Doing so only makes it easier for folks to miss them in the future. Here's a typical setup.

```css
.element { ... }
.element-avatar { ... }
.element-selected { ... }

@media (min-width: 480px) {
  .element { ...}
  .element-avatar { ... }
  .element-selected { ... }
}
```

#### Prefixed properties
When using vendor prefixed properties, indent each property such that the declaration's value lines up vertically for easy multi-line editing.

```css
/* Prefixed properties */
.selector {
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);
          box-shadow: 0 1px 2px rgba(0,0,0,.15);
}
```

#### Single declarations
In instances where a rule set includes only one declaration, consider removing line breaks for readability and faster editing. Any rule set with multiple declarations should be split to separate lines.

```css
.sprite {
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(../img/sprite.png);
}
.icon           { background-position: 0 0; }
.icon-home      { background-position: 0 -20px; }
.icon-account   { background-position: 0 -40px; }
```

#### Shorthand notation
Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values. Common overused shorthand properties include:

- `padding`
- `margin`
- `font`
- `background`
- `border`
- `border-radius`

Often times we don't need to set all the values a shorthand property represents. For example, HTML headings only set top and bottom margin, so when necessary, only override those two values. Excessive use of shorthand properties often leads to sloppier code with unnecessary overrides and unintended side effects.

```css
/* Bad example */
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

/* Good example */
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
```

#### Comments
Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.

Be sure to write in complete sentences for larger comments and succinct phrases for general notes.

```css
/* Bad example */
/* Modal header */
.modal-header {
  ...
}

/* Good example */
/* Wrapping element for .modal-title and .modal-close */
.modal-header {
  ...
}
```

#### Class names
- Keep classes lowercase and use dashes (not underscores or camelCase). Dashes serve as natural breaks in related class (e.g., `.btn` and `.btn-danger`).
- Avoid excessive and arbitrary shorthand notation. `.btn` is useful for _button_, but `.s` doesn't mean anything.
- Keep classes as short and succinct as possible.
- Use meaningful names; use structural or purposeful names over presentational.
- Prefix classes based on the closest parent or base class.
- Use `.js-*` classes to denote behavior (as opposed to style), but keep these classes out of your CSS.

It's also useful to apply many of these same rules when creating Sass and Less variable names.

#### Selectors
- Use classes over generic element tag for optimum rendering performance.
- Avoid using several attribute selectors (e.g., `[class^="..."]`) on commonly occuring components. Browser performance is known to be impacted by these.
- Keep selectors short and strive to limit the number of elements in each selector to three.
- Scope classes to the closest parent **only** when necessary (e.g., when not using prefixed classes).

#### Organization
- Organize sections of code by component.
- Develop a consistent commenting hierarchy.
- Use consistent white space to your advantage when separating sections of code for scanning larger documents.
- When using multiple CSS files, break them down by component instead of page. Pages can be rearranged and components moved.

```css
/*
 * Component section heading
 */

.element { ... }


/*
 * Component section heading
 *
 * Sometimes you need to include optional context for the entire component. Do that up here if it's important enough.
 */

.element { ... }

/* Contextual sub-component or modifer */
.element-heading { ... }
```

#### Editor preferences
Set your editor to the following settings to avoid common code inconsistencies and dirty diffs:
- Use soft-tabs set to two spaces.
- Trim trailing white space on save.
- Set encoding to UTF-8.
- Add new line at end of files.
- 
Consider documenting and applying these preferences to your project's .editorconfig file. For an example, see the one in [Bootstrap](https://github.com/twbs/bootstrap/blob/master/.editorconfig). Learn more about [EditorConfig](http://editorconfig.org/).

---

#### CSS3 Transforms
CSS3 transforms allow you to translate, rotate, scale, and skew elements.  
A transformation is an effect that lets an element change shape, size, and position.  
CSS3 supports 2D and 3D transformations. Let's take a look at the rotate transformation:

```css
div {
   width: 200px;
   height: 100px;
   margin-top: 30px;
   background-color: #32CD32;
}
```

The rotate() method rotates an element clockwise or counter-clockwise, according to a given degree.


_Negative value will result in a counter clockwise rotation._