import React from 'react';

var ClockHands = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    var time = new Date(),
    hour = time.getHours(),
    minute = time.getMinutes(),
    second = time.getSeconds();

    if (hour > 12) {
      hour -= 12;
    }

    var hourStyle = {
      transform: 'rotate('+ (hour * 30 + (minute / 2) + 180) +'deg)'
    },
    minuteStyle = {
      transform: 'rotate('+ (minute * 6 + 180) +'deg)'
    },
    secondStyle = {
      transform: 'rotate('+ (second * 6 + 180) +'deg)'
    };

    return (
      <div>
        <div className="clk-hourhand" style={hourStyle}></div>
        <div className="clk-minutehand" style={minuteStyle}></div>
        <div className="clk-secondhand" style={secondStyle}></div>
      </div>
    );
  }
});

export default ClockHands;
