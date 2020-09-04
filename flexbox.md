# Flexbox

- [Introduction](#introduction)
- [Flexbox Basic Concepts](#flexbox-basic-concepts)
- [flex-direction](#flex-direction)
- [justify-content](#justify-content)
- [align-content](#align-content)
- [align-items](#align-items)
- [flex-wrap](#flex-wrap)
- [flex-flow](#flex-flow)
- [order](#order)
- [align-self](#align-self)
- [flex-grow](#flex-grow)
- [flex-shrink](#flex-shrink)
- [flex-basis](#flex-basis)
- [flex](#flex)


## Introduction

- **flexbox** (Flexible Box Module) is one of the two modern layouts systems, along with CSS Grid
- CSS Grid is bi-dimensional, flexbox is **one-dimensional layout model**, which controls the layout based on a row or on a column, but not together at the same time
- it's main goal is to allow items to fill the whole space offered by their container, depending on some rules we set
- to support older browsers like IE8 and IE9, use:
  - table layouts
  - floats
  - clearfix hacks
  - `display: table` hacks


## Flexbox Basic Concepts

- `display: flex;` is used to apply flexbox layout to a container
  - content **inside the container** will be aligned using flexbox
- some flexbox properties apply to the **container**, which sets the general rules for its items:
  - `flex-direction`
  - `justify-content`
  - `align-items`
  - `align-content`
  - `flex-wrap`
  - `flex-flow`
- some other properties apply to each individual **item** inside the container:
  - `order`
  - `align-self`
  - `flex-grow`
  - `flex-shrink`
  - `flex-basis`
  - `flex`


## flex-direction

- `flex-direction` determines if the container should align its items as row, or as column
  - `row` (default) places items in a row, in the text direction (left-to-right)
  - `row-reverse` places items just like row but in the opposite direction
  - `column` places items in a column, ordering top to bottom
  - `column-reverse` places items in a column, just like column but in the opposite direction


## justify-content

- `justify-content` change the horizontal alignment
  - `flex-start` align to the left side of the container
  `flex-end` align to the right side of the container
  - `center` align at the center of the container
  - `space-between` display with equal spacing between them
  - `space-around` display with equal spacing around them


## align-content

- `align-content` change the vertical alignment when it spans over multiple lines
  - `flex-start` align to the top of the container
  - `flex-end` align to the bottom of the container
  - `center` align at the vertical center of the container
  - `space-between` display with equal spacing between them
  - `space-around` display with equal spacing around them
  - `stretch` items are stretched to fit the container
- [codepen demo](https://codepen.io/HugoGiraudel/pen/1caa1ef0857a023d0561b5223abef75d) of `align-content` used in practice


## align-items

- `align-items` lets us dispose elements on the cross axis instead than on the main axis
  - `flex-start` align to the top of the container
  - `flex-end` align to the bottom of the container
  - `center` align at the vertical center of the container
  - `baseline` display at the baseline of the container
  - `stretch` items are stretched to fit the container


## flex-wrap

- by default, items in a flexbox container are kept on a single line, shrinking them to fit in the container
- `flex-wrap: wrap` force the items to spread across multiple lines
  - distribute the items according to the order set in `flex-direction`
- `wrap-reverse` reverses this order


## flex-flow

- `flex-flow` is a shorthand property that allows us to specify `flex-direction` and `flex-wrap` in a single line
  - `flex-direction` value first, followed by `flex-wrap` value, e.g., `flex-flow: row wrap`


## order

- items are ordered based on a order they are assigned
  - by default every item has order `0` and the appearance in the HTML determines the final order
- `order` property overrides the order set on each item
  - set on the item, not the container
  - negative value makes the item appears before all the other items


## align-self

- `align-self` can **override** the container `align-items` setting for an item
  - `flex-start` align to the top of the container
  - `flex-end` align to the bottom of the container
  - `center` align at the vertical center of the container
  - `baseline` display at the baseline of the container
  - `stretch` items are stretched to fit the container


## flex-grow

- default for any item is 0
- if all items are defined as 1 and one is defined as 2, the bigger element will take the space of two "1" items


## flex-shrink

- default for any item is 1
- if all items are defined as 1 and one is defined as 3, the bigger element will shrink 3x the other ones
  - when less space is available, it will take 3x less space


## flex-basis

- if set to `auto`, it sizes an item according to its width or height, and adds extra space based on the `flex-grow` property
- if set to 0, it does not add any extra space for the item when calculating the layout
- if specify a pixel number value, it will use that as the length value (width or height depends if it's a row or a column item)


## flex

- `flex` is a shorthand property that combines the 3 properties:
  - `flex-grow`
  - `flex-shrink`
  - `flex-basis`
  - e.g., `flex: 0 1 auto`
