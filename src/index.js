import "bulma/css/bulma.css";
import "./styles.css";
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import { store } from "./Store/index";

const el = document.getElementById("root");

const root = ReactDom.createRoot(el);

root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
