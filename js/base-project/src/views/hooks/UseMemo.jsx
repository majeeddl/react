import React from 'react'
import PropTypes from 'prop-types'
import AceEditor from "react-ace";

const text = `
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
`

function UseMemo(props) {
  return (
    <>
      <div>
        The React useMemo Hook returns a memoized value.
        <br />
        Think of memoization as caching a value so that it does not need to be recalculated.
        <br />
        The useMemo Hook only runs when one of its dependencies update.
        <br />
        This can improve performance.
      </div>
      <div className='mt-2'>
         It is a React hook that is used for caching CPU-Expensive functions.
         <br />
        Sometimes in a React app, a CPU-Expensive function gets called repeatedly due to re-renders of a component, which can lead to slow rendering.
        useMemo( ) hook can be used to cache such functions. By using useMemo( ), the CPU-Expensive function gets called only when it is needed.

      </div>

      <div className="mt-2 pb-10">
        <AceEditor
          mode="javascript"
          theme="monokai"
          name="UNIQUE_ID_OF_DIV"
          height="650px"
          value={text}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    </>
  )
}

UseMemo.propTypes = {}

export default UseMemo
