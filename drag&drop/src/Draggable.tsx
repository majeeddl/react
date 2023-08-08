import { useDraggable } from "@dnd-kit/core";
import React from "react";
import { CSS } from "@dnd-kit/utilities";

const Draggable = (props: any) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    // <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
    //   {props.children}
    // </button>
    <div ref={setNodeRef}>
      <button {...listeners} {...attributes}>
        Drag handle 1
      </button>
      <br />
      /* Some other content that does not activate dragging */
      <button {...listeners} {...attributes}>
        Drag handle 2
      </button>
    </div>
  );
};

export default Draggable;
