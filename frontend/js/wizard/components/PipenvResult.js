import React from 'react';
import PropTypes from 'prop-types';

import { InputGroup, InputGroupAddon, Input, Label } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CopyBtn from './CopyBtn';


const PipenvResult = ({ installer, project, reqUrl }) => {
  if (installer !== 'pipenv') {
    return null;
  }

  const text = `${project} = {file = "${reqUrl}"}`;
  return (
    <div className="alert alert-success">
      <Label for="text">Add this to your <code>PipFile</code>,  under the <code>[packages]</code> or <code>[dev-packages]</code> section.</Label>
      <InputGroup>
        <Input value={text} disabled name="text" />
        <CopyToClipboard text={text}>
          <InputGroupAddon><CopyBtn /></InputGroupAddon>
        </CopyToClipboard>
      </InputGroup>
    </div>
  );
};

PipenvResult.propTypes = {
  reqUrl: PropTypes.string,
  installer: PropTypes.string,
};

PipenvResult.defaultProps = {
  reqUrl: null,
  installer: null,
};

export default PipenvResult;
