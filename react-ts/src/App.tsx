import React from "react";

import {
  Route,
  Routes,
  // Link
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = React.lazy(() => import("./Views/Home"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="*" element={<Home></Home>} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
