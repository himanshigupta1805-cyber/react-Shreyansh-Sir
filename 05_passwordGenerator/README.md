# 🔐 React Password Generator

A modern, customizable password generator built with **React** and **Tailwind CSS**.

---

## 🚀 Features

- Generate random passwords with:
  - ✅ Custom length (6 to 100)
  - ✅ Option to include numbers (0–9)
  - ✅ Option to include special characters (!@#...)
  - ✅ Option to copy password to ClipBoard
- 🎨 Clean, responsive UI with Tailwind CSS
- 🧠 Auto-generates password on any setting change
- 📋 Copy-to-clipboard button (UI ready)

---

## 🧰 Built With

- ⚛️ **React** (Functional Components + Hooks)
- 🎨 **Tailwind CSS**
- 🧩 **React Hooks used**:
  - `useState` – for managing app state
  - `useCallback` – memoizing the password generation function
  - `useEffect` – reacting to setting changes
  - `useRef` - Used to access the `<input>` DOM element for copy-to-clipboard
---

## 📦 Installation

```bash
git clone https://github.com/yourusername/react-password-generator.git
cd react-password-generator
npm install
npm run dev  # for Vite
# or
npm start    # for Create React App
