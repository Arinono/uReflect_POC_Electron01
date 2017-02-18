import React from 'react';
import Grid from 'react-bootstrap';

import GridRow from './GridRow';

var GridFull = React.createClass({
  render: function() {
    return (
      <Grid className="show-grid">
        <GridRow />
        <GridRow />
        <GridRow />
        <GridRow />
        <GridRow />
        <GridRow />
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
