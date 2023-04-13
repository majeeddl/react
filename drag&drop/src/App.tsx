import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import DragDropBasic from "./pages/DragDropBasic";
import DragDropOverlay from "./pages/DragDropOverlay";

function App() {
  return (
    <div className="App">
      <DragDropBasic></DragDropBasic>

      <DragDropOverlay></DragDropOverlay>
    </div>
  );
}

export default App;
