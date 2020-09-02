# CSS Grid

- [Introduction](#introduction)
- [CSS Grid basics](#css-grid-basics)
- [grid-template-columns and grid-template-rows](#grid-template-columns-and-grid-template-rows)
- [Adding gaps between the cells](#adding-gaps-between-the-cells)
- [Spawning items on multiple columns or rows](#spawning-items-on-multiple-columns-or-rows)
- [Fractions and percentages](#fractions-and-percentages)
- [repeat()](#repeat)
- [Specify a minimum width for a row](#specify-a-minimum-width-for-a-row)
- [Positioning elements using grid-template-areas](#positioning-elements-using-grid-template-areas)
- [Fill a page with a grid](#fill-a-page-with-a-grid)


## Introduction

- CSS Grid is a fundamentally new approach to building layouts using CSS
  - CSS Grid works on 2 dimensions (rows AND columns), while Flexbox works on a single dimension (rows OR columns)


## CSS Grid basics

- `display: grid` is used to activate CSS Grid layout to a container
- with flexbox, we can define some properties on the container, and some properties on each individual item in the grid


## grid-template-columns and grid-template-rows

- `grid-template-columns` and `grid-template-rows` properties define the number of columns and rows in the grid, they also set the width of each column/row
- snippet defines a grid with 4 columns each 200px wide, and 2 rows with a 300px height each

  ```css
  .container {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 300px 300px;
  }
  ```


- grid with 2 columns and 2 rows

  ```css
  .container {
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 100px 100px;
  }
  ```


- fixed header size, a fixed footer size, and the main content that is flexible in height, depending on its length using `auto` keyword

  ```css
  .container {
    display: grid;
    grid-template-rows: 100px auto 100px;
  }
  ```


## Adding gaps between the cells

- `grid-gap` is a shorthand property that combines `grid-column-gap` and `grid-row-gap` properties to add spacing

  ```css
  .container {
    display: grid;
    grid-template-columns: 100px 200px;
    grid-template-rows: 100px 50px;

    /* grid-column-gap: 25px;
    grid-row-gap: 25px; */
    grid-gap: 25px;
  }
  ```


## Spawning items on multiple columns or rows

- every cell item has the option to occupy more than just one box in the row, and expand horizontally or vertically to get more space, while respecting the grid proportions set in the container
  - `grid-column` is shorthand property for `grid-column-start` and `grid-column-end`
  - `grid-row` is shorthand property for `grid-row-start` and `grid-row-end`
  - `span` is another approach to set how many it should occupy

  ```css
  .container {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 300px 300px;
  }

  .item2 {
    /*grid-column-start: 2;
    grid-column-end: 4;*/

    /* grid-column: 2 / 4; */
    grid-column: 2 / span 2;
  }
  
  .item6 {
    /*grid-column-start: 3;
    grid-column-end: 5;*/

    /* grid-column: 3 / 5; */
    grid-column: 3 / span 2;
  }
  ```


- numbers correspond to the vertical line that separates each column, starting from 1
  - same principle applies to `grid-row-start` and `grid-row-end`, except instead of taking more columns, a cell takes more rows


## Fractions and percentages

- specifying exact width for each column/row is not ideal in every case
- fraction is a unit of space
- e.g., divides a grid into 3 columns with the same width, 1⁄3 of the available space each
  - can also use percentages, and mix and match fractions, pixels, rem and percentages

  ```css
  .container {
    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-template-columns: 3rem 15% 1fr 2fr
  }
  ```


## repeat()

- `repeat()` is a special function that takes a number that indicates the number of times a row/column will be repeated, and the length of each one
- e.g., create 4 columns with the same width using pixels or fractions

  ```css
  .container {
    /* grid-template-columns: repeat(4, 100px); */
    grid-template-columns: repeat(4, 1fr);
  }
  ```


## Specify a minimum width for a row

- common use case: have a sidebar that never collapses more than a certain amount of pixels when we resize the window
- e.g., sidebar takes 1⁄4 of the screen and never takes less than 200px
  - we can also set just a maximum or minimum using `auto` keyword

  ```css
  .container {
    grid-template-columns: minmax(200px, 3fr) 9fr;
    /* grid-template-columns: minmax(auto, 50%) 9fr; */
    /* grid-template-columns: minmax(100px, auto) 9fr; */
  }
  ```


## Positioning elements using grid-template-areas

- by default, elements are positioned in the grid using their order in the HTML structure
- `grid-template-areas` property let us define template areas to move them around in the grid, and also to spawn an item on multiple rows / columns instead of using `grid-column`
- items are gonna be placed where `grid-template-areas` define, depending on the `grid-area` property associated to them
  - we can set empty cell using the dot (`.`), instead of an area name in `grid-template-areas`

  ```html
  <div class="container">
    <main>
      ...
    </main>
    <aside>
      ...
    </aside>
    <header>
      ...
    </header>
    <footer>
      ...
    </footer>
  </div>
  ```

  ```css
  .container {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 300px 300px;
    /* grid-template-areas:
      "header header header header"
      "sidebar main main main"
      "footer footer footer footer"; */

    grid-template-areas:
      ". header header ."
      "sidebar . main main"
      ". footer footer .";
  }

  main {
    grid-area: main;
  }

  aside {
    grid-area: sidebar;
  }

  header {
    grid-area: header;
  }

  footer {
    grid-area: footer;
  }
  ```


## Fill a page with a grid

- we can make a grid extend to fill the page using `fr`:

  ```css
  .container {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  ```
