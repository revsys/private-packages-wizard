import { connect } from 'react-redux';

import {
  parseRepo,
  setInstaller,
  setToken,
  setRef,
  setLibrary,
  computeUrl,
} from '../actions';
import WizardForm from '../components/WizardForm';


const mapStateToProps = state => ({
  initialValues: {
    isLibrary: state.wizard.isLibrary,
  }
});

const mapDispatchToProps = {
  parseRepo,
  setInstaller,
  setToken,
  setRef,
  setLibrary,
  computeUrl,
};

const WizardFormContainer = connect(mapStateToProps, mapDispatchToProps)(WizardForm);

export default WizardFormContainer;
