import App from "./App";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Blog = lazy(() => import("./pages/Blog"));
const Works = lazy(() => import("./pages/Works"));
const About = lazy(() => import("./pages/About"));
const HomePage = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "works",
        element: <Works />,
      },
    ],
  },
]);
