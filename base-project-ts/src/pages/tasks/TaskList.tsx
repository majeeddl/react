import { useState } from "react";
import { useTasks, useTasksDispatch } from "./TasksContext";

export default function TasksList() {
  const tasks = useTasks();

  return (
    <ul>
      {tasks?.map((task: any) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

const Task = ({ task }: any) => {
  const [isEditing, setEditing] = useState(false);
  const dispatch: any = useTasksDispatch();

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            if (task) {
              dispatch({
                type: "changed",
                payload: {
                  id: task.id,
                  text: e.target.value,
                },
              });
            }
          }}
        />
        <button onClick={() => setEditing(false)}>Done</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span>{task.text}</span>
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          if (task) {
            dispatch({
              type: "changed",
              payload: {
                id: task.id,
                text: task.text,
                done: e.target.checked,
              },
            });
          }
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          if (task) {
            dispatch({
              type: "deleted",
              payload: {
                id: task.id,
              },
            });
          }
        }}
      >
        Delete
      </button>
    </label>
  );
};
