import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { goLogin } from '../actions';

class PrivateRoute extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.goLogin();
    }
  }
  render() {
    return (
      <Route {...this.props} />
    );
  }
}

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  goLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn,
  location: state.router.location,
});

const mapDispatchToProps = {
  goLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
