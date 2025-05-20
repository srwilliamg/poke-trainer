import "./index.css";

import { Container, createRoot } from "react-dom/client";

import App from "./App.js";
import { StrictMode } from "react";

createRoot(document.getElementById("root") as Container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
