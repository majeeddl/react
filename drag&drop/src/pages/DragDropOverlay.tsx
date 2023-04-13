import React, { useState } from "react";

import { DndContext, DragOverlay, useDraggable } from "@dnd-kit/core";

const Draggable = (props: any) => {
  const Element = props.element || "div";
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
  });

  return (
    <Element ref={setNodeRef} {...listeners} {...attributes}>
      {props.children}
    </Element>
  );
};

const Item = () => {
  return <div className="item">ITEMM</div>;
};

const DragDropOverlay = () => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Draggable id="my-draggable-element">
        <Item />
      </Draggable>
      <Draggable id="my-2">
        <Item />
      </Draggable>

      <DragOverlay dropAnimation={null}>
        {isDragging ? <div>overlay</div> : null}
      </DragOverlay>
    </DndContext>
  );

  function handleDragStart(event:any) {
    console.log(event);
    setIsDragging(true);
  }

  function handleDragEnd() {
    setIsDragging(false);
  }
};

export default DragDropOverlay;
