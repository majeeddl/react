import { useState } from 'react'
import { Link, Routes, Route } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"
import './App.css'
import Home from './views/Home'
import Validation from './views/Validation'
import Integrating from './views/Integrating'
import ErrorHandling from './views/ErrorHandling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="/" as={Link}>Home</Nav.Link>
                <Nav.Link to="/validation" as={Link}>Validation</Nav.Link>
                <Nav.Link to="/integrating" as={Link}>Integrating</Nav.Link>
                <Nav.Link to="/handling-error" as={Link}>Handling Error</Nav.Link>
                <Nav.Link to="/integration-antd" as={Link}>Integration Antd</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className='p-10'>
          <Routes>
            <Route path="/" exac element={<Home></Home>} ></Route>
            <Route path="/validation" element={<Validation></Validation>} ></Route>
            <Route path="/integrating" element={<Integrating></Integrating>} ></Route>
            <Route path="/handling-error" element={<ErrorHandling></ErrorHandling>} ></Route>
            {/* <Route path="/super-heroes" element={<SuperHeroview></SuperHeroview>} ></Route>
            <Route path="/rq-super-heroes" element={<RqSuperHeroview></RqSuperHeroview>} ></Route> */}
          </Routes>
        </Container>
      </div>
    </div>
  )
}

export default App
