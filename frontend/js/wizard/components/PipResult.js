import React from 'react';
import PropTypes from 'prop-types';

import { InputGroup, InputGroupAddon, Input, Label } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CopyBtn from './CopyBtn';

const PipResult = ({ installer, reqUrl, isLibrary }) => {
  if (installer !== 'pip') {
    return null;
  }

  let command = `pip install "${reqUrl}"`;
  if (isLibrary === true) {
    command = `${command} --process-dependency-links`;
  }
  return (
    <div className="alert alert-success">
      <Label for="reqUrl">Add this to your requirements file:</Label>
      <InputGroup>
        <Input value={reqUrl} disabled name="reqUrl" />
        <CopyToClipboard text={reqUrl}>
          <InputGroupAddon><CopyBtn /></InputGroupAddon>
        </CopyToClipboard>
      </InputGroup>
      <hr />
      <Label for="command">Or install from the command line with:</Label>
      <InputGroup>
        <Input value={command} disabled name="command" />
        <CopyToClipboard text={command}>
          <InputGroupAddon style={{ cursor: 'pointer' }} ><CopyBtn /></InputGroupAddon>
        </CopyToClipboard>
      </InputGroup>
    </div>
  );
};

PipResult.propTypes = {
  reqUrl: PropTypes.string,
  installer: PropTypes.string,
  isLibrary: PropTypes.bool,
};

PipResult.defaultProps = {
  reqUrl: null,
  installer: null,
  isLibrary: null,
};

export default PipResult;
