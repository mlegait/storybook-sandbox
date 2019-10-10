import React from "react";
import ComponentWithInternalProps from "./ComponentWithInternalProps";

export default {
  title: "ComponentWithInternalProps",
  component: ComponentWithInternalProps
};

export const primary = () => (
  <ComponentWithInternalProps text="Hello, world!" color="salmon" number={3} />
);

export const useDefaultProps = () => (
  <ComponentWithInternalProps text="Hello, world!" color="salmon" />
);
