import { useState } from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { Routes , Route, Link} from 'react-router-dom'
import './App.css'
import Basic from './views/Basic'
import Home from './views/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>
                Home
              </Nav.Link>
              <Nav.Link to="/basic" as={Link}>
                Basic
              </Nav.Link>
              <Nav.Link to="/dashboard" as={Link}>
                Dashboard
              </Nav.Link>
              <Nav.Link to="/handling-error" as={Link}>
                Handling Error
              </Nav.Link>
              <Nav.Link to="/integration-antd" as={Link}>
                Integration Antd
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="p-10">
        <Routes>
          <Route path="/" exac element={<Home></Home>}></Route>
          <Route path="/basic" element={<Basic></Basic>}></Route>
        
        </Routes>
      </Container>
    </div>
  );
}

export default App
