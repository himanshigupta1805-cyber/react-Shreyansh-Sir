# Dependencies we Installed
1. `REDUX JS TOOLKIT` - Store and manage data like user info, theme, auth state, form inputs, etc., across multiple components.

2. `REACT-REDUX` - Read or update global state from any component using useSelector() and useDispatch().

3. `REACT-ROUTER-DOM` - Handles routing and navigation in single-page React apps.Switch between views like Home, Login, Dashboard, Editor.

4. `APPWRITE` - Sign in users, save blog posts, upload images, store data in collections.
Backend-as-a-Service (BaaS) platform to handle:

     >Authentication

     >Database

     >Storage

     >File uploads

     >Cloud functions, etc.

You don’t need to build your own backend.Real-time database updates, secure auth, file storage

5. `TINYMCE-REACT (for editor)` - Provides a full-featured WYSIWYG rich text editor inside your React app.

6. `HTML-REACT-PARSER` - Converts HTML strings into React elements safely.TinyMCE gives you content as a string with HTML tags.You can’t render raw HTML using JSX safely—this parser converts it to valid JSX nodes.

7. `REACT-HOOK-FORM`- Efficient and flexible form validation & management in React. 


## Environment Variables
When we use react all the data goes into the browser from js and ofc there are ways to extract that data from browser so our secrets and unique ids can be made public this way.So we make few variables as system variables.

### Purpose:

Protect sensitive information such as API keys, secret tokens, or unique IDs from being exposed in the browser.

### Why Use It:

React apps are bundled and run in the browser, making all hardcoded values visible in developer tools

To prevent accidental exposure of secrets, use environment variables with a .env file

### How It Works:

IF USING REACT APP
1. Define variables starting with REACT_APP_ in a .env file (e.g., `REACT_APP_API_KEY=yourkey`)

2. Access them in code using `process.env.REACT_APP_API_KEY`

3. Ensure .env is listed in .gitignore to avoid pushing to version control.

BUT OUR PROJECT IS IN VITE 
1. Define variables starting with VITE_ in a .env file (e.g., `VITE_API_KEY=yourkey`)

2. Access them in code using `import.meta.env.VITE_API_KEY`


#### Why We Create .env.sample File

**Purpose**:

To provide a public template of the required environment variables without revealing actual secret values.

**How It Works:**

You create a .env.sample file and include only variable names and placeholders, not actual secrets

Developers copy it as .env and fill in their own actual values.

NOTE : Always create .env file in root folder.

### Config file
To centralize all configuration and secret values into a single JavaScript module, especially after being read from environment variables.

Why Use It:

Keeps your codebase clean and consistent

Avoids multiple uses of process.env across the app

Makes it easier to test, mock, and switch environments (e.g., dev, prod)

How It Works:

Create a conf.js or config.js file

Import values from process.env and export them as named constants or a single object

Use these constants throughout your application