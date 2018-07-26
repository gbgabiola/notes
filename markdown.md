<!-- Headings -->
> # **Headers**
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

<!-- Emphasis or Italics -->
> # **Strong & Emphasis**
*This text* is italic
_This text_ is italic

<!-- Strong or Bold -->
**This text** is strong
__This text__ is strong

Combined emphasis with **asterisks and _underscores_**.

<!-- Strikethrough -->
~~This text~~ is strikethrough

<!-- Horizontal Rule -->
> # **Horizontal Rule**

---
Hyphens
***
Asterisk
___
Underscores

Use \ (backslash) to escape character or symbols

<!-- Blockquote -->
> This is a quote

<br>

> # **Lists**
<!-- UL -->
* Item 1 using asterisk
- Item 2 using minus
+ Item 3 using plus
	* Nested Item 1
	* Nested Item 1
	
<!-- OL -->
1. Item 1
1. Item 2
1. Item 3

<!-- Inline Code Block using backtique-->
`<p>This is a paragraph</p>`

<!-- Links -->
> # **Links**
There are two ways to create links.

[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com


<!-- Images -->

Inline-style: 
![Markdown Logo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![Markdown Logo][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

<!-- Youtube Videos -->
> # **Youtube Videos**
They can't be added directly but you can add an image with a link to the video like this:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

Or, in pure Markdown, but losing the image sizing and border:

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

<!-- Github Markdown -->

<!-- Code Blocks and Syntax Highlighting -->
> # **Code Blocks and Syntax Highlighting**

Inline `code` has `back-ticks around` it.

```bash
 npm install
 
 npm start
```

```javascript
 function add(num1, num2) {
	return num1 + num2;
}
```

```python
 def add(num1, num2):
	return num1 + num2
```

To see what languages are available for highlighting, and how to write those language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).


<!-- Tables -->
> # **Tables**
| Name     | Email			|
| -------- | -------------- |
| John Doe | john@gmail.com |
| Jane Doe | jane@gmail.com |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

<!-- Task Lists -->
* [x] Task 1
* [x] Task 2
* [ ] Task 3

<!-- TeX Mathematical Formulae -->
> # **TeX Mathematical Formulae**
A full description of TeX math symbols is beyond the scope of this cheatsheet. Here's a good reference, and you can try stuff out on CodeCogs. You can also play with formulae in the Markdown Here options page.

Here are some examples to try out:

```
 $-b \pm \sqrt{b^2 - 4ac} \over 2a$
 $x = a_0 + \frac{1}{a_1 + \frac{1}{a_2 + \frac{1}{a_3 + a_4}}}$
 $\forall x \in X, \quad \exists y \leq \epsilon$
```

The beginning and ending dollar signs ($) are the delimiters for the TeX markup.