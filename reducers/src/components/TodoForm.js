import React, { useState, useReducer } from "react"
import TodoList from "./TodoList"
import { initialState, todoReducer } from "../reducers/Reducer"

const TodoForm = (props) => {
    const [input, setInput] = useState({ todo: "" })
    const [state, dispatch] = useReducer( todoReducer, initialState  )

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value
        setInput(
            { todo: value }
        )
        console.log(input)
    }

    

    const addTodo = e => {
        e.preventDefault();
        dispatch({ type: "CREATE_TODO", payload: input.todo });
        setInput({ todo: "" })
        
    };
console.log("after", state)

    return (
        <div>
            <div className="leftForm">
                <h1>Todo-List</h1>
                <form onSubmit={addTodo}>
                    <input
                        type="text"
                        name="text"
                        value={input.todo}
                        onChange={handleChange}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}

export default TodoForm;