import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MDXProvider } from "@mdx-js/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MDXProvider components={{}}>
      <App />
    </MDXProvider>
  </StrictMode>
);
