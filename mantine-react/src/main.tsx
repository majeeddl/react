import { MantineProvider } from "@mantine/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider
    theme={{
      fontFamily: "Open Sans",
      // spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>
);
