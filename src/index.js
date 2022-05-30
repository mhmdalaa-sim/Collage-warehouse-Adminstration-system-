import React from "react";
import react from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

reactDom.render(
  <React.StrictMode>
    <App></App>
    <div class="bgImage"></div>
  </React.StrictMode>,

  document.getElementById("root")
);
