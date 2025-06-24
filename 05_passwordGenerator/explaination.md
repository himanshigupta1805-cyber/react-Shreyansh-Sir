# What is this project for??
This project helps us generate a random password and can also include numbers and characters in it on demand.


# What have we done?

### useState
Firstly we used useState to change the length and true false value on the UI.
Declares a state variable.

length is the value (password length here), and setLength is the function to change it.

Used for:

length – password length (slider input)

numberAllowed – toggle numbers in password

charAllowed – toggle special characters

password – the generated password

### useCallback
Used useCallback() which take two parameters a function and dependencies(in the form of array)

useCallback is a React Hook that lets you cache a function definition between re-renders.Basically, returns a memoized version of a function.

const cachedFn = useCallback(fn, dependencies) 
During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.

Like in our case we want password to re-render itself everytime we choose to insert number or character or length.
For that purpose we always use callback hook 

### useEffect : 
Runs side effects (code that should happen after render).

Here it's used to auto-generate a new password when:

Length is changed

Number/special character toggles change

### useRef :
We use useRef to pass the ref like here we want to copy the password to clipboard it can definitely be achieved without using useCallback() but we chose these hooks because first one to optimize and useRef one to link copy with password as they are both separate divs and cannot be linked without useRef.

Also useRef is used to improve our UI as now selected portion is highlighted on UI giving use satisfaction that text is selected.

useRef() in React:
Returns a mutable object: { current: value }

Think of it like a box you can store a value in.

It doesn’t cause a re-render when the value changes.

Often used to:

Access DOM elements (like <input> or <canvas>)

Hold mutable values across renders without triggering re-renders

Mimic instance variables in functional components


(Refer to code for depth analysis of syntax and logic.
)

In useCallback jo array dia h wo optimization ke liye h mtlb jis jispe dependencies h jisko alter krne pr re-render hoga usko kaise bhi optimize krdo

In useEffect we mean inko change krne pr naya generate password display krdo

Alsp setPassword is just passed to optimize that code its not compulsory to include it




