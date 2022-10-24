import { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./App.css";

import HomeView from "./views/home.view";
import SuperHeroview from "./views/superHero.view";
import RqSuperHeroesView from "./views/RqSuperHeroes.view";
import RqSuperHeroView from "./views/RqSuperHero.view";

function App() {
  const [count, setCount] = useState(0);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="/" as={Link}>
                  Home
                </Nav.Link>
                <Nav.Link to="/super-heroes" as={Link}>
                  super-heroes
                </Nav.Link>
                <Nav.Link to="/rq-super-heroes" as={Link}>
                  rq-super-heroes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" exac element={<HomeView></HomeView>}></Route>
            <Route
              path="/super-heroes"
              element={<SuperHeroview></SuperHeroview>}
            ></Route>
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RqSuperHeroView></RqSuperHeroView>}
            ></Route>
            <Route
              path="/rq-super-heroes"
              element={<RqSuperHeroesView></RqSuperHeroesView>}
            ></Route>
          </Routes>
        </Container>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
