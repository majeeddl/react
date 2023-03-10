import { useDroppable } from "@dnd-kit/core";
import React from "react";
import { CSS } from "@dnd-kit/utilities";

const Droppable = (props: any) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = {
    backgroundColor: isOver ? "green" : undefined,
    border : '2px solid black',
    width: '100px',
    height: '100px',
  };

  return (
    <div ref={setNodeRef} style={style}>
        {isOver ? 'over' : 'not over'}
      {props.children}
    </div>
  );
};

export default Droppable;
