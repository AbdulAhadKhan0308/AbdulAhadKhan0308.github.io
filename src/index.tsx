import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "@fontsource-variable/inter";
import "./tailwind.css";

createRoot(document.getElementById("app")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
