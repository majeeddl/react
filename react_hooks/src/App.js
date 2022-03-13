import { Routes, Link, Route } from "react-router-dom";
import { useState, createContext } from "react";


import "./App.css";

import { Nav } from "react-bootstrap";
import Home from "./views/Home";
import Test from "./views/Test";
import UseEffect from "./views/UseEffect";
import UseContext from "./views/UseContext";
import UseRef from "./views/UseRef";
import UseReducerView from "./views/UseReducer";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Majeed d");

  return (
    <UserContext.Provider value={user}>
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
              <Nav.Link eventKey="link-1" to="/use_context" as={Link}>
                Use Context
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1" to="/use_ref" as={Link}>
                Use Ref
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1" to="/use_reducer" as={Link}>
                Use Reducer
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
              <Route path="/use_context" element={<UseContext />}></Route>
              <Route path="/use_ref" element={<UseRef />}></Route>
              <Route path="/use_reducer" element={<UseReducerView />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
