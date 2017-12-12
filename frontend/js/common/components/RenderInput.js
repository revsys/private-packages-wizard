import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroup, Input, FormFeedback } from 'reactstrap';

class RenderInput extends React.PureComponent {
  render() {
    const {
      input,
      placeholder,
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

RenderInput.defaultProps = {
  autofocus: false,
};

RenderInput.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any,
  }),
  autofocus: PropTypes.bool,
};

RenderInput.defaultProps = {
  placeholder: '',
  meta: {}
};

export default RenderInput;
