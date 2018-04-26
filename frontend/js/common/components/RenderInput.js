import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroup, Input, FormFeedback } from 'reactstrap';

class RenderInput extends React.PureComponent {
  render() {
    const {
      input,
      placeholder,
      disabled,
      type,
      meta: {
        touched,
        error,
      },
      autofocus,
    } = this.props;

    const classes = classNames({
      success: touched && !error,
      danger: touched && error,
    });

    return (
      <FormGroup color={classes}>
        <Input
          {...input}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          valid={!error}
          autoFocus={autofocus}
        />
        {touched && error && <FormFeedback>{error}</FormFeedback>}
      </FormGroup>
    );
  }
}

RenderInput.propTypes = {
  input: PropTypes.object,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any,
  }),
  autofocus: PropTypes.bool,
};

RenderInput.defaultProps = {
  autofocus: false,
  disabled: false,
  placeholder: '',
  meta: {}
};

export default RenderInput;
