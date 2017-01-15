var React = require("react");

var WeatherMessage = ({temperature, location}) => {
  return (
    <h3 className="text-center">It's {temperature} in {location}.</h3>
  );
}

module.exports = WeatherMessage;
