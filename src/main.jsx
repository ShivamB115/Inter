// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // Create root using the new API

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
