import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DataView from "./pages/DataView";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "data", element: <DataView /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </>
);
