import { Routes, Link, Route } from "react-router-dom";
import "./App.css";

import { Nav } from "react-bootstrap";
import Home from "./views/Home";
import Test from "./views/Test";
import UseEffect from "./views/UseEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">React Hooks</header>
      <div>
        <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link to="/" as={Link}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1" to="/use_effect" as={Link}>
              Use Effect
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1" to="/test" as={Link}>
              Test
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
          <Routes>
            <Route exac path="/" element={<Home />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/use_effect" element={<UseEffect />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
