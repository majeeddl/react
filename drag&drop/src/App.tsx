import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <DndContext>
        <Draggable>
          <div>draggable</div>
        </Draggable>
        <Droppable />
      </DndContext>
    </div>
  );
}

export default App;
