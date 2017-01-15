var React = require("react");

var WeatherMessage = ({temperature, location}) => {
  return (
    <p>It's {temperature} in {location}.</p>
  );
}

module.exports = WeatherMessage;
