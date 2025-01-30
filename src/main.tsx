import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./utils/i18.ts";

createRoot(document.getElementById("root")!).render(<App />);
