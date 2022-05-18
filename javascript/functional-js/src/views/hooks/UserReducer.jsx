
import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import AceEditor from "react-ace";


const initailTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false
    }
]

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
}

function UserReducer(props) {

    const [todos, dispatch] = useReducer(reducer, initailTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id })
    }

    return (
        <>

            <div>
                The useReducer Hook is similar to the useState Hook.
                <br></br>
                It allows for custom state logic.
                <br></br>
                If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
            </div>

            <div className='mt-2'>
                {
                    todos.map((todo) => (
                        <div div key={todo.id} >
                            <label>
                                <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo)} />
                                {todo.title}
                                - {todo.complete ? 'complete' : 'not complete'}
                            </label>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

UserReducer.propTypes = {}

export default UserReducer
