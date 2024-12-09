import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Index from "@/pages/Index";
import About from "@/pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
