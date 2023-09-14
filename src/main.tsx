import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";

const domNode: any = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
