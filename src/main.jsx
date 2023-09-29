import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom";
import "../static/frontend/style.css";
import "../static/frontend/sidebar.css";
import "../static/frontend/fonts.css";
import "../static/frontend/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
