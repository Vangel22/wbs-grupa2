const { getSection } = require("../config");

const CACHE = {};

// calculate mass of milky way planets -> teska operacija

// CPU
// L1 -> najbrza ama najskapa
// L2
// L3

// RAM

// Hard Disk ili SSD

// CACHE = {
//   Strumica: {
//     timestamp: 1234,
//     data: {},
//   },
// };

// CACHE[city]
// CACHE["skopje"]

// getCityWeather("Strumica"); // 20:31
// getCityWeather("Strumica"); // 20:41
// getCityWeather("Skopje"); // 20:51

const getCityWeather = async (city) => {
  let now = new Date().getTime() / 1000; // Zemi go vremeto od 1 Jan 1970 (Unix period) - vo sekundi
  // 20:31 -> 1234
  // 20:41 -> 4567

  console.log("CACHE", CACHE);

  if (
    CACHE[city] &&
    now < CACHE[city].timestamp + getSection("weather").cache_expiery
    // CACHE[city].timestamp vreme na iniciranje t.e prvicno zapisuvanje na podatokot za Strumica
    // getSection("weather").cache_expiery -> vremeto za istekuvanje
    // CACHE[city].timestamp + getSection("weather").cache_expiery -> 60 sekundi vo idnina
    // timestamp: 1234 + 60 sekundi
    // 60 sekundi vo idnina e ova validno da se zeme od CACHE["Strumica"]
  ) {
    console.log("Data is from cache");
    return CACHE[city];
  }

  const URL = `${
    getSection("weather").API_URL
  }/weather?q=${city}&units=metric&appid=${getSection("weather").api_key}`;
  //   https://api.openweathermap.org/data/2.5/weather?q=Strumica&units=metric&appid=VASIOT_API_KLUC

  try {
    const res = await fetch(URL);
    const data = await res.json();

    // CACHE["Strumica"] = {
    //     timestamp: 1234
    //     data: {}
    // }

    CACHE[city] = {
      timestamp: new Date().getTime() / 1000,
      data: data,
    };

    return data;
  } catch (err) {
    throw err;
  }
};

const getFiveDaysForecastForCity = async (lat, lon) => {
  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  const URL = `${
    getSection("weather").API_URL
  }/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${
    getSection("weather").api_key
  }`;

  try {
    const res = await fetch(URL);
    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getCityWeather,
  getFiveDaysForecastForCity,
};
