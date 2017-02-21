
import React from 'react';
import {Col} from 'react-bootstrap';
import CircularProgress from 'material-ui/CircularProgress';

import CurrentDayWeather from '../components/CurrentDayWeather';
import NextDaysWeatherContainer from '../components/NextDaysWeatherContainer';
import Widget from './Widget';

var $ = require('jquery');

function weatherRequest() {
  var weather = null;
  if (navigator.onLine) {
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
  if (navigator.onLine) {
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
var currentDayWeather = weather ? weather.forecast.simpleforecast.forecastday[0] : null;
if (weather) {
  weather.forecast.simpleforecast.forecastday.splice(0, 1); // Remove current day weather since we do not need it anymore (we will iterate later in the last forecast days.)
  weather = weather.forecast.simpleforecast.forecastday;
}

var WeatherContainer = React.createClass({
  getInitialState: function() {
    return {
      nextDaysWeather: weather,
      astronomy: astronomy,
      currentDayWeather: currentDayWeather,
      componentReader: null
    }
  },
  instantiateWeather: function() {
    if (this.isOnline) {
      var weather = weatherRequest();
      var astronomy = astronomyRequest();
      var currentDayWeather = weather ? weather.forecast.simpleforecast.forecastday[0] : null;
      if (weather) {
        weather.forecast.simpleforecast.forecastday.splice(0, 1); // Remove current day weather since we do not need it anymore (we will iterate later in the last forecast days.)
        weather = weather.forecast.simpleforecast.forecastday;
      }
      this.setState({nextDaysWeather: weather});
      this.setState({astronomy: astronomy});
      this.setState({currentDayWeather: currentDayWeather});
    }
  },
  updateRenderDependingOnConnection: function() {
    if (!this.isOnline && (this.isOnline = navigator.onLine)) {
      this.instantiateWeather();
      this.setState({componentReader:
          <div>
            <CurrentDayWeather currentDayWeather={this.state.currentDayWeather} astronomy={this.state.astronomy.sun_phase} />
            <NextDaysWeatherContainer nextDaysWeather={this.state.nextDaysWeather} />
          </div>
      });
    }
    if (!this.isOnline){
        this.setState({componentReader:
            <div className="text-center">
              <div>Attempting to reconnect. Please wait...</div>
              <CircularProgress size={40} />
            </div>
        });
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.weatherInterval);
    clearInterval(this.connectionInterval);
  },
  componentDidMount: function() {
    this.updateRenderDependingOnConnection();
    this.weatherInterval = setInterval(this.instantiateWeather, 1000000);
    this.connectionInterval = setInterval(this.updateRenderDependingOnConnection, 5000);
  },
  render: function() {
    var render =
      <div className="weather">
          {this.state.componentReader}
      </div>

    return (
      <Widget width="3" height="1" posX="1" posY="1" debug="false" render={render} />
    );
  },
});

export default WeatherContainer;
