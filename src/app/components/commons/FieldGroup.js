import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const FieldGroup = props => {
  return (
    <TextField
      hintText={props.label}
      floatingLabelText={props.label}
      errorText={props.touched && props.error}
      {...props}
      />
  );
};

FieldGroup.propTypes = {
  label: PropTypes.string,
  touched: PropTypes.string,
  error: PropTypes.string
};

export default FieldGroup;
