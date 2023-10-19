import React from "react";
import ReactDOM from "react-dom/client";
import AppReact from "./App.tsx";
import "./index.css";

// @ts-expect-error asd
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppReact />
  </React.StrictMode>
);
