import "./App.css";
import { setState, useStore } from "./store/store";

function App() {
  const getVotes = useStore((state) => state.votes);
  const fetch = useStore((state) => state.fetch);
  const addVotes = useStore((state) => state.addVotes);

  return (
    <div className="App">
      <div> votes is : {getVotes}</div>

      <button onClick={addVotes}> increase vote </button>

      <div> votes is : {getVotes.length}</div>
      <button
        onClick={() => {
          fetch();
        }}
      >
        Fetch votes
      </button>
    </div>
  );
}

export default App;
