import { useRef } from "react";
import "./App.css";
import { setState, useStore } from "./store/store";
import ContentOne from "./views/ContentOne";
import ContentTwo from "./views/ContentTwo";

function App() {
  // const getVotes = useStore((state) => state.votes);
  // const fetch = useStore((state) => state.fetch);
  // const addVotes = useStore((state) => state.addVotes);

  // const fruits = useStore((state) => state.fruits);
  // const addFruits = useStore((state) => state.addFruits);
  // const inputRef = useRef();
  // const addFruit = () => {
  //   addFruits(inputRef.current.value);
  //   inputRef.current.value = "";
  // };

  return (
    <div className="App">
      {/* <div> votes is : {getVotes}</div>

      <button onClick={addVotes}> increase vote </button>

      <div> votes is : {getVotes.length}</div>
      <button
        onClick={() => {
          fetch();
        }}
      >
        Fetch votes
      </button>

      <input ref={inputRef} />
      <button onClick={addFruit}>Add a fruit</button>
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))} */}

      <ContentOne></ContentOne>
      <ContentTwo></ContentTwo>
    </div>
  );
}

export default App;
