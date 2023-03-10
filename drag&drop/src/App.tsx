import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

function App() {

  const  [isDropped, setIsDropped] = useState(false)

  const draggableMarkup  =  (
    <Draggable> Drag Me</Draggable>
  )

  return (
    <div className="App">
      <DndContext  onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>
          {isDropped ? draggableMarkup : "Drop Here"} 
        </Droppable>
      </DndContext>
    </div>
  );


  function handleDragEnd(event: any) {
     if (event.over && event.over.id === "droppable") {
       setIsDropped(true);
     }
  }
}

export default App;
