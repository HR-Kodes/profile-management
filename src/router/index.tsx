import { createBrowserRouter } from "react-router-dom";
import { PMSAddProfile, PMSLandingPage, PMSProfilesList } from "../container";

// creating routes ...

export const router = createBrowserRouter([
  {
    path: "",
    element: <PMSLandingPage />,
  },
  {
    path: "add-profile",
    element: <PMSAddProfile />,
  },
  {
    path: "profiles-list",
    element: <PMSProfilesList />,
  },
]);
