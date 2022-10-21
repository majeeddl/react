import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mantine/core";
import "./App.css";
import HeaderAction, { HeaderActionProps } from "./components/HeaderAction";
import Home from "./views/Home";

function App() {
  const _links: any = {
    links: [
      {
        link: "/",
        label: "Home",
      },
      {
        link: "#1",
        label: "Learn",
        links: [
          {
            link: "/docs",
            label: "Documentation",
          },
          {
            link: "/resources",
            label: "Resources",
          },
          {
            link: "/community",
            label: "Community",
          },
          {
            link: "/blog",
            label: "Blog",
          },
        ],
      },
      {
        link: "/about",
        label: "About",
      },
      {
        link: "/pricing",
        label: "Pricing",
      },
      {
        link: "#2",
        label: "Support",
        links: [
          {
            link: "/faq",
            label: "FAQ",
          },
          {
            link: "/demo",
            label: "Book a demo",
          },
          {
            link: "/forums",
            label: "Forums",
          },
        ],
      },
    ],
  };

  return (
    <div className="App">
      <HeaderAction {..._links} />
      <Container className="p-10">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
