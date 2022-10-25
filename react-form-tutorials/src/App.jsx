import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./App.css";
import Home from "./views/Home";
import Validation from "./views/Validation";
import Integrating from "./views/Integrating";
import ErrorHandling from "./views/ErrorHandling";

import Integration from "./views/Integration";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="/" as={Link}>
                  Home
                </Nav.Link>
                <Nav.Link to="/validation" as={Link}>
                  Validation
                </Nav.Link>
                <Nav.Link to="/integrating" as={Link}>
                  Integrating
                </Nav.Link>
                <Nav.Link to="/handling-error" as={Link}>
                  Handling Error
                </Nav.Link>
                <NavDropdown title="Integration" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/integration/bootstrap">
                    Integration With Boostrap
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/integration/antd">
                    Integration With Antd
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/integration/mantine">
                    Integration With Mantine
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="p-10">
          <Routes>
            <Route path="/" exac element={<Home></Home>}></Route>
            <Route
              path="/validation"
              element={<Validation></Validation>}
            ></Route>
            <Route
              path="/integrating"
              element={<Integrating></Integrating>}
            ></Route>
            <Route
              path="/handling-error"
              element={<ErrorHandling></ErrorHandling>}
            ></Route>
            <Route
              path="/handling-error"
              element={<ErrorHandling></ErrorHandling>}
            ></Route>
            <Route
              path="/integration/*"
              element={<Integration></Integration>}
            ></Route>
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
