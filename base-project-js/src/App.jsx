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
import Redux from './views/Redux';
import Graphql from './views/Graphql';
import Draggable from './views/Draggable';
import ReactQuery from './views/ReactQuery';
import ReactForm from './views/ReactForm';

const App = () => {

  return (
    <div className="App text-sm">

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Functional-JS-Vite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>Home</Nav.Link>
              <Nav.Link to="/hooks" as={Link}>Hooks</Nav.Link>
              <Nav.Link to="/redux" as={Link}>Redux</Nav.Link>
              <Nav.Link to="/react-query" as={Link}>React Query</Nav.Link>
              <Nav.Link to="/react-form" as={Link}>React Form</Nav.Link>
              <Nav.Link to="/graphql" as={Link}>Graphql</Nav.Link>
              <Nav.Link to="/storybook" as={Link}>Story Book</Nav.Link>
              <Nav.Link to="/draggable" as={Link}>Draggable</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route exac path="/" element={<Home></Home>}></Route>
          <Route path="hooks" element={<Hooks></Hooks>}> </Route>
          <Route path="redux" element={<Redux></Redux>}> </Route>
          <Route path="react-query" element={<ReactQuery></ReactQuery>}> </Route>
          <Route path="react-form" element={<ReactForm></ReactForm>}> </Route>
          <Route path="grphql" element={<Graphql></Graphql>}></Route>
          <Route path="draggable" element={<Draggable></Draggable>}></Route>
        </Routes>
      </Container>
    </div>
  )
}

export default App
