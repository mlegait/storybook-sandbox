import React from "react";
import { componentPropTypes, defaultPropTypes } from "./propTypes";

/**
 * Here is the description of the component.
 */
const ComponentWithExternalProps = ({ text, color, number }) => (
  <div style={{ backgroundColor: color }}>
    <div>Here is the text: {text}</div>
    <div>Here is the number: {number}</div>
  </div>
);

ComponentWithExternalProps.propTypes = componentPropTypes;

ComponentWithExternalProps.defaultProps = defaultPropTypes;

export default ComponentWithExternalProps;
