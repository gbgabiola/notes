# Snippets to Solve Practical JavaScript Problems


- [Hide all elements specified](#hide-all-elements-specified)
- [Check if element has the specified class](#check-if-element-has-the-specified-class)
- [Toggle a class for an element](#toggle-a-class-for-an-element)
- [Get the scroll position of the current page](#get-the-scroll-position-of-the-current-page)
- [Smooth-scroll to the top of the page](#smooth-scroll-to-the-top-of-the-page)
- [Check if parent element contains child element](#check-if-parent-element-contains-child-element)
- [Check if element specified is visible in the viewport](#check-if-element-specified-is-visible-in-the-viewport)
- [Fetch all images within an element](#fetch-all-images-within-an-element)
- [Figure out if the device is a mobile device or a desktop/laptop](#figure-out-if-the-device-is-a-mobile-device-or-a-desktoplaptop)
- [Get the current URL](#get-the-current-url)
- [Create an object containing the parameters of the current URL](#create-an-object-containing-the-parameters-of-the-current-url)
- [Encode a set of form elements as an object](#encode-a-set-of-form-elements-as-an-object)
- [Retrieve a set of properties indicated by the given selectors from an object](#retrieve-a-set-of-properties-indicated-by-the-given-selectors-from-an-object)
- [Invoke the provided function after wait (in milliseconds)](#invoke-the-provided-function-after-wait-in-milliseconds)
- [Trigger a specific event on a given element, optionally passing custom data](#trigger-a-specific-event-on-a-given-element-optionally-passing-custom-data)
- [Remove an event listener from an element](#remove-an-event-listener-from-an-element)
- [Get readable format of the given number of milliseconds](#get-readable-format-of-the-given-number-of-milliseconds)
- [Get the difference (in days) between two dates](#get-the-difference-in-days-between-two-dates)
- [Make a GET request to the passed URL](#make-a-get-request-to-the-passed-url)
- [Make a POST request to the passed URL](#make-a-post-request-to-the-passed-url)
- [Create a counter with the specified range, step and duration for the specified selector](#create-a-counter-with-the-specified-range-step-and-duration-for-the-specified-selector)
- [Copy a string to the clipboard](#copy-a-string-to-the-clipboard)
- [Find out if the browser tab of the page is focused](#find-out-if-the-browser-tab-of-the-page-is-focused)
- [Create a directory, if it does not exist](#create-a-directory-if-it-does-not-exist)


## Hide all elements specified

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```


## Check if element has the specified class

```js
const hasClass = (el, className) => el.classList.contains(className);

hasClass(document.querySelector('p.special'), 'special'); // true
```


## Toggle a class for an element

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // Paragraph will not have the 'special' class anymore
```


## Get the scroll position of the current page

```js
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

getScrollPosition(); // {x: 0, y: 200}
```


## Smooth-scroll to the top of the page

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```


## Check if parent element contains child element

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title'));  // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```


## Check if element specified is visible in the viewport

```js
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

elementIsVisibleInViewport(el); // (not fully visible)
elementIsVisibleInViewport(el, true); // (partially visible)
```


## Fetch all images within an element

```js
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
  return includeDuplicates ? images : [...new Set(images)];
};

getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false); // ['image1.jpg', 'image2.png', '...']
```


## Figure out if the device is a mobile device or a desktop/laptop

```js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

detectDeviceType(); // "Mobile" or "Desktop"
```


## Get the current URL

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://google.com'
```


## Create an object containing the parameters of the current URL

```js
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );

getURLParameters('http://url.com/page?n=Adam&s=Smith'); // {n: 'Adam', s: 'Smith'}
getURLParameters('google.com'); // {}
```


## Encode a set of form elements as an object

```js
const formToObject = form =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );

formToObject(document.querySelector('#form')); // { email: 'test@email.com', name: 'Test Name' }
```


## Retrieve a set of properties indicated by the given selectors from an object

```js
const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
const obj = {
  selector: { to: { val: 'val to select' } },
  target: [1, 2, { a: 'test' }]
};

get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']
```


## Invoke the provided function after wait (in milliseconds)

```js
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
delay(
  function(text) {
    console.log(text);
  },
  1000,
  'later'
);

// Logs 'later' after one second.
```


## Trigger a specific event on a given element, optionally passing custom data

```js
const triggerEvent = (el, eventType, detail) =>
  el.dispatchEvent(new CustomEvent(eventType, { detail }));

triggerEvent(document.getElementById('myId'), 'click');
triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });
```


## Remove an event listener from an element

```js
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);

const fn = () => console.log('!');
document.body.addEventListener('click', fn);
off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page
```


## Get readable format of the given number of milliseconds

```js
const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ');
};

formatDuration(1001); // '1 second, 1 millisecond'
formatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
```


## Get the difference (in days) between two dates

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
```


## Make a GET request to the passed URL

```js
const httpGet = (url, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send();
};

httpGet(
  'https://jsonplaceholder.typicode.com/posts/1',
  console.log
); 

// Logs: {"userId": 1, "id": 1, "title": "sample title", "body": "my text"}
```


## Make a POST request to the passed URL

```js
const httpPost = (url, data, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send(data);
};

const newPost = {
  userId: 1,
  id: 1337,
  title: 'Foo',
  body: 'bar bar bar'
};
const data = JSON.stringify(newPost);
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  console.log
); 

// Logs: {"userId": 1, "id": 1337, "title": "Foo", "body": "bar bar bar"}
```


## Create a counter with the specified range, step and duration for the specified selector


```js
const counter = (selector, start, end, step = 1, duration = 2000) => {
  let current = start,
    _step = (end - start) * step < 0 ? -step : step,
    timer = setInterval(() => {
      current += _step;
      document.querySelector(selector).innerHTML = current;
      if (current >= end) document.querySelector(selector).innerHTML = end;
      if (current >= end) clearInterval(timer);
    }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};

counter('#my-id', 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id"
```


## Copy a string to the clipboard

```js
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
```


## Find out if the browser tab of the page is focused

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```


## Create a directory, if it does not exist

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);

createDirIfNotExists('test'); // creates the directory 'test', if it doesn't exist
```
