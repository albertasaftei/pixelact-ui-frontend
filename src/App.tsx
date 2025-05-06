import { BrowserRouter, Route, Routes } from "react-router-dom";

import Introduction from "./content/introduction.mdx";
import Installation from "./content/installation.mdx";
import Usage from "./content/usage.mdx";
import Homepage from "./pages/Homepage";
import { routes } from "@/utils";
import { DocsLayout } from "./layouts/DocsLayout";
import Layout from "./layouts/Layout";
import "pixelact-ui/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.root} element={<Layout />}>
          <Route path={routes.root} element={<Homepage />} />
          <Route path={routes.docs.index} element={<DocsLayout />}>
            <Route path={routes.docs.introduction} element={<Introduction />} />
            <Route path={routes.docs.installation} element={<Installation />} />
            <Route path={routes.docs.usage} element={<Usage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
