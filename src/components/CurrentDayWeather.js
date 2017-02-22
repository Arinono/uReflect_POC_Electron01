import React from 'react';
import WeatherIcons from 'react-weathericons';

var CurrentDayWeather = React.createClass({
    getInitialState: function() {
      return {
        icon: "",
        currentHour: new Date().getHours(),
        currentMinutes: new Date().getMinutes(),
        currentSecond: new Date().getSeconds()
      };
    },
    instantiateIcon: function() {
        this.currentDate = new Date();
        this.setState({currentHour: this.currentDate.getHours()});
        this.setState({currentMinutes: this.currentDate.getMinutes()});
        this.setState({currentSecond: this.currentDate.getSeconds()});

        // Get new icon if time allows it
        this.day = true;
        this.currentDate = new Date();
        if (this.currentDate.getHours() >  this.props.astronomy.sunset.hour ||
            (this.currentDate.getHours() == this.props.astronomy.sunset.hour && this.currentDate.getMinutes() >= this.props.astronomy.sunset.minute) ||
            this.currentDate.getHours() < this.props.astronomy.sunrise.hour ||
            (this.currentDate.getHours() == this.props.astronomy.sunrise.hour && this.currentDate.getMinutes() <= this.props.astronomy.sunrise.minute)) {
            this.day = false;
        }
        this.weatherConditionsIcons = {"chanceflurries" : this.day ? "day-windy" : "night-cloudy-gusts",
                                      "chancerain" : this.day ? "day-rain" : "night-alt-showers",
                                      "chancesleet" : this.day ? "day-sleet" : "night-alt-sleet",
                                      "chancesnow" : this.day ? "day-snow" : "night-alt-snow",
                                      "chancetstorms" : this.day ? "day-thunderstorm" : "night-thunderstorm",
                                      "clear" : this.day ? "day-sunny" : "night-clear",
                                      "cloudy" : this.day ? "cloudy" : "cloudy",
                                      "flurries" : this.day ? "day-windy" : "night-cloudy-gusts",
                                      "fog" : this.day ? "day-fog" : "night-fog",
                                      "hazy" : this.day ? "day-haze" : "night-fog",
                                      "mostlycloudy" : this.day ? "cloud" : "cloud",
                                      "mostlysunny" : this.day ? "day-sunny-overcast" : "night-partly-cloudy",
                                      "partlycloudy" : this.day ? "day-cloudy" : "night-alt-cloudy",
                                      "partlysunny" : this.day ? "day-sunny-overcast" : "night-partly-cloudy",
                                      "rain" : this.day ? "day-rain" : "night-alt-rain",
                                      "sleet" : this.day ? "day-sleet" : "night-alt-sleet",
                                      "snow" : this.day ? "day-snow" : "night-alt-snow",
                                      "sunny" : this.day ? "day-sunny" : "night-clear",
                                      "tstorms" : this.day ? "day-thunderstorm" : "night-alt-thunderstorm",
                                      "unknown" : this.day ? "na" : "na"};
        this.setState({icon: this.weatherConditionsIcons[this.props.currentDayWeather.icon]});
    },
    componentWillUnmount: function() {
      clearInterval(this.interval);
    },
    componentDidMount: function() {
      this.instantiateIcon();
      this.interval = setInterval(this.instantiateIcon, 60000);
    },
    render: function() {
      var style = {
        paddingTop: 10
      };
      // <div>{this.props.currentDayWeather.conditions}</div>
      return (
        <div className="currentWeather text-center">
          <WeatherIcons name={this.state.icon}  size="2x" />
          <div className="paddingWeatherIcon">
            <div>
              <span className="lowTemperature">{this.props.currentDayWeather.low.celsius}°C</span>
              <span> ~ </span>
              <span className="highTemperature">{this.props.currentDayWeather.high.celsius}°C</span>
            </div>
          </div>
        </div>
      );
    }
});

export default CurrentDayWeather
