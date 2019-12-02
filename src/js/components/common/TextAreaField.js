import React from 'react';
import PropTypes from 'prop-types';

const TextAreaField = ({
  name,
  label,
  type,
  placeholder,
  required,
  onChange,
  error
}) => (
  <div className="input-box">
    <textarea
      name={name}
      label={label}
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
    {error && (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )}
  </div>
);

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  classname: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
TextAreaField.defaultProps = {
  label: '',
  placeholder: ''
};

export default TextAreaField;
