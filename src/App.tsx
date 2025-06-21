import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "@/utils";
import { DocsLayout } from "./layouts/DocsLayout";
import Layout from "./layouts/Layout";
import "pixelact-ui/styles.css";
import "highlight.js/styles/github-dark.css";
import Spinner from "./components/Spinner";

const LazyHomepage = React.lazy(() => import("./pages/Homepage"));
const LazyInstallation = React.lazy(() => import("./content/installation.mdx"));
const LazyFonts = React.lazy(() => import("./content/fonts.mdx"));

const SuspenseLoader = () => (
  <div className="flex items-center justify-center h-full">
    <Spinner />
  </div>
);

function App() {
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.root}
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            path={routes.root}
            element={
              <Suspense fallback={<SuspenseLoader />}>
                <LazyHomepage />
              </Suspense>
            }
          />
          <Route element={<DocsLayout />}>
            <Route
              path={routes.docs.installation}
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyInstallation />
                </Suspense>
              }
            />
            <Route
              path={routes.docs.fonts}
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyFonts />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
