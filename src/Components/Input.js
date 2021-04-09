import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, id, stateValue, setStateValue, type = 'text' }) => {
  return (
    <label htmlFor={ id } >
      { name }
      <input
        value={ stateValue }
        id={ id }
        onChange={ ({ target: { value } }) => setStateValue(value) }
        type={ type }
      />
    </label>
  );
};

Input.defaultProps = { type: 'text' };

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func,
  type: PropTypes.string,
};

export default Input;
