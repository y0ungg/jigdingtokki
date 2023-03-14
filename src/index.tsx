import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/font.css";
import "./css/popup.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
