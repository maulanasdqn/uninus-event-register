import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./home";
import { CreateIccPage } from "./icc/create";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/icc",
    children: [
      {
        path: "list",
        element: <HomePage />,
      },
      {
        path: "register",
        element: <CreateIccPage />,
      },
    ],
  },
]);
