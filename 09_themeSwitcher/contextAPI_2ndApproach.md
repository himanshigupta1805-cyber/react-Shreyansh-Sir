# Another Approach of Using Context API

Previously humne:

```jsx
React.createContext()
```

use kiya tha and then usko export kar diya tha.

Example:

```jsx
const UserContext = React.createContext()
```

But iss project mein humne thoda different style use kiya:

```jsx
export const ThemeContext = createContext({
    themeMode : "light",
    lightTheme : ()=>{},
    darkTheme : ()=>{},
})
```

---

# Difference from Previous Project

Previous Project:

```jsx
const UserContext = React.createContext()
```

Context initially empty tha.

Then values later Provider ke through pass ho rhi thi:

```jsx
<UserContext.Provider value={{user, setUser}}>
```

---

# Current Project Approach

Yaha hum directly:

```jsx
createContext({})
```

ke andar default values pass kar rhe hain.

Matlab:

jab context create hoga tabhi usme kuch initial structure already present hoga.

---

# Why Passing Default Values?

```jsx
createContext({
    themeMode : "light",
    lightTheme : ()=>{},
    darkTheme : ()=>{},
})
```

Yeh basically batata h:

"Context ke andar kya kya cheeze available hongi."

So:

* `themeMode`
* `lightTheme`
* `darkTheme`

already defined structure mein aa jaate h.

---

# Similarity with Previous Project

Previous project mein:

```jsx
value={{user, setUser}}
```

pass kiya tha.

Yaha bhi same concept h.

Bas difference itna h:

### Previous Project

Values Provider ke andar di gayi thi.

### Current Project

Default structure `createContext()` ke andar bhi define kiya gaya h.

---

# Why Empty Functions?

```jsx
lightTheme : ()=>{}
darkTheme : ()=>{}
```

Dummy/default functions hain.

Purpose:

* Structure define karna
* Errors avoid karna
* Editor autocomplete improve karna

Actual functions later Provider se overwrite ho jaati hain.

---

# Exporting Provider Directly

Previous project mein humne separate file banayi thi:

```jsx
UserContextProvider.jsx
```

But yaha:

```jsx
export const ThemeProvider = ThemeContext.Provider
```

same file se export kar diya.

---

# Isme Fayda Kya?

Honestly major difference nahi h 😄

Bas coding style alag h.

Dono approaches valid hain.

---

# Previous Approach

```jsx
const UserContextProvider = ({children})=>{
   return(
      <UserContext.Provider value={...}>
   )
}
```

Thoda beginner-friendly and readable.

---

# Current Approach

```jsx
export const ThemeProvider = ThemeContext.Provider
```

Short and cleaner.

Mostly people use this in modern React projects.

---

# Custom Hook Approach

Sabse important improvement iss project mein yeh tha:

```jsx
export default function useTheme(){
    return useContext(ThemeContext)
}
```

---

# Why Custom Hook?

Normally hume har component mein yeh likhna padta:

```jsx
import { useContext } from "react"
import { ThemeContext } from "../contexts/theme"

const data = useContext(ThemeContext)
```

Har baar:

* `useContext`
* `ThemeContext`

dono import karne padte.

---

# Problem

Boht repetitive code ho jaata.

---

# Solution → Custom Hook

Ab hum simply likh sakte:

```jsx
const {themeMode} = useTheme()
```

Bas.

---

# Big Advantage

Ab:

* cleaner code
* less imports
* reusable logic
* easier readability

---

# Real Flow of Custom Hook

## Step 1

Custom hook:

```jsx
function useTheme(){
   return useContext(ThemeContext)
}
```

---

## Step 2

Jab component mein:

```jsx
useTheme()
```

call hota h,

andar automatically:

```jsx
useContext(ThemeContext)
```

run ho jaata h.

---

## Step 3

Component ko direct context values mil jaati hain.

Example:

```jsx
const {themeMode, darkTheme} = useTheme()
```

---

# Theme Toggle Flow

## Step 1

Initial state:

```jsx
themeMode = "light"
```

---

## Step 2

Checkbox toggle hota h.

```jsx
onChange={onChangeBtn}
```

---

## Step 3

Checked hua toh:

```jsx
darkTheme()
```

Else:

```jsx
lightTheme()
```

---

## Step 4

State update:

```jsx
setThemeMode("dark")
```

---

## Step 5

`useEffect()` runs because dependency changed.

```jsx
useEffect(()=>{
}, [themeMode])
```

---

## Step 6

HTML tag pe class update hoti h:

```jsx
html.classList.add(themeMode)
```

---

## Step 7

Tailwind dark classes activate ho jaati hain.

Example:

```jsx
dark:bg-gray-800
```

---

# Biggest Difference from Previous Project

## Previous Project

Context stored:

* user data
* authentication info

Main goal:

* global data sharing

---

## Current Project

Context stores:

* theme state
* theme changing functions

Main goal:

* global UI state management

---

# Another Important Difference

## Previous Project

Direct use:

```jsx
useContext(UserContext)
```

---

## Current Project

Custom hook use:

```jsx
useTheme()
```

This is more scalable and cleaner.

---

# Important Concepts Used

* createContext
* Provider
* useContext
* custom hooks
* global state
* useEffect
* DOM manipulation
* controlled input
* conditional UI
* Tailwind dark mode

---

# Interview Questions

## Why use custom hooks with Context?

To avoid repeated imports and make context usage cleaner.

---

## Why pass default values in createContext?

To define initial structure and avoid undefined errors.

---

## What is advantage of exporting Provider directly?

Cleaner syntax and less boilerplate.

---

## Difference between previous and current approach?

Previous:

* separate Provider component

Current:

* direct Provider export + custom hook pattern

---

## Why use useEffect in theme project?

Because actual DOM class change happens after state update.

---

# Quick Revision Notes

* `createContext({})` can take default values
* Provider gives global access
* Custom hooks simplify Context usage
* `useTheme()` internally uses `useContext`
* Theme state is shared globally
* `useEffect` updates actual DOM theme
* Tailwind dark mode works using `dark` class
