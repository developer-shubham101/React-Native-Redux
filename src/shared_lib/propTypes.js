import PropTypes from 'prop-types';

export const requiredIf = (type, condition) => (
  props,
  propName,
  componentName,
) => {
  if (typeof type !== 'function') {
    return new Error(
      'Invalid required-if prop type supplied to ' +
        componentName +
        '. Validation failed.',
    );
  }

  if (typeof condition !== 'function') {
    return new Error(
      'Invalid required-if condition supplied to ' +
        componentName +
        '. Validation failed.',
    );
  }

  var test = condition(props) ? type.isRequired : type;

  return PropTypes.checkPropTypes(
    { [propName]: test },
    props,
    propName,
    componentName,
  );
};
