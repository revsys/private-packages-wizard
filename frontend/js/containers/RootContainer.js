import React from 'react';
import PropTypes from 'prop-types';

import { ConnectedRouter } from 'react-router-redux';

import routes from '../routes';


class RootContainer extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        {routes}
      </ConnectedRouter>
    );
  }
}

RootContainer.propTypes = {
  history: PropTypes.object,
};

export default RootContainer;
