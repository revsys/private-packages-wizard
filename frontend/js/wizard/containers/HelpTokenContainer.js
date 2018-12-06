import { connect } from 'react-redux';

import HelpToken from '../components/HelpToken';

const mapStateToProps = state => ({
  tokenURL: state.wizard.tokenUrl,
  provider: state.wizard.provider,
});

const HelpTokenContainer = connect(mapStateToProps)(HelpToken);

export default HelpTokenContainer;
