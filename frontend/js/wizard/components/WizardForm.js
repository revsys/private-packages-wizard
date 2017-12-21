import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import RenderInput from '../../common/components/RenderInput';
import UsernameFieldContainer from '../containers/UsernameFieldContainer';
import HelpTokenContainer from '../containers/HelpTokenContainer';
import ResultContainer from '../containers/ResultContainer';


const WizardForm = (props) => {
  const {
    parseRepo,
    setInstaller,
    setRef, setToken, setLibrary,
    computeUrl,
  } = props;

  return (
    <div>
      <Form onChange={computeUrl}>
        <FormGroup>
          <Label for="installer">Installer *</Label>
          <Input type="select" name="installer" id="installerSelect" placeholder="Installer" onChange={setInstaller}>
            <option value="pip">pip</option>
            <option value="pipenv">pipenv</option>
          </Input>
        </FormGroup>
        <FormGroup check>
          <Label for="isLibrary" check>
            <Input type="checkbox" name="isLibrary" id="isLibrary" onChange={setLibrary} />{' '}
            This is a library
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="ref">Repository ref *</Label>
          <Field component={RenderInput} type="text" name="ref" id="ref" placeholder="branch or tag, for example 'master' or 'v1.0.0'" onChange={setRef} />
        </FormGroup>
        <FormGroup>
          <Label for="repo">Repository URL *</Label>
          <Field component={RenderInput} type="url" name="repo" id="repo" placeholder="Repository URL such as http://github.com/python/cpython" onChange={parseRepo} />
        </FormGroup>
        <FormGroup>
          <UsernameFieldContainer />
        </FormGroup>
        <FormGroup>
          <Label for="repo">Optional Access Token</Label>
          <Field component={RenderInput} type="text" name="token" id="token" placeholder="XXXXXX" onChange={setToken} />
          <HelpTokenContainer />
        </FormGroup>
      </Form>
      <ResultContainer />
    </div>
  );
};

WizardForm.propTypes = {
  parseRepo: PropTypes.func.isRequired,
  setInstaller: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
  setLibrary: PropTypes.func.isRequired,
  computeUrl: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'loginForm' })(WizardForm);
