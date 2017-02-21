import React from 'react';
import Webcam from 'react-webcam';

var WebcamContainer = React.createClass({
  render: function() {
    return (
      <div className="widget square clock">
        <Webcam />
      </div>
    );
  }
});

export default WebcamContainer;
