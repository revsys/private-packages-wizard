import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Alert } from 'reactstrap';

import WizardForm from './WizardForm';


class Wizard extends React.Component {
  componentWillMount() {
    this.props.getAuthDetails();
  }

  handleSubmit = (values) => {
    this.props.setUsername(values.email);
    this.props.login(values.email, values.password);
  }

  render() {
    if (this.props.loggedIn) {
      this.props.onSuccess();
    }
    let alert = <Alert color="info">You are not not logged yet.</Alert>;

    if (this.props.loginFailure) {
      alert = <Alert color="danger">Unable to login with that email and password. Please try again.</Alert>;
    }
    return (
      <Container>
        <Row>
          <Col className="login-form">
            {alert}
            <WizardForm onSubmit={this.handleSubmit} />
          </Col>
        </Row>
      </Container>
    );
  }
}

Wizard.propTypes = {
  getAuthDetails: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loginFailure: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Wizard;
