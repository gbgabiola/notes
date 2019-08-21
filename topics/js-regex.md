# Regular Expression

**Regular expressions** are used in programming languages to match parts of strings. You create patterns to help you do that matching.

## Using test method

**`.test()`** method takes the regex, applies it to a string and returns true or false if your pattern finds something or not.

## Match Literal Strings

```js
/wordthatyoutarget/
```

## Match a Literal String with Different Possibilities

Search for multiple patterns using the `alternation` or `OR` operator: `|`.

```js
/yes|no|maybe/
```

## Ignore Case While Matching

Case is the difference between uppercase letters and lowercase letters. Ignore Case while matching using `i` flag: 

```js
/ignoreCase/i
```

## Extract Matches

**`.match()`** method extract the actual matches

```js
"Hello, World!".match(/Hello/);
```

## Find More Than the First Match

To search or extract a pattern more than once, you can use the `g` flag.

```js
/Repeat/g
```

## Match Anything with Wildcard Period

The wildcard character `dot` or `period` (`.`) will match any one character.

```js
// will match "hug", "huh", "hut", and "hum"
/hu./
```

## Match Single Character with Multiple Possibilities

`Character classes` allow you to define a group of characters you wish to match by placing them inside square (`[` and `]`) brackets.

```js
// will match "bag", "big", and "bug", but not "bog"
 /b[aiu]g/
```

## Match Letters of the Alphabet

Inside a `character set`, you can define a range of characters to match using a `hyphen` (`-`) character.

Match letters `a` through `e` match lowercase letters `a` through `e` using `[a-e]`.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```

## Match Numbers and Letters of the Alphabet

`/[0-5]/` matches any number between and including `0` and `5`.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
```

## Match Single Characters Not Specified

To create a `negated character set`, you place a `caret` character (`^`) after the opening bracket and before the characters you do not want to match.

```js
// matches all characters that are not a vowel
/[^aeiou]/gi
```

## Match Characters that Occur One or More Times

Use `+` character to check if a character (or group of characters) appeared one or more times in a row.

```js
// abab will return ["a", "a"]
/a+/g
```

## Match Characters that Occur Zero or More Times

Use `asterisk` (`*`) or `star` to match the characters that occur zero or more times.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```

## Find Characters with Lazy Matching

In regular expressions, a `greedy` match finds the longest possible part of a string that fits the regex pattern and returns it as a match.

The alternative is called a `lazy` match, which finds the smallest possible part of the string that satisfies the regex pattern.

```js
// match the "titanic"
/t[a-z]*?i/
```

## Match Beginning String Patterns

Outside of a `character set`, the `caret` (`^`) is used to search for patterns at the beginning of strings.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // true
```

## Match Ending String Patterns

You can search the end of strings using the `dollar sign` character `$` at the end of the regex.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // true
```

## Match All Letters and Numbers

The closest character class in JavaScript to match the alphabet is `\w`. This shortcut is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers. **Note**, this character class also includes the underscore character (`_`).

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
```

## Match Everything But Letters and Numbers

You can search for the opposite of the `\w` with `\W`. Note, the opposite pattern uses a capital letter. This shortcut is the same as `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]
```

## Match All Numbers

The shortcut to look for digit characters is `\d`, with a lowercase `d`. This is equal to the character class `[0-9]`, which looks for a single character of any number between zero and nine.

## Match All Non-Numbers

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

## Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1. The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2. Username letters can be lowercase and uppercase.
3. Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.

```js
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);
```

## Match Whitespace

You can search for whitespace using `\s`, which is a lowercase `s`. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]
```

## Match Non-Whitespace Characters

Search for non-whitespace using `\S`, which is an uppercase `s`. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32
```

## Specify Upper and Lower Number of Matches

You can specify the lower and upper number of patterns with `quantity specifiers`. Quantity specifiers are used with curly brackets (`{` and `}`). You put two numbers between the curly brackets - for the lower and upper number of patterns.

To match only the letter `a` appearing between `3` and `5` times in the string `"ah"`, your regex would be `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```

## Specify Only the Lower Number of Matches

To only specify the lower number of patterns, keep the first number followed by a comma.

To match only the string `"hah"` with the letter `a` appearing at least `3` times, your regex would be `/ha{3,}h/`.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true
```

## Specify Exact Number of Matches

You can specify the lower and upper number of patterns with `quantity specifiers` using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

To match only the word `"hah"` with the letter `a 3` times, your regex would be `/ha{3}h/`.

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false
```

## Check for All or None

You can specify the possible existence of an element with a question mark (`?`). This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```

## Positive and Negative Lookahead

`Lookaheads` are patterns that tell JavaScript to look-ahead in your string to check for patterns further along.

There are two kinds of `lookaheads`: `positive lookahead` and `negative lookahead`.

A `positive lookahead` will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as `(?=...)` where the `...` is the required part that is not matched.

A `negative lookahead` will look to make sure the element in the search pattern is not there. A negative lookahead is used as `(?!...)` where the `...` is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
```

A more practical use of `lookaheads` is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```

## Reuse Patterns Using Capture Groups

You can search for repeat substrings using `capture groups`. Parentheses, `(` and `)`, are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (`\`) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be `\1` to match the first group.

The example below matches any word that occurs twice separated by a space:

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```

## Use Capture Groups to Search and Replace

You can search and replace text in a string using `.replace()` on a string. The inputs for `.replace()` is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
```