import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Framework7 from "framework7/lite";
import Framework7React from "framework7-react";
import Router from "./router";

// Init plugin
Framework7.use(Framework7React);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
