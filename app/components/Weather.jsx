var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModal = require("ErrorModal");

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  render: function() {
    var {isLoading, temperature, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return (<h3 className="text-center">Fetching weather...</h3>);
      } else if (temperature && location) {
        return (<WeatherMessage location={location} temperature={temperature} />);
      }
    }

    function renderError() {
      if (typeof errorMessage === "string") {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  },

  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemperature(location).then(function(temperature) {
      that.setState({
        location: location,
        temperature: temperature,
        isLoading: false
      });

    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  }
});

module.exports = Weather;
