import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState= {
    todos : [
        {
         id : 1,
         text: "Todo goes here"}
    ]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action)=> {
            // create a todo first
            const todo = {
                id : nanoid(),         // Generate unique ID
                text : action.payload  // Get the todo text from action.action ke andr payload property will help us add new text in todo. payload is object itself toh uski bhi kaafi saari properties hain
            }
            state.todos.push(todo)  //update the state now
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id != action.payload)
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo )
            // This keeps other fields (like id, completed) unchanged and only updates text.
        },
    }
})

//Now dont forget to import these reducers in store.js file

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
//These individual functionalities must be exported as they will help us in our components

export default todoSlice.reducer
// saare reducer must be exported to store