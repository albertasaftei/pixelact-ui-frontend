interface Routes {
  root: string;
  docs: {
    introduction: string;
    installation: string;
  };
}
const routes: Routes = {
  root: "/",
  docs: {
    introduction: "/docs/introduction",
    installation: "/docs/installation",
  },
};

export default routes;