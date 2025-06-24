import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "@/utils";
import { DocsLayout } from "./layouts/DocsLayout";
import Layout from "./layouts/Layout";
import "pixelact-ui/styles.css";
import "highlight.js/styles/github-dark.css";
import Spinner from "./components/Spinner";

const LazyHomepage = React.lazy(() => import("./pages/Homepage"));
const LazyNotFound = React.lazy(() => import("./pages/NotFound"));

const contentModules = import.meta.glob("./content/*.mdx");

const contentRoutes = Object.entries(contentModules).map(([path, loader]) => {
  const name = path.match(/\.\/content\/(.*)\.mdx$/)?.[1];
  const Component = React.lazy(
    loader as () => Promise<{ default: React.ComponentType }>
  );
  return {
    path: `/docs/${name}`,
    element: (
      <Suspense fallback={<Spinner />}>
        <Component />
      </Suspense>
    ),
  };
});

const SuspenseLoader = () => (
  <div className="absolute top-0 bg-background flex items-center justify-center h-full w-full">
    <Spinner />
  </div>
);

function App() {
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
            {contentRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Route>
        <Route
          path={routes.notFound}
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <LazyNotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
