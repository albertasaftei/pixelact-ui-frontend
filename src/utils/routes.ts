interface Routes {
  root: string;
  docs: {
    installation: string;
    fonts: string;
    contributing: string;
    components: {
      button: string;
      textarea: string;
      lists: string;
      input: string;
      label: string;
      dialog: string;
    };
  };
  notFound: string;
}
const routes: Routes = {
  root: "/",
  docs: {
    installation: "/docs/installation",
    fonts: "/docs/fonts",
    contributing: "/docs/contributing",
    components: {
      button: "/docs/button",
      textarea: "/docs/textarea",
      lists: "/docs/lists",
      input: "/docs/input",
      label: "/docs/label",
      dialog: "/docs/dialog",
    }
  },
  notFound: "*",
};

export default routes;