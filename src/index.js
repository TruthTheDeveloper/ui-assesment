import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const el = document.getElementById("app");

ReactDOM.createRoot(el).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
