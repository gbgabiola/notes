# Interview Questions

Lists of possible questions that they might ask you:


## General Questions

**General questions are questions to get to know you, how you react, think, and how well you fit in the team.**

Keep your answers to these questions relatively short and concise, since they don't carry that much weight.

Don't trip over your words; take long pauses to think thoroughly about the questions. The questions are meant to "crack" you open so they can taste the yolk.

- What excites or interests you about coding?
  - Just the thought of building something useful for free excites me. Thinking through tough problems and growing every is satisfying. You always think you're done learning, but then you go on and learn something else! That alone pushes me to code everyday.
- When building a new site or maintaining one, what techniques have you used to increase performance?
  - Make sure code is minified and that any images used are properly optimized. In addition, you should have any dead or reduntant code. Code splitting also cuts out fluff in web applications.
- How would you optimize a website's assets/resources?
  - Use a build tool like Grunt or Gulp to minify files and optimize images. 
  - Ensure you're using lossless image formats like PNG
  - Concatenate several files of the same format when you can
- Can you describe some SEO best practices you have used lately?
  - Ensure ALL img tags have an alt attribute
  - Make sure your title includes targeted keywords
  - Keep title tags relatively short - 50 characters at most
  - Write attention grabbing and relevant meta descriptions
- What did you learn yesterday/this week?
- **Talk about your preferred development environment.** Which Operating System, IDE, and Terminal do you use and why those in particular?
- **If you could master one technology this year, what would it be?** How would you go about mastering that skill?
  - - React/Next.js
- **How did you handle the last disagreement with your direct boss? How did it resolve?** Would you give me your boss's number to check their side of the story? [The last question is a bluff, but be sure to not flinch. No one has the time to call your previous boss.]
- **What resources, forums, or tools do you use to learn about the latest front end development and design trends?** Any favorites and why?
- **If you joined on a project and they [the dev team] used tabs and you used spaces, what would you do?** Would you try to convince the team to use spaces or would you join the herd and use tabs?
  - I would use whatever is currently used throughout the project.
  - [Trick question] - The most correct answer would be to use a standard format tool like Prettier, so everyone's code will look the same when it's pushed to the repository. This way you can keep using spaces, and the team is free to use tabs.
  - If you force your opinion on the dev team, you wouldn't be considered a team player, and if you used tabs without your full consent and reasoning, you wouldn't be as motivated as everyone else and are more likely to quit.
- **Can you describe your workflow when you create a web page?** What are the first five steps you take when creating a new project?
- **What is a recent technical challenge you experienced and how did you solve it?**
- **What actions have you taken on recent projects to increase the maintainability of the code?** Any particular programming paradigms you like such as functional programming or test-driven development?
  - Make sure my code is commented enough.
  - Break things out into seperate files.
- What is the difference between progressive enhancement and graceful degredation?
  - Graceful degredation is making sure your website is still functional for users visiting from older browsers.
  - Progressive enhancement is the other way around: it adds more advanced functionality for newer browsers.
- How many resources will a browser download from a given domain at a time? What are the exceptions?
  - It varies in browsers, but the average is 6.
  - You can use domain sharding to spread your assets out.


## Technical Questions

This where the interview will start shooting technical questions at you.

- **Which version control systems are you familiar with?** How do you share code between projects in a lossless way?
  - Git and Github specifically
- **Name four ways to decrease page load, either percieved or actual.**
  - Cache resource for subsequent visits.
  - Make sure code is minimize.
  - Reduce above the fold content.
  - Asynchronously load resources
- **What does CORS stand for and what issue does it address?**
- **Explain what ARIA and screenreaders are, and how to make a website accessible.**
- **What does a `doctype` do?**
  - In HTML, the doctype tells the browser what version of HTML is being used.
- Consider HTML5 as an open web platform. **What are the building blocks of HTML5?**
  - The new semantic elements in HTML5 like article, section, main, header, nav, etc.
  - New API's like geolocation, canvas, web workers, etc.
- **Describe the difference between localStorage, cookies, and sessionStorage.**
  - LocalStorage has no expiration date, and it is only cleared by Javascript or clearing browser cache, locally stored data. read on client side only
  - sessionStorage is cleared when the browser window is closed. read on client side only
  - cookie stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side
- Why is it generally a good idea to position CSS &lt;link&gt; between &lt;head&gt;&lt;/head&gt; and JS &lt;script&lt; just before &lt;/body&gt;? Do you know any exceptions?
  - CSS is put in the head of a document to avoid FOUC.
  - JS is put at the end because it usually requires the elements to be loaded in. Javascript also blocks rendering by default.
- **What are `data-` attributes good for?**
  - Data attributes are good for attaching custom attributes to tags. They can then be used in JS to give interactive experiences.
- **What kind of things must you be wary of when designing or developing for multilingual sites?** How do you serve a page with content in multiple languages?
  - Difference between ltr, rtl languages.
  - Color perception in different areas
  - Format of dates and times
- How do you serve a page with content in multiple languages?
  - Declare language being used in HTML, &lt;html lang='en'&gt;
- **What is progressive rendering?**
- **Explain how `this` works in JavaScript. How does `this` work in classes versus functions?**
- **Describe event bubbling and event capturing.**
- **Explain _variable hoisting_.**
- **Explain the difference between:**
  - `function Animal() {}`
  - `var animal = Animal()`
  - `var animal = new Animal()`
- **What's the difference between host objects and native objects?**
- **What’s a typical use case for anonymous functions?**
- **Explain how JavaScript prototypal inheritance works.**
- **What is a closure, and how/why would you use one?**
- **What’s the difference between `null` and `undefined`?**
- **What is the difference between `==` and `===`?**
- **What is Webpack? What problems does it solve?**
- **Have you ever used a front-end framework or library? Which one?**
- **Why is it called a Ternary operator; what does the word _Ternary_ indicate?**
- **What tools and techniques do you use debugging JavaScript code?**
- **How do you debug JavaScript code that runs on the server, e.g. NodeJs?**
- What is Flash of Unstyled Content? How do you avoid it?
  - When webpage loads without CSS. It can be avoided by putting CSS in the HEAD of your page.

- **What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?**
- **Given this code, how would you implement the `duplicate` function?**

    ```js
    // make this work

    duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
    ```

- **Can you give an example of a curry function and why this syntax offers an advantage?**
- **Can you give an example of destructuring an object or an array?**
1.  **Who invented JavaScript and why is it called JavaScript?**
2.  What is the difference between these two functions?

    ```js
    // What's the difference?

    const sayHello = name => console.log(name)

    function sayHello(name) {
      console.log(`${name}`)
    }
    ```

- **Why and when might you want to create static class members?**
- **What are the differences between variables created using `let`, `var` or `const`?**
- **What happens when you go to a website? What’s a DNS?**
- **What is the V8 Engine? Who uses it?**
- **What does `$` in JavaScript code refer to?**
- **Explain the difference between layout, painting, and compositing.**
- **What are some ways you may improve your website’s scrolling performance?**
- **What is the output of the following code?**

    ```js
    let fs = require('fs');

    console.log('1');

    fs.readFile('test.txt', 'utf8', function(error, data) {
      if (error) {
        throw error;
      }

      console.log('2');
    });

    console.log('3');
    ```

- **What is the event loop in JavaScript and what does it do?**


## Resources

- [Cracking the Coding Interview: 189 Programming Questions and Solutions](https://www.amazon.com/gp/product/0984782850)
- [12 Mistakes You Have to Avoid if You Want to Get Hired in Tech](https://skillcrush.com/2016/02/16/common-tech-job-interview-mistakes/)
- [How to Answer the 31 Most Common Interview Questions](https://www.themuse.com/advice/how-to-answer-the-31-most-common-interview-questions)
- [22 Most Common Interview Questions and Best Answers (With Tips)](https://www.indeed.com/career-advice/interviewing/top-interview-questions-and-answers)
- [Front-end Job Interview Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)
- [Top 85 JavaScript Interview Questions & Answers](https://www.guru99.com/javascript-interview-questions-answers.html)
