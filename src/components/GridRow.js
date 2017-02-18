import React from 'react';
import { Row, Col } from 'react-bootstrap';

var GridRow = React.createClass({
  render: function() {
    return (
      <Col xs={12}>
        <Col xs={2}></Col>
        <Col xs={2}></Col>
        <Col xs={2}></Col>
        <Col xs={2}></Col>
        <Col xs={2}></Col>
        <Col xs={2}></Col>
      </Col>
    );
  }
});

export default GridRow;
