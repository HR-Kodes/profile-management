import { createBrowserRouter } from "react-router-dom";
import { PMSAddUser, PMSLandingPage, PMSUsersList } from "../container";

export const router = createBrowserRouter([
  {
    path: "",
    element: <PMSLandingPage />,
  },
  {
    path: "add-user",
    element: <PMSAddUser />,
  },
  {
    path: "users-list",
    element: <PMSUsersList />,
  },
]);
