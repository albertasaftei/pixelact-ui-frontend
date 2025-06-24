interface Routes {
  root: string;
  docs: {
    installation: string;
    fonts: string;
    contributing: string;
  };
  notFound: string;
}
const routes: Routes = {
  root: "/",
  docs: {
    installation: "/docs/installation",
    fonts: "/docs/fonts",
    contributing: "/docs/contributing",
  },
  notFound: "*",
};

export default routes;