# 🚀 Custom React Renderer

A beginner-friendly project to understand how React internally works behind JSX, React.createElement(), Virtual DOM, rendering, reconciliation, and Fiber architecture using plain JavaScript and DOM APIs.

---

## 📚 What This Project Teaches

- How JSX gets converted internally
- How React.createElement() works
- Structure of React Elements
- Rendering process in React
- DOM creation using JavaScript
- Props handling
- Children rendering
- Virtual DOM basics
- Diffing & Reconciliation
- Fiber Architecture basics
- Declarative vs Imperative UI

---

## 🧠 Main Idea

React does NOT directly render JSX.

Instead:

```text
JSX
 ↓
Babel Transpiles
 ↓
React.createElement()
 ↓
JavaScript Object
 ↓
Virtual DOM
 ↓
React DOM Renderer
 ↓
Actual Browser DOM
```

This project manually recreates that flow.

---

## 📂 Project Structure

```text
project/
│
├── index.html
├── main.js
└── README.md
```

---

## ⚙️ Custom React Element

```js
const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : '_blank'
    },
    children : 'Click me to visit google'
}
```

This object represents a simplified React Element.

Internally React creates similar objects.

---

## 🏗️ customRender Function

```js
function customRender(reactElement , container){

    // Create actual DOM element
    const domElement = document.createElement(reactElement.type)

    // Add text/content
    domElement.innerHTML = reactElement.children

    // Dynamically add props
    for (const prop in reactElement.props){

        // children is not an HTML attribute
        if(prop === 'children') continue

        domElement.setAttribute(prop,reactElement.props[prop])
    }

    // Append element to DOM
    container.appendChild(domElement)
}
```

---

## 🔥 Step-by-Step Internal Working

### 1. Create DOM Element

```js
document.createElement(reactElement.type)
```

If:

```js
type: 'a'
```

Browser creates:

```html
<a></a>
```

---

### 2. Add Children

```js
domElement.innerHTML = reactElement.children
```

Adds text/content inside the element.

---

### 3. Add Props Dynamically

```js
for (const prop in reactElement.props)
```

Loops through all props dynamically.

---

### 4. Skip Children

```js
if(prop === 'children') continue
```

Because children is NOT an HTML attribute.

Wrong:

```html
<a children="Hello"></a>
```

Correct:

```html
<a>Hello</a>
```

---

### 5. Apply Attributes

```js
domElement.setAttribute(prop,reactElement.props[prop])
```

Example:

```js
setAttribute('href', 'https://google.com')
```

Creates:

```html
<a href="https://google.com">
```

---

### 6. Append to DOM

```js
container.appendChild(domElement)
```

Finally renders element on screen.

---

## 🧬 JSX Internally

JSX:

```jsx
<h1>Hello</h1>
```

Internally becomes:

```js
React.createElement(
    'h1',
    {},
    'Hello'
)
```

---

## ⚡ React.createElement()

Syntax:

```js
React.createElement(type, props, children)
```

Example:

```js
React.createElement(
    'a',
    {
        href: 'https://google.com'
    },
    'Visit Google'
)
```

Internally returns:

```js
{
    type: 'a',
    props: {
        href: 'https://google.com',
        children: 'Visit Google'
    }
}
```

---

## 🌳 Nested JSX Internally

JSX:

```jsx
<div>
    <h1>Hello</h1>
    <p>World</p>
</div>
```

Internally:

```js
{
   type: 'div',
   props: {
      children: [
         {
            type: 'h1',
            props: {
               children: 'Hello'
            }
         },
         {
            type: 'p',
            props: {
               children: 'World'
            }
         }
      ]
   }
}
```

React works completely using tree structures.

---

## 🌐 Virtual DOM

Virtual DOM is a lightweight JavaScript copy of the real DOM.

Example:

```js
{
    type: 'div',
    props: {
        children: [...]
    }
}
```

---

## 🚀 Why React Uses Virtual DOM

DOM operations are expensive.

React:

- Compares objects in memory
- Finds differences
- Updates only changed parts

This improves performance.

---

## 🔄 Reconciliation

React compares:

```text
Old Virtual DOM
vs
New Virtual DOM
```

Then updates only necessary parts.

This process is called Reconciliation.

---

## ⚔️ Diffing Algorithm

React follows rules like:

- Different type → Replace node
- Same type → Update props
- Recursively compare children

---

## 🧵 Fiber Architecture

React 16 introduced React Fiber.

Purpose:

- Better scheduling
- Interruptible rendering
- Smooth UI
- Priorities handling

Old React rendering was synchronous:

```text
Start render → Finish everything → Paint
```

Large UI could freeze browser.

Fiber breaks work into chunks:

```text
Work → Pause → Continue
```

Benefits:

- Smooth animations
- Better responsiveness
- Concurrent rendering

---

## ⚡ Render Phase vs Commit Phase

### Render Phase

React:

- Builds Virtual DOM
- Calculates differences

### Commit Phase

React updates actual browser DOM.

---

## ⚙️ Functional Components

Example:

```jsx
function App(){
    return <h1>Hello</h1>
}
```

Internally:

```js
App()
```

returns React element objects.

---

## 🪝 useState Internal Idea

```js
const [count, setCount] = useState(0)
```

React internally stores state.

When state changes:

```js
setCount(count + 1)
```

React:

- Updates state
- Re-runs component
- Creates new Virtual DOM
- Diffs old/new trees
- Updates DOM

---

## 🆚 Declarative vs Imperative

### Imperative DOM

```js
const el = document.createElement('h1')
el.innerHTML = 'Hello'
document.body.appendChild(el)
```

You tell HOW to do everything.

### Declarative React

```jsx
<h1>Hello</h1>
```

You tell WHAT you want.

React handles HOW internally.

---

## 📌 Key Learnings

This project helps understand:

- React internals
- JSX transformation
- Rendering engine basics
- Object tree structures
- DOM manipulation
- Virtual DOM concept
- Reconciliation process
- Fiber architecture basics

---

## 🧠 Core React Philosophy

```text
UI = JavaScript Objects
```

HTML is only the final output.

React mainly works with:

- Objects
- Trees
- Functions
- Diffing
- Scheduling

---

## 🛠️ Future Improvements

Possible upgrades:

- Support nested children
- Add event listeners
- Support functional components
- Build mini Virtual DOM
- Implement diffing
- Add reconciliation
- Create hooks system
- Build mini Fiber architecture

---

## 🎯 Final Flow

```text
JSX
 ↓
Babel
 ↓
React.createElement()
 ↓
React Element Object
 ↓
Virtual DOM
 ↓
Diffing
 ↓
Fiber Reconciliation
 ↓
Real DOM Update
 ↓
Browser Paint
```

---

## 💻 Tech Used

- JavaScript
- DOM APIs
- HTML

---

## 🚀 Conclusion

This project recreates the core idea behind React:

```text
JSX → Objects → Renderer → DOM
```

Understanding this makes React MUCH easier to learn deeply because now you know what actually happens behind the scenes.
