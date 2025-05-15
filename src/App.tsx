import { BrowserRouter, Route, Routes } from "react-router-dom";

import Introduction from "./content/introduction.mdx";
import Installation from "./content/installation.mdx";
import Homepage from "./pages/Homepage";
import { routes } from "@/utils";
import { DocsLayout } from "./layouts/DocsLayout";
import Layout from "./layouts/Layout";
import "pixelact-ui/styles.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // If the user has selected a theme, use that
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);

      // Else if the users OS preferences prefers dark mode
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");

      // Else use light mode
    } else {
      document.body.classList.add("light");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.root} element={<Layout />}>
          <Route path={routes.root} element={<Homepage />} />
          <Route element={<DocsLayout />}>
            <Route path={routes.docs.introduction} element={<Introduction />} />
            <Route path={routes.docs.installation} element={<Installation />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
