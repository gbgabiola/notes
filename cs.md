# Computer Science Concepts


- [Programming](#programming)
- [Writing Code](#writing-code)
- [Get Information from Computers](#get-information-from-computers)
- [What can Computer's do](#what-can-computers-do)
- [Variables](#variables)


## Programming

- Dictory definition: the process of preparing an instructional program for a device
- Layman's Terms: attempting to get a computer to complete a _specific task_ without making mistakes
- Not-Intelligent (Computers)
  - Can only work based on _our commands_
  - FAR from competent, so we must give them _EXACT_ instructions on how to do their task (Dumb)
  - Computer's are only only _smart_ because we program them to be
- Language of Code
  - Computers only understand **machine code**
    - A series of 0's and 1's which interpreted by the computer
    - We need to _convert_ our instructions from English to Binary in order for the computer to understand them
  - One Problem
    - It would be entirely unpractical to convert every programming instruction into binary by hand
- Programming Languages
  - Translate our instructions into **machine code**
  - Very useful for programmers
  - Serves as _interpreters_ for converting languages into other languages
    - Faster than converting by hand
- High vs Low Level
  - Each language has an attribute known as **power** or **level**
    - Basically how similar it is to machine code
  - **Low-level** programming languages: Assembly or C
  - **High-level** programming languages: Java or Python
  - Lower the level -> More similar to machine code


## Writing Code

- IDE's (**Integrate Development Environments**)
  - A place to write, run, debug code and converts it to machine code
  - IDE's are like any other program on our computer except used for the facilitation of code, e.g., (NetBeans, IntelliJ, Visual Studios)
  - Looks: Usually has central area for writing code, console, project hierarchy, preview screens, etc.
- IDE Functionality
  - Built-in _Error-checking_
  - Auto-fill for frequently used words
  - Project Hierarchy
- Learning Languages
  - Learning a computer language can be very similar to learning a real language
  - All programming languages have a **set of rules** to follow when writing code in that language, just like in real languages
    - In computer science it is called _syntax_
  - Similar to grammar in real life languages
- **Syntax**
  - Rules we must follow if we want our program to run correctly
    - How we type out certain functions
    - What to put at the end of each line of code
    - How to set up certain functions
  - Syntax for each programming languages are _unique_
  - Breaking programming rules will result in an _error_


## Get Information from Computers

- The Console
  - Programmers keep track of their progress by looking at **the console**
    - A _text interface_ within the computer that programmers can use for a variety of purpose
- How to Use the Console
  - Main use of the _console_ is to output text from the program using **code**
    - **Print statement** _prints_ text to the _console_ for the programmers viewing pleasure
- Using the print Statement
  - Simply instruct the console to print, and include it _inside the parenthesis_
    - Using _python_, e.g., `print ("Hello Word")
  - Print statement is also usef for viewing and interpreting the computer's output from a program
- A Background Tool
  - The console is mainly a _Developer Tool_
    - Not usually meant to be used and interacted with by the end user except in very **abstract cases**
      - Text-based games/simple programs
  - Tends to be hidden away behind the scenes
  - Don't try and implement the console in the final product


## What can Computer's do

- Math
  - Knows how to do **simple arithmetic**
    - Addition, Subtraction, Multiplication, and Division
  - Print the result of any math operation
  - May seem useless, but comes in handy _extremely often_
- Modulus %
  - Most programming languages has an additional operator known as **modulus** (`%`)
  - Allows us to get the _remainder_ of divisional operation
  - Useful when determining if a number is **even** or **odd**
    - if a number modulo 2 is 0 -> The number is _even_
    - if a number modulo 2 is 1 -> The number is _odd_
- Strings
  - Another way of saying _text_
  - _Anything enclosed by quotation marks_
- String and Number Dilemma
  - "4" is treated as a _STRING_
  - 4 is treated as a _INTEGER_


## Variables

- What is it
  - Something that can store information
    - Can be _referenced_ and _manipulated_
- Basics
  - Each variable has a _type_, _a name_, and _a piece of information_ stored inside of it
    - Name is simply a name for the variable
- Types
  - **Primitive type variables**
    - _Integers_, _booleans_, _floats_, _doubles_, _Strings_, and _Chars_
- Integers
  - A variable that can store an integer value, e.g., -2, 147, 648
  - _CAN'T_ and _WILL NOT_ hold any decimal values
- Booleans
  - Can _ONLY_ store and hold a value of either _true_ or _false_
- Floats and Doubles
  - Both are types of **floating point data types**
    - Can store numbers with decimal places
  - **Float Variables** can store up to 32 bits of information
  - **Double Variables** can store up to 64 bits of information
- Strings
  - Useful for displaying text and storing **input information**
    - Information the user puts into our program
  - Also useful for outputting information in a readable format for the user
- Chars
  - Each hold _one_ character
  - Useful when a programmer wants to read one button press of one character in a string without using a String variable, e.g., Game controlled by keyboard
  - **Tip**: We can store char's in a String variable, but not String longer than 1 character in a char variable
- Usefulness
  - track of things, i.e., user's _name_ or _score_
    - store this information in a variable and then _reference_, _add to_, or _modify it_
  - Other important uses for variables
    - Taking input from the user
    - Making our program have **variability**
      - Have it change based on _certain factors_
    - Manipulating variables is necessary for many tasks in programming
