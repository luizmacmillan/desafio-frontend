import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, id, stateValue, setStateValue, type = 'text', confirmFunction = null }) => {
  const confirmFunctionExists = () => {
    if (confirmFunction !== null) {
      return confirmFunction();
    }
  };

  return (
    <label htmlFor={ id } >
      { name }
      <input
        value={ stateValue }
        id={ id }
        onChange={ ({ target: { value } }) => setStateValue(value) }
        onKeyUp={ ({ key }) => (key === 'Enter') && confirmFunctionExists() }
        type={ type }
      />
    </label>
  );
};

Input.defaultProps = { type: 'text', confirmFunction: null };

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  stateValue: PropTypes.string.isRequired,
  setStateValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  confirmFunction: PropTypes.func,
};

export default Input;
