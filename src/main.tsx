import "./index.css";

import { Container, createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router";

import Home from "./app/home/home";
import Root from "./app/root/root";
import StoreProvider from "./provider/trainer";
import { StrictMode } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StrictMode><StoreProvider><Root /></StoreProvider></StrictMode>,
  },
  {
    path: "/home",
    element: <Home></Home>
  }
]);

const root: Container = document.getElementById("root")as Container;

createRoot(root).render(
  <RouterProvider router={router} />
);

