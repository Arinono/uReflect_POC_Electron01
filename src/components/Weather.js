
import React from 'react';
import {Col} from 'react-bootstrap';

import CurrentDayWeather from '../components/CurrentDayWeather';
import NextDaysWeatherContainer from '../components/NextDaysWeatherContainer';

var $ = require('jquery');
var online = navigator.onLine;

function weatherRequest() {
  var weather = null;
  if (online) {
    $.ajax({
      url: "http://api.wunderground.com/api/6d14d0a9792df261/forecast/q/FR/Bordeaux.json",
      async: false
    }).done(function(data) {
      weather = data;
    });
  }
  return weather;
};

function astronomyRequest() {
  var astronomy = null;
  if (online) {
    $.ajax({
      url: "http://api.wunderground.com/api/6d14d0a9792df261/astronomy/q/France/Bordeaux.json",
      async: false
    }).done(function(data) {
      astronomy = data;
    });
  }
  return astronomy;
}

var weather = weatherRequest();
var astronomy = astronomyRequest();
if (online) {
  var currentDayWeather = weather.forecast.simpleforecast.forecastday[0];
  weather.forecast.simpleforecast.forecastday.splice(0, 1); // Remove current day weather since we do not need it anymore (we will iterate later in the last forecast days.)
  weather = weather.forecast.simpleforecast.forecastday;
}

var Weather = React.createClass({
  getInitialState: function() {
    return {
      nextDaysWeather: weather,
      astronomy: astronomy,
      currentDayWeather: currentDayWeather
    }
  },
  instantiateWeather: function() {
    var weather = weatherRequest();
    var astronomy = astronomyRequest();
    if (online) {
      var currentDayWeather = weather.forecast.simpleforecast.forecastday[0];
      weather.forecast.simpleforecast.forecastday.splice(0, 1); // Remove current day weather since we do not need it anymore (we will iterate later in the last forecast days.)
      weather = weather.forecast.simpleforecast.forecastday;
    }
    this.setState({nextDaysWeather: weather});
    this.setState({astronomy: astronomy});
    this.setState({currentDayWeather: currentDayWeather});
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  componentDidMount: function() {
    this.instantiateWeather();
    this.interval = setInterval(this.instantiateWeather, 1000000);
  },
  render: function() {
    return (
      <div className="weather widget">
          <CurrentDayWeather currentDayWeather={this.state.currentDayWeather} astronomy={this.state.astronomy.sun_phase} />
          <NextDaysWeatherContainer nextDaysWeather={this.state.nextDaysWeather} />
      </div>
    );
  }
});

export default Weather;
