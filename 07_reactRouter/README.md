Here’s a custom `README.md` file that documents everything you’ve done so far in your React project — perfect for revision or showcasing your work:

---

```markdown
# 🌐 React Router Revision Project

This is a revision project built with **React**, **Vite**, and **React Router v6+**. It demonstrates routing, dynamic parameters with `useParams`, layout composition with `Outlet`, and dev environment setup for GitHub Dev URLs and Vite.

---

## 📁 Project Structure

```

src/

├── components/

│   ├── Header/

│   │   └── Header.jsx

│   ├── Footer/

│   │   └── Footer.jsx

│   ├── Home/

│   │   └── Home.jsx

│   ├── About/

│   │   └── About.jsx

│   ├── Contact/

│   │   └── Contact.jsx

│   └── User/

│       └── User.jsx

├── Layout.jsx

├── main.jsx (or index.jsx)

└── index.css

````

---

## 🚀 What I Did

### ✅ 1. **Set Up Routing Using React Router**

- Installed `react-router-dom`
- Created routes using `createBrowserRouter` and `createRoutesFromElements`
- Defined routes for:
  - `/` (Home page using index route)
  - `/home` (Home page)
  - `/about` (About page)
  - `/contact` (Contact page)
  - `/user/:userId` (Dynamic User page)

### ✅ 2. **Created Layout with Shared Header & Footer**

- Used `Layout.jsx` to wrap `Header`, `Footer`, and `<Outlet />`
- `Outlet` renders child routes between header and footer

### ✅ 3. **Handled Dynamic Routing**

- Used `useParams()` inside `User.jsx` to extract and display dynamic userId from the URL
- Example: `/user/123` shows `User: 123`

### ✅ 4. **Fixed 404 on Refresh (Manual Dynamic Route Access)**

- Encountered 404 error on refreshing `/user/123`
- Fixed this by editing `vite.config.js` to include:

```js
server: {
  historyApiFallback: true
}
````

This tells Vite to fallback to `index.html` for unknown routes (SPA behavior).

---

## 🔁 How Routing Works

| URL Path        | Component Rendered |
| --------------- | ------------------ |
| `/`             | Home (index route) |
| `/home`         | Home               |
| `/about`        | About              |
| `/contact`      | Contact            |
| `/user/:userId` | User (Dynamic)     |

---

## 🧪 Dynamic Route Example

```jsx
// User.jsx
import { useParams } from 'react-router-dom'

export default function User() {
  const { userId } = useParams()
  return <div>User: {userId}</div>
}
```

Accessing `/user/shreyansh` → Renders: `User: shreyansh`

---

## ⚙️ Vite Configuration (`vite.config.js`)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true // ✅ Required for React Router dynamic routes
  }
})
```

---

## 💡 Tips

* Use `index` inside the parent route to make `/` route show Home
* Use `NavLink` instead of `Link` for active styling
* GitHub Pages require `HashRouter` — not needed here since you're using GitHub Dev or Vite

---

## 🧑‍💻 Technologies Used

* React
* React Router DOM v6+
* Vite
* Tailwind CSS (optional, if included)
* GitHub Codespace / GitHub Dev Server
---
---
## 📝 Author

Shreyansh Jain

---

