import { connect } from 'react-redux';

import { setUsername } from '../actions';

import UsernameField from '../components/UsernameField';


const mapStateToProps = state => ({
  provider: state.wizard.provider,
  installer: state.wizard.installer,
});

const mapDispatchToProps = {
  setUsername,
};

const UsernameFieldContainer = connect(mapStateToProps, mapDispatchToProps)(UsernameField);

export default UsernameFieldContainer;
