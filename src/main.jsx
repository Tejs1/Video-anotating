import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DataView from "./pages/DataView";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "data", element: <DataView /> },
  { path: "*", element: <h1>NOt foung</h1> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </>
);
