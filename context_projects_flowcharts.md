# Flowchart of Context API Data Flow

---

# Previous Project Flow (User Login Context)

## Overall Flow

```text
User types input
        ↓
Login Component
        ↓
setUser()
        ↓
UserContext Provider
        ↓
Global Context Updated
        ↓
Profile Component
        ↓
useContext(UserContext)
        ↓
User data received
        ↓
UI updates automatically
```

---

# Component Tree Flow

```text
<App>
   ↓
<UserContextProvider>
   ↓
 ┌───────────────┐
 ↓               ↓
<Login />     <Profile />
```

Both components can directly access:

* user
* setUser

because Provider wrapped them.

---

# Props Drilling Problem

Without Context API:

```text
<App user="Shreyansh">
      ↓
<Dashboard user="Shreyansh">
      ↓
<RightSide user="Shreyansh">
      ↓
<Top user="Shreyansh">
```

Problem:

* Intermediate components don't even use `user`
* Still they must carry it

This is Prop Drilling.

---

# With Context API

```text
                UserContext
                     ↑
                     │
<App> → Provider → Global Store
                     │
        ┌────────────┴────────────┐
        ↓                         ↓
   <Login />                <Profile />
```

Now:

* no prop passing
* components directly access global data

---

# Theme Project Flow

## Overall Theme Change Flow

```text
Toggle Button Click
        ↓
onChangeBtn()
        ↓
darkTheme() / lightTheme()
        ↓
setThemeMode()
        ↓
themeMode state changes
        ↓
useEffect() runs
        ↓
html class updated
        ↓
Tailwind dark classes activate
        ↓
Theme changes on UI
```

---

# Theme Context Component Flow

```text
<App>
   ↓
<ThemeProvider>
   ↓
 ┌───────────────┐
 ↓               ↓
<ThemeBtn />   <Card />
```

Both components get access to:

* themeMode
* darkTheme
* lightTheme

globally.

---

# Custom Hook Flow

## Without Custom Hook

Every component:

```text
Import useContext
        +
Import ThemeContext
        ↓
useContext(ThemeContext)
```

Too repetitive.

---

# With Custom Hook

```text
Component
    ↓
useTheme()
    ↓
useContext(ThemeContext)
    ↓
Returns Context Data
```

Cleaner and reusable.

---

# Internal Working of useTheme()

```text
useTheme()
     ↓
Calls useContext(ThemeContext)
     ↓
Fetches nearest Provider values
     ↓
Returns theme data/functions
```

---

# Provider Working Flow

```text
Provider
   ↓
Stores Global Values
   ↓
All Wrapped Children
can access those values
using useContext/useTheme
```

---

# Easy Memory Trick

## createContext()

Creates the "container"

---

## Provider

Fills the container with data

---

## useContext()

Reads data from container

---

# One-Line Summary

Context API = Global storage system for React components.
