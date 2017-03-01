import React from 'react';
import Widget from './Widget.js';
import CircularProgress from 'material-ui/CircularProgress';

var YouTubeContainer = React.createClass({
  getInitialState: function() {
    return {
      componentRender: null
    }
  },
  updateRenderDependingOnConnection: function() {
    if (!this.isOnline && (this.isOnline = navigator.onLine)) {
      var $ = require('jquery');
      var width = $(".youtube").width(), height = $(".youtube").height();
      this.setState({componentRender:
        <div className="youtube">
          <object width={width} height={height} className="render">
            <param name="movie" value="http://www.youtube.com/embed/q2pj6pAcmbk?html5=1&amp;rel=0&modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent&fs=0"/>
            <param name="allowFullScreen" value="false"/>
            <param name="allowscriptaccess" value="always"/>
            <embed width="100%" height="100%" src="http://www.youtube.com/embed/q2pj6pAcmbk?html5=1&amp;rel=0&modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent&fs=0" className="youtube-player" type="text/html" allowFullScreen="false"/>
          </object>
        </div>
      });
    }
    if (!this.isOnline){
        this.setState({componentRender:
          <div className="youtube">
            <div className="text-center">
              <div>Attempting to connect to the youtube widget. Please wait...</div>
              <CircularProgress size={40} />
            </div>
          </div>
        });
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.connectionInterval);
  },
  componentDidMount: function() {
    this.updateRenderDependingOnConnection();
    this.connectionInterval = setInterval(this.updateRenderDependingOnConnection, 5000);
  },
  render: function() {
    var options = {
      size: {
        width: 4,
        height: 2
      },
      pos: {
        x: 5,
        y: 2
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
      <Widget options={options} render={this.state.componentRender} />
    )
  }
});


export default YouTubeContainer;
