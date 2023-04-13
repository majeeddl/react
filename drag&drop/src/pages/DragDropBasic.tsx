import React, { useState } from "react";
import Draggable from "../Draggable";
import { DndContext } from "@dnd-kit/core";
import Droppable from "../Droppable";

const DragDropBasic = () => {
  const containers = ["A", "B", "C"];
  const [isDropped, setIsDropped] = useState(false);
  const [parent, setParent] = useState(null);

  const draggableMarkup = <Draggable id="draggable"> Drag Me</Draggable>;

  return (
    <div>
      Drag&DropBasic
      <div className="!border border-slate-800">
        <DndContext onDragEnd={handleDragEnd}>
          {parent === null ? draggableMarkup : null}

          {containers.map((id) => (
            <Droppable key={id} id={id}>
              {parent === id ? draggableMarkup : "Drop Here"}
            </Droppable>
          ))}
        </DndContext>
      </div>
    </div>
  );


  function handleDragEnd(event: any) {
    //  if (event.over && event.over.id === "droppable") {
    //    setIsDropped(true);
    //  }

    const { over } = event;

    setParent(over ? over.id : null);
  }
};

export default DragDropBasic;
