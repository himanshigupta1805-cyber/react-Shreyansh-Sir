// ❌ Wrong Way
<button onClick={setColor("red")}>Red</button>

/*
Problem:
onClick expects a FUNCTION reference, but here setColor("red")
gets executed immediately during rendering.

Meaning:
1. Component renders
2. setColor("red") runs instantly
3. State changes immediately
4. Button click is no longer controlling the action

So React needs a FUNCTION that it can call LATER
when the button is actually clicked.
*/


// ✅ Correct Way
<button onClick={() => setColor("red")}>Red</button>

/*
Why this works:

() => setColor("red")

This is an anonymous callback function.

Now React receives a FUNCTION reference instead of
the result of setColor().

Flow:
1. Component renders
2. React stores this function
3. User clicks button
4. React executes the function
5. setColor("red") runs at click time

Important Difference:

onClick={setColor("red")}
➡ executes immediately

onClick={() => setColor("red")}
➡ executes only on click
*/