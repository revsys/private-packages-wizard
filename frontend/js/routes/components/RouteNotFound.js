import React from 'react';

import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';

const RouteNotFound = () => (
  <Container>
    <Row>
      <Col>
        <Card body inverse color="danger" style={{ marginTop: '50px' }}>
          <CardTitle>Page Not Found</CardTitle>
          <CardText>
          We could not find the page you requested.  Theoretically it should be
          impossible for you to reach this page.
          </CardText>
        </Card>
      </Col>
    </Row>
  </Container>
);


export default RouteNotFound;
