# Why Context API?

Suppose we have a Dashboard component structure like this:

```jsx
<App title="username" />
    ↓
<Dashboard title="username" />
    ↓
<RightSide title="username" />
    ↓
<Top title="username" />
```

Now imagine only the `Top` component actually needs the `title`.

But still:

* `Dashboard`
* `RightSide`

all have to receive the prop just to pass it forward.

This is not a good approach because components that don't even use the data are forced to carry it.

This problem is called **Prop Drilling**.

---

## What is Prop Drilling?

Passing data from parent → child → grandchild → deeper child repeatedly even when intermediate components don't need that data.

Example:

```jsx
<App user="Shreyansh" />
```

`Dashboard` and `RightSide` don't use `user`, but still have to pass it.

This makes:

* code messy
* debugging harder
* scaling difficult

---

# Solution → Context API

Instead of passing props manually through every component, we create a global storage using Context API.

Then:

* store data once
* access it anywhere directly

So instead of:

```jsx
App → Dashboard → RightSide → Top
```

we can directly do:

```jsx
Top → get data from Context
```

No unnecessary prop passing.

---

# Why Context API is Useful

* Removes prop drilling
* Makes data globally accessible
* Cleaner component structure
* Better for authentication/user data
* Easy sharing of theme, language, user info etc.

---

# Other State Management Libraries

Context API is React's built-in solution.

Other popular libraries:

* Redux
* Redux Toolkit (RTK)
* Zustand

But for small-to-medium apps, Context API is enough.

---

# Steps to Setup Context API

---

## 1. Create Context

```jsx
const UserContext = React.createContext()
```

This creates a global context object.

---

## 2. Export Context

```jsx
export default UserContext
```

Now other files can use it.

---

## 3. Create Provider Component

Context alone does nothing.

We need:

```jsx
<UserContext.Provider>
```

Provider works like a wrapper.

It gives data to all components inside it.

---

## 4. Create UserContextProvider.jsx

This file handles:

* global state
* provider wrapping
* passing values

Example:

```jsx
<UserContext.Provider value={{user, setUser}}>
    {children}
</UserContext.Provider>
```

---

## 5. Store Global Data in value

Whatever you want globally accessible goes inside `value`.

Examples:

* user
* theme
* API data
* auth info
* functions

---

# Understanding `children`

```jsx
const UserContextProvider = ({children}) => {}
```

`children` means:
whatever component is wrapped inside Provider.

Example:

```jsx
<UserContextProvider>
    <Login />
    <Profile />
</UserContextProvider>
```

Here:

* Login
* Profile

become `children`.

---

# Fetching Data from Context

We use:

```jsx
useContext()
```

Example:

```jsx
const {user} = useContext(UserContext)
```

This directly gives access to global data.

No prop passing needed.

---

# Complete Project Flow

## Step 1

App loads.

---

## Step 2

`UserContextProvider` wraps components.

```jsx
<UserContextProvider>
    <Login />
    <Profile />
</UserContextProvider>
```

Now both components can access global data.

---

## Step 3

`UserContextProvider` creates:

```jsx
const [user, setUser] = useState(null)
```

Initially:

```jsx
user = null
```

Means user not logged in.

---

## Step 4

User types username/password in Login component.

Local state handles input values.

```jsx
const [username, setUsername] = useState('')
```

---

## Step 5

On Submit:

```jsx
setUser({username, password})
```

Global context updates.

---

## Step 6

`Profile` component automatically receives updated data using:

```jsx
useContext(UserContext)
```

---

## Step 7

Conditional rendering happens.

If no user:

```jsx
Please Login
```

Else:

```jsx
Welcome username
```

---

# File Summary

---

## `UserContext.js`

Purpose:

* Creates global context object

Main Concept:

```jsx
React.createContext()
```

This is the base global container.

---

## `UserContextProvider.jsx`

Purpose:

* Stores global state
* Wraps components
* Provides values globally

Main Concepts:

* Provider
* Global state
* children prop
* useState

Important Line:

```jsx
<UserContext.Provider value={{user, setUser}}>
```

This line shares data globally.

---

## `Login.jsx`

Purpose:

* Takes user input
* Updates global state

Main Concepts:

* useState
* useContext
* Event handling

Important Flow:

```jsx
setUser({username, password})
```

Sends data globally.

---

## `Profile.jsx`

Purpose:

* Reads global user data

Main Concepts:

* useContext
* Conditional rendering

Important Logic:

```jsx
if(!user) return <div>Please Login</div>
```

Checks whether user exists.

---

## `App.jsx`

Purpose:

* Root component
* Wraps everything inside Provider

Most Important Part:

```jsx
<UserContextProvider>
```

Without this, Context will not work.

---

# Important Concepts Used

---

## `createContext`

Creates global data container.

---

## `Provider`

Makes data available to child components.

---

## `useContext`

Reads data from Context.

---

## Global State

Data accessible from multiple components.

---

## Conditional Rendering

Showing different UI based on condition.

Example:

```jsx
if(!user)
```

---

## Local State vs Global State

### Local State

Used inside one component only.

Example:

```jsx
username input
```

### Global State

Shared across many components.

Example:

```jsx
logged in user
```

---

# Common Mistakes

---

## Forgetting Provider Wrapper

Wrong:

```jsx
<Login />
```

Correct:

```jsx
<UserContextProvider>
    <Login />
</UserContextProvider>
```

Otherwise:

```jsx
useContext()
```

will not work properly.

---

## Using Wrong Context Import

Import correct context file everywhere.

---

## Forgetting value Prop

Wrong:

```jsx
<UserContext.Provider>
```

Correct:

```jsx
<UserContext.Provider value={{user, setUser}}>
```

Without value, nothing gets shared.

---

## Using Context for Everything

Context is good for shared data.

Not every small state should become global.

---

# Interview Questions and Answers

---

## 1. What problem does Context API solve?

It solves prop drilling.

---

## 2. What is prop drilling?

Passing props through many components unnecessarily.

---

## 3. What does `createContext()` do?

Creates a global context object.

---

## 4. What is a Provider?

A wrapper that shares data with child components.

---

## 5. Why is `value` important in Provider?

Because data is passed through `value`.

---

## 6. What does `useContext()` do?

Reads data from Context.

---

## 7. Difference between local state and global state?

Local state belongs to one component.

Global state is shared across components.

---

## 8. Why use Context instead of props?

To avoid unnecessary prop passing.

---

## 9. Can Context replace Redux?

For small apps yes.

For large complex apps Redux/RTK may be better.

---

## 10. What happens if Provider is removed?

Components using `useContext()` won't receive proper data.

---

# Quick Revision Notes

* `createContext()` → creates context
* `Provider` → gives global access
* `useContext()` → consumes data
* `value` prop → shares data
* Context solves prop drilling
* `children` → wrapped components
* `useState` often used with Context
* Context is best for shared app-wide data
