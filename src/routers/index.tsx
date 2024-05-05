import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./home";
import { CreateIccPage } from "./icc/create";
import { ListICCPage } from "./icc/list";

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
        element: <ListICCPage />,
      },
      {
        path: "register",
        element: <CreateIccPage />,
      },
    ],
  },
]);
