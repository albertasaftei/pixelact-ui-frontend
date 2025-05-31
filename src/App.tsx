import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "@/utils";
import { DocsLayout } from "./layouts/DocsLayout";
import Layout from "./layouts/Layout";
import "pixelact-ui/styles.css";
import "highlight.js/styles/github-dark.css";

const LazyHomepage = React.lazy(() => import("./pages/Homepage"));
const LazyInstallation = React.lazy(() => import("./content/installation.mdx"));
const LazyFonts = React.lazy(() => import("./content/fonts.mdx"));

function App() {
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.root} element={<Layout />}>
          <Route path={routes.root} element={<LazyHomepage />} />
          <Route element={<DocsLayout />}>
            <Route
              path={routes.docs.installation}
              element={<LazyInstallation />}
            />
            <Route path={routes.docs.fonts} element={<LazyFonts />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
