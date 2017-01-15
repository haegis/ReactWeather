var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=9780779fa0a9e2fe211ce336c9062d65";

module.exports = {
  getTemperature: function(location) {
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodeURIComponent(location)}`;

    return axios.get(requestURL).then(function(response) {
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);

      } else {
          return response.data.main.temp;
      }

    }, function(response) {
      throw new Error(response.data.message);
    });
  }
}
