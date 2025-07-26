import React, { Suspense } from "react";
import "pixelact-ui/styles.css";
import "highlight.js/styles/github-dark.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "@/utils";
import { DocsLayout } from "./layouts/DocsLayout";
import Layout from "./layouts/Layout";
import Spinner from "./components/Spinner";
import mdxComponents from "./components/MdxComponents";

const LazyHomepage = React.lazy(() => import("./pages/Homepage"));
const LazyNotFound = React.lazy(() => import("./pages/NotFound"));
const LazyShowcase = React.lazy(() => import("./pages/Showcase"));

const contentModules = import.meta.glob("./content/*.mdx");

const contentRoutes = Object.entries(contentModules).map(([path, loader]) => {
  const name = path.match(/\.\/content\/(.*)\.mdx$/)?.[1];
  const Component = React.lazy(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    loader as () => Promise<{ default: React.ComponentType<any> }>
  );
  return {
    path: `/docs/${name}`,
    element: (
      <Suspense fallback={<Spinner />}>
        <Component components={mdxComponents} />
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
          <Route
            path={routes.showcase}
            element={
              <Suspense fallback={<SuspenseLoader />}>
                <LazyShowcase />
              </Suspense>
            }
          />
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
