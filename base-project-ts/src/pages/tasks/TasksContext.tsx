import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext<
  | {
      id: number;
      text: string;
      done: boolean;
    }[]
  | null
>(null);

type TasksDispatchAction = {
  type: "changed" | "deleted" | "added";
  payload: any;
};

const TasksDispatchContext =
  createContext<React.Dispatch<TasksDispatchAction> | null>(null);

export function TasksProvider({ children }: any) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function taskReducer(tasks: any, action: TasksDispatchAction) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.payload.id,
          text: action.payload.text,
        },
      ];
    case "changed":
      return tasks.map((task: any) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    case "deleted":
      return tasks.filter((task: any) => task.id !== action.payload.id);
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const initialTasks = [
  {
    id: 1,
    text: "Task 1",
    done: true,
  },
  {
    id: 2,
    text: "Task 2",
    done: false,
  },
];
