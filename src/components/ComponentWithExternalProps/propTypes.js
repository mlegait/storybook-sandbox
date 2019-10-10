import PropTypes from "prop-types";

export const componentPropTypes = {
  /** Text to be rendered inside the component */
  text: PropTypes.string.isRequired,
  /** Background color */
  color: PropTypes.string.isRequired,
  /** Some number to be rendered inside the component */
  number: PropTypes.number
};

export const defaultPropTypes = {
  number: 5
};
