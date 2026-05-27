# Currency Converter Project Bible

This document is a complete story of how the Currency Converter app works, how React moves through the project, how data flows between files, and how you can explain the same project in an interview. It is written in a beginner-friendly way, but it also includes the internal working details that help with revision and advanced interview questions.

---

## 1. Project Overview

This project is a **Currency Converter application** built with **React.js** and **Vite**. It lets a user enter an amount, choose a source currency, choose a target currency, and then convert the value using live exchange-rate data from an external API.

The purpose of the application is simple: take currency conversion data that changes over time and present it in a clean interface where the user can quickly compare values. It is also a strong learning project because it combines UI building, state management, custom hooks, API calls, reusable components, and controlled form handling.

### Technologies used and why they were chosen

- **React.js**: used to build the UI in reusable components and keep the interface reactive when state changes.
- **Vite**: used as the development tool because it starts quickly, refreshes fast, and keeps the project simple to run.
- **Tailwind CSS**: used for styling because it gives utility-based control over layout and design without writing large CSS files.
- **Custom Hooks**: used to isolate API fetching logic and make it reusable.
- **APIs**: used to fetch live currency data from the currency API endpoint.
- **React Hooks**: used to manage local state and side effects.
- **JavaScript concepts**: used throughout the project for destructuring, object keys, event handling, promises, and state-based calculations.

Context API and Redux are **not used** in this project. The app is small enough that lifting state to the top component and using a custom hook is the right level of complexity.

---

## 2. Complete Project Flow

This is the most important part of the document. Read it like a story of what happens from the moment the app starts.

### Step 1: `npm run dev` starts the app

When the developer runs `npm run dev`, Vite starts a local development server. Vite serves the HTML file and JavaScript modules, and it keeps the browser updated with fast hot reloading when files change.

At this stage, React has not rendered anything yet. The browser only knows it has to load the app entry point from `main.jsx`.

### Step 2: `main.jsx` becomes the entry door

React enters through [`src/main.jsx`](src/main.jsx). This file is the first JavaScript file that matters for the UI.

What happens here:

1. `StrictMode` is imported from React.
2. `createRoot` is imported from `react-dom/client`.
3. Global styles from `index.css` are loaded.
4. `App` is imported from `App.jsx`.
5. `createRoot(document.getElementById('root'))` finds the root DOM node.
6. `.render(...)` tells React to render the app into that node.
7. The `App` component is wrapped in `StrictMode` for development checks.

So the rendering chain begins like this:

`main.jsx` -> `createRoot()` -> `StrictMode` -> `App`

### Step 3: React renders `App.jsx`

[`src/App.jsx`](src/App.jsx) is the main component and the true brain of the application.

`App` owns the important state values:

- `amount`
- `from`
- `to`
- `convertedAmount`

This means `App` is the parent component that controls the full conversion flow. It does not only display UI. It also stores the values, decides when conversion happens, and passes data to child components.

When `App` renders, React executes the function from top to bottom:

1. `useState` creates the four pieces of state.
2. `useCurrencyInfo(from)` runs and asks for exchange-rate data for the selected source currency.
3. `Object.keys(currencyInfo)` builds the list of dropdown options.
4. Event handlers like `swap` and `convert` are created.
5. JSX is returned and the UI is painted.

### Step 4: The custom hook fetches currency data

`useCurrencyInfo(from)` is a custom hook that lives in [`src/hooks/useCurrencyinfo.js`](src/hooks/useCurrencyinfo.js). It receives the current source currency and fetches the corresponding exchange-rate JSON from the API.

Its internal flow is:

1. It creates local state called `data` using `useState({})`.
2. It sets up a `useEffect` that depends on `currency`.
3. When `currency` changes, React runs the effect.
4. The hook calls `fetch(...)` for the currency endpoint.
5. The response is converted to JSON.
6. The relevant nested object `res[currency]` is stored in state.
7. The hook returns that data to `App`.

This is why the hook is useful: `App` stays clean, and the API logic is separated from UI logic.

### Step 5: `App` derives the dropdown values

After the hook returns exchange data, `App` converts the returned object keys into an array:

`const options = Object.keys(currencyInfo)`

This is the list of currency codes shown in the dropdowns. The UI is not hardcoded with currency names. Instead, it is generated from real API data.

### Step 6: `InputBox` components are rendered

The app renders the child component [`src/components/Inputbox.jsx`](src/components/Inputbox.jsx) twice.

One `InputBox` is used for the source currency, and the other is used for the target currency.

This is the component hierarchy:

`main.jsx` -> `App.jsx` -> `InputBox` -> native `<input>` and `<select>` elements

The first `InputBox` receives:

- `label="From"`
- `amount={amount}`
- `onAmountChange`
- `onCurrencyChange`
- `selectCurrency={from}`
- `currencyOptions={options}`

The second `InputBox` receives:

- `label="To"`
- `amount={convertedAmount}`
- `onCurrencyChange`
- `selectCurrency={to}`
- `currencyOptions={options}`
- `amountDisabled`

The second box is read-only for amount input because the user should not manually type the converted value.

### Step 7: User interaction updates state

The app uses a classic React flow: user event -> state update -> re-render.

Examples:

- When the user types an amount, the first input calls `onAmountChange`.
- When the user changes currency, the select calls `onCurrencyChange`.
- When the user clicks Swap, the `swap` function exchanges the values.
- When the user submits the form, `convert()` calculates the converted amount.

Because state changes, React re-renders the component tree. The UI always reflects the latest state.

### Step 8: Conversion happens on submit

The form’s `onSubmit` handler prevents the default browser refresh and then calls `convert()`.

`convert()` calculates:

`setConvertedAmount(currencyInfo[to] * amount)`

This means the app looks up the exchange rate for the selected target currency from the fetched data and multiplies it by the entered amount.

### Step 9: Re-render updates the UI

Once `convertedAmount` changes, React re-renders the app.

The updated result appears in the target `InputBox`, and the UI now shows the new currency conversion.

### Step 10: What `StrictMode` changes in development

Because `App` is wrapped in `StrictMode`, React may intentionally run some logic twice in development to help detect unsafe side effects. In this project, that means the API call inside the custom hook may appear twice in the browser dev environment. That is expected behavior in development and does not mean the app is broken.

---

## 3. Component Hierarchy and Flow

### Parent-child relationship

- `App` is the parent component.
- `InputBox` is the child component.
- The custom hook does not render UI, but it supports `App` by returning data.

### State flow

- `App` owns the main state.
- `App` passes values down to `InputBox` as props.
- `InputBox` emits changes back up through callback props.
- The state update happens in `App`, not inside `InputBox`.

### Event flow

- Typing in input -> child calls callback -> parent updates state -> parent re-renders -> child receives new props.
- Clicking Swap -> parent swaps values -> parent re-renders -> both inputs show new currencies.
- Submitting form -> parent calculates conversion -> result state updates -> UI refreshes.

### Lifecycle flow

- Component mounts.
- `useEffect` in custom hook runs.
- API data is fetched.
- State is set.
- Re-render occurs.
- User interaction changes state.
- React re-renders again.

---

## 4. Hooks Section

This section explains the hooks used in the project and also covers the hooks that are important to understand even if they are not used here.

### 4.1 `useState`

**Definition:** `useState` is a React hook that gives a component its own local state.

**Syntax:**

```js
const [value, setValue] = useState(initialValue)
```

**Why it is used here:** `App` needs to remember the entered amount, selected currencies, and conversion result.

**Internal working:** React stores the state value across renders. When `setValue` is called, React marks the component for re-render. The next render uses the updated value.

**Real project usage:**

- `amount` stores the user input amount.
- `from` stores the source currency code.
- `to` stores the target currency code.
- `convertedAmount` stores the calculated result.
- `data` inside the custom hook stores fetched API data.

**Interview question style:**

- What is the difference between state and props?
- Why does `setState` not update immediately in the same line?
- Why is `useState` better than a plain variable in React?

**Common mistakes:**

- Mutating state directly.
- Expecting state to update synchronously.
- Forgetting that each render gets its own snapshot of state.

**Best practices:**

- Use clear state names.
- Keep related state close to where it is used.
- Initialize with the correct type, such as `0` for numbers or `{}` for objects.

### 4.2 `useEffect`

**Definition:** `useEffect` runs side effects after render.

**Syntax:**

```js
useEffect(() => {
  // side effect
}, [dependencies])
```

**Why it is used here:** API fetching is a side effect. It should not happen during plain rendering logic.

**Internal working:** React runs the effect after the component renders. If dependencies change, React runs it again. In this project, the dependency is the selected `currency`.

**Real project usage:** `useCurrencyInfo(currency)` fetches exchange-rate data every time the source currency changes.

**Interview question style:**

- Why should API calls be placed inside `useEffect`?
- What happens when the dependency array changes?
- Why can `useEffect` run twice in development with StrictMode?

**Common mistakes:**

- Forgetting the dependency array.
- Adding the wrong dependencies.
- Putting business logic that belongs in render directly inside the effect.

**Best practices:**

- Keep effects focused.
- Separate fetching logic from UI logic.
- Handle loading and error states in real-world apps.

### 4.3 `useRef`

**Definition:** `useRef` creates a stable object whose `.current` value survives re-renders.

**Syntax:**

```js
const ref = useRef(initialValue)
```

**Why it is not used here:** This project does not need direct DOM access or mutable values that must survive renders without triggering UI updates.

**Where it could fit:** Focusing the input automatically, storing an interval ID, or reading a DOM element size.

**Interview answer style:** `useRef` is used when I need a mutable value or a direct DOM reference without causing re-renders.

### 4.4 `useCallback`

**Definition:** `useCallback` memoizes a function so the same function reference can be reused across renders.

**Why it is not used here:** The app is small, and the current callbacks are already simple. There is no heavy child component tree that needs stable function references for optimization.

**Interview answer style:** I use `useCallback` when function identity matters, usually to prevent unnecessary re-renders in memoized children.

### 4.5 `useMemo`

**Definition:** `useMemo` memoizes a computed value.

**Why it is not used here:** The derived values in this project are lightweight, so memoization is unnecessary.

**Where it could fit:** Caching expensive filtered lists, formatted results, or derived currency tables.

**Interview answer style:** I use `useMemo` when a calculation is expensive and should only rerun when dependencies change.

### 4.6 `useContext`

**Definition:** `useContext` reads data from a React context without prop drilling.

**Why it is not used here:** The project is small enough that passing props from `App` to `InputBox` is simple and readable.

**Where it could fit:** A shared theme, user settings, or globally accessible currency preferences.

**Interview answer style:** I use context when multiple components need the same data and prop drilling starts becoming noisy.

### 4.7 Custom hooks

**Definition:** A custom hook is a normal JavaScript function that uses React hooks and packages reusable logic.

**Why it is used here:** The currency-fetching logic should not live directly inside `App` because that would mix data fetching with UI concerns.

**Internal working:** The custom hook runs when the parent component renders. It uses state and effect internally, then returns the final data to the caller.

**Project usage:** `useCurrencyInfo(from)` returns exchange-rate data for the selected source currency.

**Interview question style:**

- What problem do custom hooks solve?
- Why not use a normal function for data fetching?
- How does a custom hook improve reusability?

---

## 5. Custom Hooks Section

Custom hooks are created to extract repeated logic out of components. In this project, the hook is not just a helper function. It is a reusable data layer.

### Why the custom hook exists

If API fetching stayed inside `App`, the component would become harder to read. The hook moves the fetching responsibility into its own file.

### How it improves reusability

Any component can call the hook with a currency code and receive the matching currency data. That means the logic is reusable, testable, and easier to maintain.

### Internal flow of the hook

1. `App` passes the `from` currency into the hook.
2. The hook stores the response data in local state.
3. `useEffect` reacts when the currency changes.
4. The hook fetches the API response.
5. JSON is parsed.
6. The currency-specific object is saved.
7. The object is returned to `App`.

### Interview questions from custom hooks

- What makes a function a custom hook?
- Why do hook names start with `use`?
- Can a custom hook call other hooks?
- How would you reuse this hook in a different component?

---

## 6. JavaScript Concepts Used in the Project

### Variable swapping

**Definition:** switching the values of two variables.

**Project example:** the `swap` function exchanges `from` and `to`, and it also swaps the displayed amounts.

**Interview explanation:** swapping is useful when a user wants to reverse conversion direction without re-entering data.

### Destructuring

**Definition:** extracting values from arrays or objects into separate variables.

**Project example:** props are destructured in `InputBox({ label, amount, onAmountChange, ... })`.

**Interview explanation:** destructuring makes code shorter and easier to read.

### Spread operator

**Definition:** copies or expands array/object values.

**Project note:** not directly used in the source, but it is a common pattern in React state updates and component props.

**Interview explanation:** spread helps create new immutable values instead of mutating existing ones.

### Rest operator

**Definition:** collects remaining values into an array or object.

**Project note:** not used directly, but it appears in modern JavaScript APIs and component patterns.

### Closures

**Definition:** a function remembering variables from its outer scope.

**Project example:** event handlers such as `swap` and `convert` close over the current component state.

**Interview explanation:** closures are why these handlers can read current values without passing everything manually.

### Callbacks

**Definition:** functions passed to other functions.

**Project example:** `onAmountChange`, `onCurrencyChange`, and the `fetch(...).then(...)` handlers are callbacks.

**Interview explanation:** callbacks allow child components and async APIs to notify the parent or the next step in the chain.

### Promises

**Definition:** objects representing future async results.

**Project example:** `fetch(...)` returns a promise.

**Interview explanation:** promises help manage asynchronous API calls in a structured way.

### Async/await

**Definition:** syntax for writing promise-based code in a more readable style.

**Project note:** not used in the current implementation, but the fetch flow could easily be rewritten using async/await.

**Interview explanation:** async/await makes async code look synchronous.

### Event loop

**Definition:** the JavaScript system that manages async callbacks and task execution.

**Project relevance:** the browser handles user events, promise resolution, and React updates through the event loop.

### Hoisting

**Definition:** declaration behavior where some variables or functions are available before their physical definition in the file.

**Project relevance:** function declarations and import order matter, but the code mainly avoids hoisting issues by using clear modern syntax.

### `map`, `filter`, `reduce`

**Definition:** array transformation methods.

**Project example:** `currencyOptions.map(...)` renders the dropdown list.

**Interview explanation:** `map` transforms each item into UI; `filter` would be useful for searching; `reduce` would be useful for aggregating data.

### Arrow functions

**Definition:** concise function syntax using `=>`.

**Project example:** used in handlers such as `convert`, `swap`, and event callbacks.

**Interview explanation:** arrow functions are concise and capture lexical `this`, which is especially helpful in modern React code.

### Template literals

**Definition:** strings written with backticks and embedded expressions.

**Project example:** the API URL is built with a template literal using the selected currency.

**Interview explanation:** template literals make dynamic strings easier to read.

### Modules / import-export

**Definition:** splitting code into files and sharing functionality with imports and exports.

**Project example:** `main.jsx` imports `App`, `App` imports `InputBox` and `useCurrencyInfo`, and the hook exports its function as default.

**Interview explanation:** modules keep the project structured and maintainable.

### Array/object methods

**Definition:** built-in methods used to inspect, transform, or access data.

**Project example:** `Object.keys(currencyInfo)` creates dropdown options.

**Interview explanation:** object methods turn API response objects into useful UI-friendly values.

### Optional chaining

**Definition:** safely reading nested properties with `?.`.

**Project note:** not used directly, but it is useful when API responses may be incomplete.

### Short-circuiting

**Definition:** using `&&` or `||` to conditionally evaluate expressions.

**Project example:** `onAmountChange && onAmountChange(...)` and `onCurrencyChange && onCurrencyChange(...)` prevent errors if callbacks are not passed.

**Interview explanation:** short-circuiting is a clean way to guard against missing values or missing functions.

### Debounce/throttle

**Definition:** techniques for limiting how often a function runs.

**Project note:** not used here.

**Interview explanation:** these are useful for search bars or rapid input changes, but this app does not need them yet.

---

## 7. React Concepts Used in the Project

### Virtual DOM

**Theory:** React keeps a lightweight representation of the UI in memory.

**Internal working:** when state changes, React compares the new virtual tree with the previous one and updates only the changed parts of the real DOM.

**Project example:** changing the amount or currency does not reload the page. React only re-renders the affected parts.

**Interview answer style:** the virtual DOM helps React update the UI efficiently.

### Reconciliation

**Theory:** reconciliation is the process React uses to compare UI changes and decide what to update.

**Project example:** when `convertedAmount` changes, React reconciles the new JSX output with the previous render.

### JSX

**Theory:** JSX is a syntax that lets us write UI-like code inside JavaScript.

**Project example:** the form, layout, button, and `InputBox` all use JSX.

**Interview answer style:** JSX makes React components expressive and readable.

### Functional components

**Theory:** functions that return UI.

**Project example:** both `App` and `InputBox` are functional components.

### Props vs state

**Theory:** state belongs to a component, props are passed into it.

**Project example:** `App` owns the state and passes values to `InputBox` through props.

### Controlled components

**Theory:** form inputs controlled by React state.

**Project example:** the amount input value comes from state, not from uncontrolled DOM memory.

### Lifting state up

**Theory:** moving shared state to a common parent.

**Project example:** `App` stores both amount and currency values so both input boxes stay in sync.

### Conditional rendering

**Theory:** showing or hiding UI based on conditions.

**Project example:** the right-side image is hidden on smaller screens with Tailwind classes.

### Keys in lists

**Theory:** keys help React identify list items.

**Project example:** `currencyOptions.map(...)` uses `key={currency}`.

**Interview answer style:** keys prevent unnecessary list reordering and help React update efficiently.

### Rendering optimization

**Theory:** reducing unnecessary renders.

**Project example:** the app is simple and already fast, so advanced memoization is not needed yet.

### Memoization

**Theory:** caching values or functions to avoid repeated work.

**Project note:** `useMemo` and `useCallback` are not used, because the current component tree is small.

### Lazy loading

**Theory:** loading components only when needed.

**Project note:** not used here, because there is no heavy route-based code splitting requirement.

---

## 8. API and Data Flow Section

### How API requests work in this app

The hook builds a URL based on the selected source currency. The request is sent to the currency API endpoint, which returns a JSON object containing exchange rates.

### Fetch flow

1. The component renders.
2. The custom hook receives the selected currency.
3. `useEffect` triggers a fetch.
4. The browser requests the data from the API.
5. The response is parsed with `.json()`.
6. The hook stores the relevant part of the response in state.
7. `App` receives the updated data and re-renders.

### Async rendering

The UI first renders with empty data and then updates after the API response arrives. This is normal async behavior. The options list is populated after the data arrives.

### Loading states

The current project does not show an explicit loading spinner. Until the API data arrives, the dropdown can be empty or incomplete.

### Error handling

The current code does not include a `.catch(...)` block or visible error UI. In a production app, this should be added so the user knows when the API fails.

### Response cycle

The response comes back, is converted into JSON, stored in state, and then React re-renders the component tree using the new values.

### Re-rendering after API response

When the hook updates its data state, `App` receives fresh props and recalculates the dropdown options. This is a clean example of data-driven UI.

---

## 9. File-by-File Explanation

### `src/main.jsx`

**Purpose:** app entry point.

**Imports:** React `StrictMode`, `createRoot`, global CSS, and `App`.

**Exports:** none.

**Flow:** attaches the app to the DOM and starts rendering.

**Dependency relationship:** every other UI file depends on this file indirectly because it starts the app.

### `src/App.jsx`

**Purpose:** main page, state owner, and business logic controller.

**Imports:** `useState`, `InputBox`, and `useCurrencyInfo`.

**Exports:** default `App` component.

**Logic:** manages amounts, currencies, conversion, and swap behavior.

**Flow:** receives data from the hook, passes props to children, and updates UI on user interaction.

### `src/components/Inputbox.jsx`

**Purpose:** reusable input-plus-dropdown UI block.

**Imports:** React.

**Exports:** default `InputBox` component.

**Logic:** renders a label, number input, and currency selector.

**Flow:** receives data and callbacks from `App`, then sends user changes back through props.

**Dependency relationship:** depends on parent props for all meaningful data.

### `src/hooks/useCurrencyinfo.js`

**Purpose:** custom hook for fetching live currency data.

**Imports:** `useState` and `useEffect`.

**Exports:** default hook function.

**Logic:** fetches API data and stores the result in internal state.

**Flow:** reacts to currency changes and returns a currency-rate object.

### `src/index.css`

**Purpose:** global stylesheet entry.

**Imports:** Tailwind CSS.

**Exports:** none.

**Logic:** brings Tailwind utilities into the app.

**Flow:** loaded once in `main.jsx` so all components can use Tailwind classes.

### `src/App.css`

**Purpose:** component-level CSS file placeholder.

**Imports:** Tailwind CSS.

**Exports:** none.

**Logic:** currently minimal and not driving the main design.

**Flow:** available if future custom CSS is needed.

### `package.json`

**Purpose:** project metadata, scripts, and dependency list.

**Key scripts:** `dev`, `build`, `lint`, `preview`.

**Why it matters:** tells Vite and Node how to run the app.

### `vite.config.js`

**Purpose:** Vite configuration.

**Imports:** React plugin and Tailwind plugin.

**Exports:** Vite config object.

**Why it matters:** enables the development experience and Tailwind integration.

### `eslint.config.js`

**Purpose:** code quality and linting rules.

**Why it matters:** catches mistakes early and keeps the code consistent.

### `README.md`

**Purpose:** short project overview.

**Why it matters:** gives a quick summary of the app and stack.

### `explaination.md`

**Purpose:** learning notes describing the custom hook and reusable component idea.

**Why it matters:** useful as a simple study guide, but this `summary.md` is the full project bible.

---

## 10. Flow Diagrams in Text

### Rendering flow

`npm run dev`
↓
`main.jsx`
↓
`createRoot()`
↓
`StrictMode`
↓
`App.jsx`
↓
`InputBox` components
↓
DOM update

### State flow

User types/selects
↓
`InputBox` callback fires
↓
`App` updates state
↓
React re-renders
↓
New values appear in UI

### API flow

`App` reads `from`
↓
`useCurrencyInfo(from)` runs
↓
`fetch()` API request
↓
JSON response
↓
Hook stores data
↓
`App` builds dropdown options
↓
User converts amount
↓
Target amount updates

### Hook flow

`App` renders
↓
`useState` creates local values
↓
`useCurrencyInfo` starts
↓
`useEffect` checks currency dependency
↓
API call begins
↓
Response is stored
↓
Component re-renders

---

## 11. Interview Preparation Section

### Top React interview questions from this project

- Why did you keep the state in `App` instead of inside `InputBox`?
- Why did you create a custom hook for API fetching?
- How does React know when to re-render this project?
- Why is `InputBox` reusable?
- What is the purpose of `StrictMode`?
- Why is `key` required in the currency dropdown map?
- Why is `useEffect` the right place for the fetch call?

### JavaScript interview questions

- How does destructuring help in the `InputBox` component?
- What is a closure in the `swap` and `convert` functions?
- What is the difference between a callback and a promise?
- How does `Object.keys()` help here?
- Why is the select list built from API data instead of hardcoded values?

### Scenario-based questions

- What happens if the user changes the source currency after typing an amount?
- What happens if the API response is delayed?
- What happens if the user clicks Swap before conversion?
- How would you prevent invalid amount input?
- How would you show a loading state while the API is fetching?

### Why did you use this instead of that?

- Why custom hook instead of logic in `App`? Because it keeps the component clean and reusable.
- Why Tailwind instead of a large CSS file? Because utility classes make the layout fast to build and easy to adjust.
- Why props instead of context? Because the data flow is simple and prop drilling is not a problem in this small app.
- Why fetch instead of a heavier data library? Because the project only needs one simple API request.

### Debugging questions

- Why might the API appear to run twice in development?
- Why is the second input disabled for amount changes?
- Why would the dropdown be empty if the API response has not arrived yet?
- Why can converting before data loads produce `undefined` values?

### Performance optimization questions

- Would you memoize the currency list here?
- Would `useCallback` or `useMemo` improve anything in this app today?
- How would you avoid unnecessary API calls?
- How would you cache previously fetched currency data?

### Explain this project in an interview

This is a React currency converter built with Vite and Tailwind CSS. The app starts in `main.jsx`, mounts `App`, fetches exchange-rate data through a custom hook, and uses reusable `InputBox` components for source and target currency controls. The state lives in the top component so the UI stays synchronized, and user actions like typing, swapping, and submitting the form all update the interface reactively.

### Challenges faced

- Keeping the two currency inputs in sync.
- Managing async API data before the UI is ready.
- Reusing the same input component for both source and target values.
- Understanding how to split UI logic from data fetching logic.

### What you learned

- How React renders from `main.jsx` into the DOM.
- How state changes trigger re-renders.
- How to create a custom hook.
- How to build controlled form components.
- How to convert API response objects into dropdown options.

### How would you scale this project

- Add loading and error states.
- Cache API responses to reduce repeated requests.
- Add search/filter support for currencies.
- Use `useMemo` and `useCallback` only if the component tree grows.
- Add context or a store if multiple distant components need conversion data.
- Add tests for conversion math and API handling.

---

## 12. Best Practices and Learnings

### Coding practices learned

- Keep state at the correct level.
- Reuse components instead of duplicating UI.
- Separate data-fetching logic from presentation logic.
- Use clear prop names so data flow is obvious.

### Folder structuring

- Put reusable UI in `components`.
- Put logic-heavy reusable hooks in `hooks`.
- Keep the main component focused on orchestration.

### Reusable component philosophy

`InputBox` is the same UI for both “From” and “To”. Only the props change. That is a good React pattern because it reduces repetition and keeps the design consistent.

### Hook rules

- Call hooks only at the top level.
- Call hooks only inside React functions or custom hooks.
- Keep effect dependencies intentional.

### Optimization learnings

- Do not add `useMemo` and `useCallback` too early.
- Optimize only when there is a real render or computation problem.
- Keep API logic inside hooks so the UI stays readable.

### Mistakes avoided

- Avoiding direct DOM manipulation.
- Avoiding duplicated conversion UI.
- Avoiding hardcoded currency dropdown values.
- Avoiding network logic mixed into the JSX body.

### Debugging strategies

- Log the fetched data.
- Check whether the hook dependency is correct.
- Verify whether the currency key exists in the response.
- Confirm that state values are updated before conversion.

---

## 13. Final Learning Story

If you explain the project as a story, it sounds like this:

The app starts in `main.jsx`, where React attaches `App` to the page. `App` holds the conversion state and asks the custom hook for live exchange data. The hook fetches currency rates when the selected source currency changes. Then `App` turns that data into dropdown options and passes everything into reusable `InputBox` components. The user types an amount, chooses currencies, and clicks Convert. React updates the state, re-renders the UI, and displays the converted value. If the user wants to reverse the conversion, the Swap button switches the currency direction instantly. This is the full loop of the project: render, fetch, interact, update, and re-render.

That is the core React lesson hidden inside this app: data flows down as props, events flow back up through callbacks, and state changes drive the entire UI.
