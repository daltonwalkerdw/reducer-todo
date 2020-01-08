import React, { useState, useReducer } from "react"

import { initialState, todoReducer } from "../reducers/Reducer"
import TodoForm from "./TodoForm"


const TodoList = (props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    console.log(state)



    return (
        <div>
            
        <div className="listRight">

                {state.map((td) => {
                    console.log(td, "map")
                    return (
                        <div key={td.id}>
                            <i onClick={() => dispatch({ type: 'Completed' })}>{td.todo}</i>
                        </div>
                    )

                })}

            </div>
        </div>
    )


}

export default TodoList;