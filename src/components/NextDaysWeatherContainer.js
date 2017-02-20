import React from 'react';
import {Col} from 'react-bootstrap';
import WeatherIcons from 'react-weathericons';

var NextDaysWeatherContainer = React.createClass({
  getInitialState: function() {
    return {
      icon: ""
    };
  },
  render: function() {
    var nextDaysWeatherContainer = {
      borderLeft: '1px solid white',
      borderRight: '1px solid white',
      borderBottom: '1px solid white',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-around',
      padding: 10
    }

    var nextDaysWeather = [];
    for (var i = 0; i < this.props.nextDaysWeather.length; i++) {
      nextDaysWeather.push(this.props.nextDaysWeather[i]);
    }

    return (
      <div style={nextDaysWeatherContainer}>
        {nextDaysWeather.map(function(weather) {
          var weatherConditionsIcons = {"chanceflurries" : "day-windy",
                                        "chancerain" : "day-rain",
                                        "chancesleet" : "day-sleet",
                                        "chancesnow" : "day-snow",
                                        "chancetstorms" : "day-thunderstorm",
                                        "clear" : "day-sunny",
                                        "cloudy" : "day-cloudy",
                                        "flurries" : "day-windy",
                                        "fog" : "day-fog",
                                        "hazy" : "day-haze",
                                        "mostlycloudy" : "day-cloudy",
                                        "mostlysunny" : "day-sunny-overcast",
                                        "partlycloudy" : "day-cloudy",
                                        "partlysunny" : "day-sunny-overcast",
                                        "rain" : "day-rain",
                                        "sleet" : "day-sleet",
                                        "snow" : "day-snow",
                                        "sunny" : "day-sunny",
                                        "tstorms" : "day-thunderstorm",
                                        "unknown" : "na"};
            var icon = weatherConditionsIcons[weather.icon];
            // this.setState({icon: weatherConditionsIcons[weather.icon]});
            return (
              <div className="bot-box" key={weather.period}>
                <WeatherIcons name={icon} size="2x" />
                <div>{weather.date.day} {weather.date.monthname} {weather.date.year}</div>
                <div>{weather.conditions}</div>
                <div>{weather.low.celsius}°C ~ {weather.high.celsius}°C</div>
              </div>
            );
        })}
      </div>
    );
  }
});

export default NextDaysWeatherContainer;
