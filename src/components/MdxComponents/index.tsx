import { ClassAttributes, HTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

const mdxComponents = {
  h1: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h1 className="text-3xl font-bold" {...props} />,
  h2: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h2 className="text-2xl font-semibold" {...props} />,
  code: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLElement> &
      HTMLAttributes<HTMLElement>
  ) => <code className="bg-muted px-1 rounded" {...props} />,
  p: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLParagraphElement> &
      HTMLAttributes<HTMLParagraphElement>
  ) => <p className="text-base" {...props} />,
};

export default mdxComponents;
