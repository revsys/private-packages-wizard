import React from 'react';
import PropTypes from 'prop-types';

import includes from 'lodash/includes';

import { Label, Input } from 'reactstrap';


const UsernameField = ({
  provider, installer,
  setUsername,
}) => {
  const disabled = includes(['GITHUB'], provider);
  let placeholderText = 'ci_bot or other username';

  if (disabled === true) {
    placeholderText = `Username not needed with ${provider}`;
  }

  return (
    <div>
      <Label for="username">Username *</Label>
      <Input disabled={disabled} type="text" name="username" id="username" placeholder={placeholderText} onChange={setUsername} />
    </div>
  );
};

UsernameField.propTypes = {
  provider: PropTypes.string,
  installer: PropTypes.string,
  setUsername: PropTypes.func.isRequired,
};

UsernameField.defaultProps = {
  provider: null,
  installer: null
};

export default UsernameField;
