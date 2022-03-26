---
title: "Make Static SVGs Responsive"
sectionId: 2
tagIds: [4, 5, 10, 11]
createdAt: "2022-03-14"
---

SVGs can be a great alternative to .png or .jpeg images for images on a webpage and allows greater customizability out of the box then other image formats. This customizability, however, comes at a cost where svgs don't always behave as you would expect. Check out the rest of the help doc below for more information on making svgs responsive.

### Background

As svgs are typically placed under a container element, it's helpful to have an svg respond to their parent container's attributes. Many production ready svgs imported from packages (such as material.ui) tend to already have this ability. However, some manually created svgs usually have various static properties that makes this responsiveness impossible to achieve. The sections below will show several ways to make static svgs more responsive. All examples below will be based on the below example svg created using the [Figma](https://www.figma.com/) design tool.

&nbsp;

**SVG Of A Box With a Diagonal Line**

    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="66" height="66" fill="#C4C4C4"/>
        <line x1="0.646447" y1="66.6464" x2="66.6464" y2="0.646447" stroke="black"/>
    </svg>

### Implementation

#### Size

For an svg to inherit its parent's size, they will need to have responsive height and widths. From the example svg, you will notice the height and the width of the svg are both 67. This means that currently, this svg will be this size regardless of their parent element. For the svg to expand to fill its parent's container, it will need to have its height and width updated to 100%. Please note, the ratios of these heights and width should be preserved on the parent element as well.

&nbsp;

**SVG Using Its Parent Container's Size**

    <div style="height: 40px, width: 40px;">
        <svg width="100%" height="100%" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="66" height="66" fill="#C4C4C4"/>
        <line x1="0.646447" y1="66.6464" x2="66.6464" y2="0.646447" stroke="black"/>
        </svg>
    </div>

#### Color

For an svg to inherit its `stroke` or `fill` from its parent, these attributes will need to be updated from static values to responsive ones. From the example svg, you will see that the `rect` has a fill of `#C4C4C4` and the `line` has a stroke of black. This means that currently, these colors will be preserved unless the actual `rect` and `line` elements are targeted. To make these elements inherit their colors from the parent element, these colors will need to get updated to `currentColor`. Please note, in this example both the line and the box are set to the same color.

&nbsp;

**SVG Using Its Parent Container's Fill and Stroke**

    <div style="color: blue;">
        <svg width="67" height="67" viewBox="0 0 67 67" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="66" height="66" fill="currentColor"/>
            <line x1="0.646447" y1="66.6464" x2="66.6464" y2="0.646447" stroke="currentColor"/>
        </svg>
    </div>

### Completed Example

    <div style="color: blue;">
        <svg width="100%" height="100%" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="66" height="66" fill="currentColor"/>
            <line x1="0.646447" y1="66.6464" x2="66.6464" y2="0.646447" stroke="currentColor"/>
        </svg>
    </div>

### Links

- [A Stack Overflow question about updating stroke colors](https://stackoverflow.com/questions/13000682/how-do-i-have-an-svg-image-inherit-colors-from-the-html-document/13002311)
- [A Stack Overflow question about expanding svgs to parent container](https://stackoverflow.com/questions/22236894/how-can-i-make-a-svg-file-to-fill-a-100-width-of-its-div-container)
- [Official MDN svg docs](https://developer.mozilla.org/en-US/docs/Web/SVG)
