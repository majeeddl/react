import { useState } from 'react'
import { Route, Link, Routes } from "react-router-dom"

import { Navbar, Nav, Container } from "react-bootstrap"
import './App.css'
import Home from './views/Home'
import Basic from './views/Basic'
import ColumnResizing from './views/ColumnResizing'
import ColumnVisibility from './views/ColumnVisibility'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>Home</Nav.Link>
              <Nav.Link to="/basic" as={Link}>Basic</Nav.Link>
              <Nav.Link to="/column-resizing" as={Link}>Column Resizing</Nav.Link>
              <Nav.Link to="/column-visibility" as={Link}>Column Visibility</Nav.Link>
              <Nav.Link to="/column-sorting" as={Link}>Column Sorting</Nav.Link>
              <Nav.Link to="/pagination" as={Link}>Pagination</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Home></Home>} ></Route>
          <Route path="/basic" element={<Basic></Basic>} ></Route>
          <Route path="/column-resizing" element={<ColumnResizing></ColumnResizing>} ></Route>
          <Route path="/column-visibility" element={<ColumnVisibility></ColumnVisibility>} ></Route>

        </Routes>
      </Container>
    </div>
  )
}

export default App
