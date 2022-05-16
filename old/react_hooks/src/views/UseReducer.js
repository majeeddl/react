import React, { useReducer } from "react";

UseReducerView.propTypes = {};

/*
React useReducer Hook

    The useReducer Hook is similar to the useState Hook.
    It allows for custom state logic.
    If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

SYNTAX
    useReducer(<reducer>, <initialState>)

The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
The useReducer Hook returns the current stateand a dispatchmethod.
*/

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    default:
      return state;
  }
};

function UseReducerView(props) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <div>
      <div>Use Reducer</div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
            <span className="ml-10">
              state : {todo.complete ? "done" : "----"}
            </span>
            
          </div>
        );
      })}
    </div>
  );
}

export default UseReducerView;
