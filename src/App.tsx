import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {
  // Using Router Provider to enable routes
  return <RouterProvider router={router} />;
};

export default App;
