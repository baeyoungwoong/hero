import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import BYWPortfolio from "./Component/BYWPortfolio";
import Aboutme from "./Component/Aboutme";
import Skills from "./Component/Skills";
import Archiving from "./Component/Archiving";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <BYWPortfolio />,
      },
      {
        path: "BYW Portfolio",
        element: <BYWPortfolio />,
      },
      {
        path: "Aboutme",
        element: <Aboutme />,
      },
      {
        path: "Skills",
        element: <Skills />,
      },
      {
        path: "Archiving",
        element: <Archiving />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
