import React from "react";

import ReactDOM from "react-dom/client";
import { GlobalContextProvider } from "context";

import { App } from "./App";

import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
);
