import React from 'react'
import PropTypes from 'prop-types'
import AceEditor from "react-ace";

const text = `
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
`

const text2 = `import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);`

function UseCallback(props) {
    return (
        <>
            <div>
                The useCallback and useMemo Hooks are similar.
                The main difference is that useMemo returns a memorized value and useCallback returns a memorized function.
            </div>

            <div className='pb-10'>
                index.js
                <br />
                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    name="UNIQUE_ID_OF_DIV"
                    height="400px"
                    value={text}
                    editorProps={{ $blockScrolling: true }}
                />
                <br />
                Todo.js
                <br />
                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    name="UNIQUE_ID_OF_DIV"
                    height="300px"
                    value={text2}
                    editorProps={{ $blockScrolling: true }}
                />
            </div>
        </>
    )
}

UseCallback.propTypes = {}

export default UseCallback
