import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'redux-form';
import { Label, Input } from 'reactstrap';

import RenderInput from '../../common/components/RenderInput';


const UsernameField = ({
  provider, installer,
  setUsername,
}) => {
  let disabled = false;
  if (provider === 'GITHUB') {
    disabled = true;
  }

  if (installer === 'pip' && provider !== 'BITBUCKET' && provider !== null) {
    disabled = true;
  }

  let placeholder_text = 'ci_bot or other username';

  if(disabled == true) {
    placeholder_text = 'Username not needed with ' + provider
  }

  return (
    <div>
      <Label for="username">Username *</Label>
      <Input disabled={disabled} type="text" name="username" id="username" placeholder={placeholder_text} onChange={setUsername} />
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
