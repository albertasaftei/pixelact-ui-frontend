import { Pre } from "./Pre";
import { ComponentProps } from "react";

const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1 {...props} className="text-3xl font-bold mb-4" />
  ),
  pre: (props: ComponentProps<typeof Pre>) => <Pre {...props} />,
};

export default mdxComponents;
