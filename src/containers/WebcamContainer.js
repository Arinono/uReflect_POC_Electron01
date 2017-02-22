import React from 'react';
import Webcam from 'react-webcam';

import Widget from './Widget';

var WebcamContainer = React.createClass({
  render: function() {
    var width = $(window).width() / 12 * 4,
    height = $(window).height() / 6 * 3,
    audio = false,
    render =
      <div className="webcam">
        <Webcam audio={audio} width={width} height={height} />
      </div>;

    return (
      <Widget width="4" height="3" posX="9" posY="4" debug="false" render={render} />
    );
  }
});

export default WebcamContainer;
