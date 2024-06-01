import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./home";
import { CreateIccPage } from "./icc/create";
import { ListICCPage } from "./icc/list";
import { CreateMakrabPage } from "./makrab/create";
import { ListMakrabPage } from "./makrab/list";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/makrab/*",
    children: [
      {
        path: "register",
        element: <CreateMakrabPage />,
      },
      {
        path: "list",
        element: <ListMakrabPage />,
      },
    ],
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
