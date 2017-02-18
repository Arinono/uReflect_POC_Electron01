import React from 'react';
import { Row, Col } from 'react-bootstrap';

var GridRow = React.createClass({
  render: function() {
    return (
      <Row>
        <Col xs={2}></Col>
        <Col xs={2}></Col>
        <Col xs={2}></Col>
        <Col xs={2}></Col>
        <Col xs={2}></Col>
        <Col xs={2}></Col>
      </Row>
    );
  }
});

export default GridRow;
