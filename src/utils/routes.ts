interface Routes {
  root: string;
  docs: {
    installation: string;
    usage: string;
  };
}
const routes: Routes = {
  root: "/",
  docs: {
    installation: "/docs/installation",
    usage: "/docs/usage",
  },
};

export default routes;