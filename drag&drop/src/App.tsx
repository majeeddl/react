import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

function App() {
  const containers = ["A", "B", "C"];
  const [isDropped, setIsDropped] = useState(false);
  const [parent, setParent] = useState(null);

  const draggableMarkup = <Draggable id="draggable"> Drag Me</Draggable>;

  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}

        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : "Drop Here"}
          </Droppable>
        ))}
      </DndContext>
    </div>
  );

  function handleDragEnd(event: any) {
    //  if (event.over && event.over.id === "droppable") {
    //    setIsDropped(true);
    //  }

    const { over } = event;

    setParent(over ? over.id : null);
  }
}

export default App;
