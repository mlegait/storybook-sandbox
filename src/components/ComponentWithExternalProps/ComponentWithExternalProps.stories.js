import React from "react";
import ComponentWithExternalProps from "./ComponentWithExternalProps";

export default {
  title: "ComponentWithExternalProps",
  component: ComponentWithExternalProps
};

export const primary = () => (
  <ComponentWithExternalProps text="Hello, world!" color="salmon" number={3} />
);

export const useDefaultProps = () => (
  <ComponentWithExternalProps text="Hello, world!" color="salmon" />
);
