var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  render: function() {
    var {isLoading, temperature, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return (<h3>Fetching weather...</h3>);
      } else if (temperature && location) {
        return (<WeatherMessage location={location} temperature={temperature} />);
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  },

  handleSearch: function(location) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemperature(location).then(function(temperature) {
      that.setState({
        location: location,
        temperature: temperature,
        isLoading: false
      });

    }, function(errorMessage) {
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  }
});

module.exports = Weather;
