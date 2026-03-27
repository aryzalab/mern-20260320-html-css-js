# HTML/CSS/JS

## Web

- WWW: World wide web
- System of interlinked docs accessed through the internet using browser.
- Websites are made of HTML (Structure), CSS (Styling) and JavaScript (Behavior).

## Client-Server Model

- Client: The browser or app that sends requests to server
- Server: The machine that process the requests and sends response (HTML, CSS, Data)

## HTML: Hypertext Markup Language

1. Text elements

- Heading -> `h1` - `h6`
- Paragraph -> `p`
- Bold -> `strong`
- Emphasize -> `em`
- Sub-script -> `sub`
- Super-script -> `sup`
- Pre-formatted -> `pre`

2. Links and Media

- Anchor -> `a`
- Images -> `img`
- Videos -> `video`

3. Lists

- Ordered list -> `ol`
- Un-ordered list -> `ul`
- List item -> `li`

4. Misc

- Line break: `br`
- Divider: `hr`
- Iframe: `iframe`

5. Table

- `table`
- `tr`
- `td`
- `th`
- `thead`
- `tbody`
- `tfoot`

6. Form

- `form`
- `input`: text, number, email, tel, checkbox, radio, file, date, time, range, color, password, submit, search
- `label`
- `textarea`
- `select` & `option`

7. Inline & Block elements

- Inline elements occupy only the required width. for e.g, a, img, video, span
- Block elements occupy covers full width of the screen. for e.g, h1-h6, p, div, li

8. Semantics

- All HTML elements must be in lowercase
- Use proper elements as per their position and usage
- Always add `alt` property in the img tag
- Always add `title` property in button tag esp. icon only button
- HTML file names must be in kebab case. for e.g `hello-world.html`
- In each HTML file/page, there must be at least one h1 tag.
- Always format your code.

## CSS: Cascading Style Sheet

- Website styling like color, font-size, alignment, spacing

**Syntax**

```
<selector> {
    property: value;
    property: value;
    ...
}

for e.g;

// Element
h1 {
    color: red;
    text-align: center;
    font-size: 2rem;
    ...
}

// Class
.title {
    ...
}

// Id
#title {
    color: green;
    ...
}
```

**Selectors**

1. Element: h1, p, div | Lowest priority
2. Class: `.title` | Priority: Id > Class > Element
3. Id: `#title` | Highest priority

**Class VS Id**

- For CSS, always use class
- For JS, use id

**CSS Usage**

1. Inline
2. Internal (not used often)
3. External

### CSS Properties

1. Color, Background Color
2. Text
3. Font
4. Box model: margin, padding, border
5. Display
6. Flex
7. List
8. Units
9. Pseudo-class
10. Overflow
11. Position
12. Table
13. Form
14. Icon
15. Background image
16. Transform
==============
17. Grid
18. Animation
19. Responsive design
20. Variables   
21. Misc

# Task
Design your portfolio page

**Properties**
- Your image at the top, and rounded
- Your name with large font size
- Bio
- Social contacts with icons
- Contact form: Name, email, subject, message
