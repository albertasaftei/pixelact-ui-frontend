interface Routes {
  root: string;
  docs: {
    index: string;
    introduction: string;
    installation: string;
    usage: string;
  };
}
const routes: Routes = {
  root: "/",
  docs: {
    index: "/docs",
    introduction: "/docs/introduction",
    installation: "/docs/installation",
    usage: "/docs/usage",
  },
};

export default routes;