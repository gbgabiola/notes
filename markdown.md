# Markdown Guide

<!-- Headings -->
## Headings

Add a number sign/signs (`#`) before the word to create a header.

| Syntax                   | Output                   |
| :----------------------- | :----------------------: |
| `# Heading level 1`      | <h1>Heading level 1</h1>
| `## Heading level 2`     | <h2>Heading level 2</h2>
| `### Heading level 3`    | <h3>Heading level 1</h3>
| `#### Heading level 4`   | <h4>Heading level 1</h4>
| `##### Heading level 5`  | <h5>Heading level 1</h5>
| `###### Heading level 6` | <h6>Heading level 1</h6>


<!-- Horizontal Rule -->
## Horizontal Rules

Three ways create a horizontal rule, use three or more dashes (`---`), asterisks (`***`), or underscores (`___`) on a line by themselves.

1. Hyphens (`---`)
2. Asterisk (`***`)
3. Underscores (`___`)

**OUTPUT:**

Same output for three different ways to make horizontal rule

----


<!-- Emphasis -->
## Emphasis

### Bold

To bold the text, just add two asterisk (`*`) or underscores (`_`) before and after the text without space around the letters.

| Syntax                   | Output                     |
| :----------------------- | :---------------------- -: |
| `**This text** is italic`  | **This text** is italic.
| `__This text__ is italic.` | __This text__ is italic.

### Italic

To italized the text, just add a asterisk (`*`) or underscore (`_`) before and after the text without space around the letters.

| Syntax                   | Output                  |
| :----------------------- | :---------------------: |
| `_This text_ is italic.` | _This text_ is italic.
| `*This text* is italic`  | *This text* is italic.

### Combination of Bold and Italic

| Syntax                                           | Output                                        |
| :----------------------------------------------- | :-------------------------------------------: |
| Combined with `**asterisks and _underscores_**`. | Combined with **asterisks and _underscores_**.
| Combined with `__asterisks and *underscores*__`. | Combined with __asterisks and *underscores*__.


<!-- Blockquote -->
## Blockquote

Add a `>` before the quote.

`> "Attitude is a little thing that makes a big difference." - Winston Churchill`

**OUTPUT:**

> "Attitude is a little thing that makes a big difference." - Winston Churchill


<!-- Lists -->
## **Lists**

### Ordered Lists

To create an ordered list, add line items with numbers followed by periods. Indent one or more items to create a nested list. The numbers don't have to be in numerical order, but the list should start with the number one.

| Syntax      | Output    |
| :---------- | :-------: |
| `1. Item 1` | 1. Item 1
| `2. Item 2` | 2. Item 2
| `3. Item 3` | 3. Item 3

### Unordered List

To create an unordered list, add dashe (`-)`, asterisk (`*`), or plus sign (`+`) before the items. Indent one or more items to create a nested list.

| Syntax     | Output                   |
| :--------- | :----------------------: |
| `- Item 1` | <ul><li>Item 1</li></ul>
| `* Item 2` | <ul><li>Item 2</li></ul>
| `+ Item 3` | <ul><li>Item 3</li></ul>

### Task Lists

Task lists allow you to create a list of items with checkboxes. In Markdown applications that support task lists, checkboxes will be displayed next to the content. To create a task list, add dashes (`-`) and brackets with a space (`[ ]`) in front of task list items. To select a checkbox, add an x in between the brackets (`[x]`).

```md
- [x] Task 1
* [x] Task 2
+ [ ] Task 3
```

**OUTPUT:**

- [x] Task 1
- [x] Task 2
- [ ] Task 3


<!-- Links -->
## Links

There are two ways to create a link, Inline and reference-style. To create a link, enclose the link text in a square brackets ( `[]` ), follow it immediately with the URL in parentheses ( `()` ).

| Syntax                                                       | Output                                                      |
| :----------------------------------------------------------- | :---------------------------------------------------------: |
| `[Inline-style link](https://genesisgabiola.netlify.com/)`   | [Inline-style link](https://genesisgabiola.netlify.com/)
| `Reference-style link][Arbitrary case-insensitive reference text]` | [Reference-style link][Arbitrary case-insensitive reference text]
| `[You can use numbers for reference-style link definitions][1]` | [You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself] using `[link text itself]`  
URLs and URLs in angle brackets will automatically get turned into links. 

http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

`[arbitrary case-insensitive reference text]: https://genesisgabiola.netlify.com/`  
`[1]: https://genesisgabiola.netlify.com/`  
`[link text itself]: https://genesisgabiola.netlify.com/`

[arbitrary case-insensitive reference text]: https://genesisgabiola.netlify.com/
[1]: https://genesisgabiola.netlify.com/
[link text itself]: https://genesisgabiola.netlify.com/

### Links with Titles

Title is not required and it's optional, this will appear as a tooltip when the user hovers on the link. To add a title, enclose it in parentheses ( `()` ) after the URL.

| Syntax                                                                       | Output                                                                     |
| :--------------------------------------------------------------------------- | :------------------------------------------------------------------------: |
| Check my `[website](https://genesisgabiola.netlify.com/ "Genesis Website")`. | Check my [website](https://genesisgabiola.netlify.com/ "Genesis Website").

### URLs and Email Addresses

To quickly turn a URL or email address into a link, enclose it in angle brackets.

| Syntax                                                                       | Output                                                                                                                 |
| :--------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------: |
| My website is `<https://genesisgabiola.netlify.com>` and my contact is `<genesisgabiola@yahoo.com>` | My website is <https://genesisgabiola.netlify.com> and my contact is <genesisgabiola@yahoo.com>

### Images

Two ways to add an an image.

| Syntax                                                                                                                  | Output                                                                                                                |
| :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------: |
| Inline-style: `![Markdown Logo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")` | ![Markdown Logo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
| Reference-style: `![Markdown Logo][logo]` | ![Markdown Logo][logo]

<!-- ![Markdown Logo][logo] -->
This is the 2nd step for the reference-style image link: `[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"`

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

### Youtube Videos

They can't be added directly but you can add an image with a link to the video like this:

```html
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE" target="_blank">
  <img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" />
</a>
```

Or, in pure Markdown, but losing the image sizing and border:

```md
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```


<!-- Code -->
## Code

To denote a word or phrase as inline code block, enclose it with tick marks or backtique (`).

| Syntax                | Output           |
| :-------------------- | :--------------: |
| Press`` `Ctrl + C` `` | Press `Ctrl + C`


### Code Blocks with Syntax Highlighting

Inline `code` has `back-ticks around` it.

**Shell Code:**

~~~~~~~~~
```sh
npm install
npm start
```
~~~~~~~~~

**OUTPUT:**

```sh
npm install
npm start
```

**JavaScript Code:**

~~~
```js
function add(num1, num2) {
  return num1 + num2;
}
```
~~~

**OUTPUT:**

```js
function add(num1, num2) {
  return num1 + num2;
}
```

**Python Code:**

~~~
```py
def add(num1, num2):
    return num1 + num2
```
~~~

**OUTPUT:**

```py
def add(num1, num2):
    return num1 + num2
```

To see what languages are available for highlighting, and how to write those language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

### Escaping Characters

To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (`\`) in front of the character.

| Syntax                                                                   | Output                                                                 |
| :----------------------------------------------------------------------- | :--------------------------------------------------------------------: |
| `\- Without the backslash, this would be a bullet in an unordered list.` | \- Without the backslash, this would be a bullet in an unordered list.

### Escaping Tick Marks

If the word or phrase you want to denote as code includes one or more tick marks, you can escape it by enclosing the word or phrase in double tick marks (``).

| Syntax                | Output           |
| :-------------------- | :--------------: |
| ` ``Use ` \`code\` ` in markdown.`` ` | `Use ` \`code\` ` in markdown.`


<!-- Tables -->
## Tables

To create a table, use three or more hyphens (`---`) to make a column’s header, and use pipes (`|`) to separate each column.

```md
| Name     | Email          | Job         |
| -------- | -------------- | ----------- |
| John Doe | john@gmail.com | Programmer  |
| Jane Doe | jane@gmail.com | Accountant  |
```

**OUTPUT**

| Name     | Email          | Job         |
| -------- | -------------- | ----------- |
| John Doe | john@gmail.com | Programmer  |
| Jane Doe | jane@gmail.com | Accountant  |

The outer pipes (`|`) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

```md
Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

**OUTPUT:**

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

### Alignment

You can align text in the columns to the left, right, or center by adding a colon (`:`) to the left, right, or on both side of the hyphens within the header row.

```md
| Name     | Email          | Job         |
| :------- | :------------: | ----------: |
| John Doe | john@gmail.com | Programmer  |
| Jane Doe | jane@gmail.com | Accountant  |
```

**OUTPUT:**

| Name     | Email          | Job         |
| :------- | :------------: | ----------: |
| John Doe | john@gmail.com | Programmer  |
| Jane Doe | jane@gmail.com | Accountant  |


<!-- Heading IDs -->
## Heading IDs

To add a custom heading ID, enclose the custom ID in curly braces on the same line as the heading.

```md
### Heading IDs {#heading-ids}
````

### Linking to Heading IDs

You can link to headings with custom IDs in the file by creating a standard link with a number sign (#) followed by the custom heading ID.

| Syntax                        | Output         |
| :-----------------------------| :------------: |
| `[Heading IDs](#heading-ids)` | [Heading IDs](#heading-ids)


<!-- Strikethrough -->
## Strikethrough

To strikethrough words, use two tilde (`~~`) symbols before and after the word, just like how we bold and italized the text.

| Syntax                            | Output                          |
| :-------------------------------- | :-----------------------------: |
| `~~This text~~ is strikethrough.` | ~~This text~~ is strikethrough.


<!-- Collapsible section -->
## Collapsible Section

### Collapsible section with markdown

```md
<details>
  <summary>Click to expand!</summary>
  
  ## Heading
  1. A numbered
  2. list
    - With some
    - Sub bullets
</details>
```

**OUTPUT:**

<details>
  <summary>Click to expand!</summary>
  
  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>

**Note:**

- Make sure you have an **empty line** after the closing `</summary>` tag.
- Make sure you have an **empty line** after the closing `</details>` tag if you have multiple collapsible sections.


<!-- TeX Mathematical Formulae -->
## TeX Mathematical Formulae

A full description of TeX math symbols is beyond the scope of this cheatsheet. Here's a good reference, and you can try stuff out on CodeCogs. You can also play with formulae in the Markdown Here options page.

Here are some examples to try out:

```md
 $-b \pm \sqrt{b^2 - 4ac} \over 2a$
 $x = a_0 + \frac{1}{a_1 + \frac{1}{a_2 + \frac{1}{a_3 + a_4}}}$
 $\forall x \in X, \quad \exists y \leq \epsilon$
```

The beginning and ending dollar signs (`$`) are the delimiters for the TeX markup.


## References:

- [Markdown Guide](https://www.markdownguide.org)
- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)