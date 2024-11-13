# Tips
1. **live preview** VSCode plugin to automatically fresh page after changes.


# selector

- Simple selectors (select elements based on name, id, class)
  - element name selector: `div`
  - id selector: `#my-id`
  - class selector: `.my-class`
  - elemnt and class: `p.my-class`: only the p elements with the class "my-class"
  - universal selector: `*`
  - group selectors: `h1, h2, h3`: selects all h1, h2, and h3 elements
- Combinator selectors (select elements based on a specific relationship between them)
- Pseudo-class selectors (select elements based on a certain state)
- Pseudo-elements selectors (select and style a part of an element)
- Attribute selectors (select elements based on an attribute or attribute value)

# link css to html
- external
```html
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
```

- internal
```html
<style></style>
<body></body>
```

- inline
```html
<div style="color:red;"></div>
```

priority: html file from up to down, the ***last one** has the highest priority: 
1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default


# color property
- RGB values: rgb(255, 99, 71)
- HEX values: **#ff6347**
- HSL values: hsl(9, 100%, 64%)
- RGBA values: rgba(255, 99, 71, 0.5) // with alpha value, indicates transparency from 0~1
- HSLA values: hsla(9, 100%, 64%, 0.5)


- background-color: Red; /**background color*/
- color: text color
- border-color: border color
- border: 2px solid Red;

# backgrounds
## background-color

## background-image
default repeated to covers the entire element
`background-image: url("paper.gif");`

`background-repeat: repeat-x;` // repeat horizontally
`background-repeat: repeat-y;` // repeat vertically
`background-repeat: no-repeat;` // no repeat

`background-position: center center;` // position of the image, right top; left bottom; center center;

`background-attachment: fixed;` // fixed position, stays in place even when scrolling
`background-attachment: scroll;` // scroll with the content

`background: #ffffff url("img_tree.png") no-repeat right top;`
- background-color
- background-image
- background-repeat
- background-attachment
- background-position


# borders
`border-style: dotted;`
`border-width: 25px 10px 4px 35px;` /* 25px top, 10px right, 4px bottom and 35px left */
`border-color: red green blue yellow;`


# margin
create space around elements, outside of any defined borders.
- auto: auto to **horizontally center** the element within its container.

margin collagpes, the top and bottom could collide, but the left and right margins cannot collide. 
using the max(botton, top).


# pading
to generate space for the content inside an element, any borders

# height and width
 It sets the height/width of the area inside the padding, border, and margin of the element.

