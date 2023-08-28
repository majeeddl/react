import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Formis React
        </a>
        <Link to="/link1">Scaling up with reducer and context </Link>
      </nav>

      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
