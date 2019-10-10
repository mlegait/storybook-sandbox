import PropTypes from "prop-types";
import React from "react";

/**
 * Here is the description of the component.
 */
const ComponentWithInternalProps = ({ text, color, number }) => (
  <div style={{ backgroundColor: color }}>
    <div>Here is the text: {text}</div>
    <div>Here is the number: {number}</div>
  </div>
);

ComponentWithInternalProps.propTypes = {
  /** Text to be rendered inside the component */
  text: PropTypes.string.isRequired,
  /** Background color */
  color: PropTypes.string.isRequired,
  /** Some number to be rendered inside the component */
  number: PropTypes.number
};

ComponentWithInternalProps.defaultProps = {
  number: 5
};

export default ComponentWithInternalProps;
