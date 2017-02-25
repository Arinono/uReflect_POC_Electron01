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

      var options = {
        size: {
          width: 4,
          height: 3
        },
        pos: {
          x: 9,
          y: 4
        },
        behaviour: {
          resizable: true,
          draggable: true,
          debug: false
        },
        resizeOpt: {
          horizontal: true,
          vertical: true
        }
      }

    return (
      <Widget options={options} render={render} />
    );
  }
});

export default WebcamContainer;
