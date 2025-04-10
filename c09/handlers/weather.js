const {
  getCityWeather,
  getFiveDaysForecastForCity,
} = require("../pkg/openwheathermap");

const getForCity = async (req, res) => {
  try {
    const weather = await getCityWeather(req.params.city);
    return res.status(200).send(weather);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const getFiveDaysForecast = async (req, res) => {
  try {
    const forecast = await getFiveDaysForecastForCity(
      req.params.lon,
      req.params.lat
    );
    return res.status(200).send(forecast);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getForCity,
  getFiveDaysForecast,
};
