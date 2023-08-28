import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/link1",
        element: <div>Link 1</div>,
      },
    ],
  },
]);

export default router;
