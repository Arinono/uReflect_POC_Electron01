import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import GridRow from './GridRow';

var GridFull = React.createClass({
  render: function() {
    return (
      <Grid className="show-grid grid">
        <GridRow />
        <GridRow />
        <GridRow />
        <GridRow />
        <GridRow />
        <GridRow />
      </Grid>
    );
  }
});

export default GridFull;
