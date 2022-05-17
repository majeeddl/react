import { useState } from 'react'
import { Routes, Link, Route } from "react-router-dom"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import './App.css'

import Home from './views/Home'
import Hooks from './views/Hooks'

const App = () => {

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Functional-JS-Vite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>Home</Nav.Link>
              <Nav.Link to="/hooks" as={Link}>Hooks</Nav.Link>
              <Nav.Link to="/redux" as={Link}>Redux</Nav.Link>
              <Nav.Link to="/storybook" as={Link}>Story Book</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route exac path="/" element={<Home></Home>}></Route>
          <Route path="hooks" element={<Hooks></Hooks>}> </Route>
        </Routes>
      </Container>
    </div>
  )
}

export default App
