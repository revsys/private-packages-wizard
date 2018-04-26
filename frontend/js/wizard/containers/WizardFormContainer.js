import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { reduxForm } from 'redux-form';

import {
  parseRepo,
  setInstaller,
  setToken,
  computeRef,
  setVersion,
  setLibrary,
  computeUrl,
} from '../actions';
import WizardForm from '../components/WizardForm';


const getWizardValue = (state, fieldName, defaultValue) => {
  if (state.form.wizard === undefined || state.form.wizard.values === undefined) {
    return defaultValue;
  }
  return state.form.wizard.values[fieldName];
};

const mapStateToProps = state => ({
  isLibrary: getWizardValue(state, 'isLibrary', false),
  initialValues: {
    isLibrary: false,
  }
});

const mapDispatchToProps = {
  parseRepo,
  setInstaller,
  setToken,
  computeRef,
  setVersion,
  setLibrary,
  computeUrl,
};

const WizardFormContainer = connect(mapStateToProps, mapDispatchToProps)(WizardForm);

export default WizardFormContainer;
