import { connect } from 'react-redux';

import Result from '../components/Result';


const mapStateToProps = state => ({
  reqUrl: state.wizard.reqUrl,
  installer: state.wizard.installer,
  project: state.wizard.project,
  reference: state.wizard.reference,
  isLibrary: state.wizard.isLibrary,
});


const ResultContainer = connect(mapStateToProps)(Result);

export default ResultContainer;
