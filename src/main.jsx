import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Products from "./Components/Products"
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/about-us",
    element: <About/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);