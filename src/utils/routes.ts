interface Routes {
  root: string;
  docs: {
    installation: string;
    fonts: string;
  };
}
const routes: Routes = {
  root: "/",
  docs: {
    installation: "/docs/installation",
    fonts: "/docs/fonts",
  },
};

export default routes;