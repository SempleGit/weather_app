export { getWeather, weatherData };

const weatherData = {};

const getWeather = async (city, country) => {
  const WEATHER_API = apiStore();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city.replace(" ", "%20")},${country}
  &APPID=${WEATHER_API}`;
  console.log(url); 
  const request = await fetch(url);
  const parseRequest = await request.json();
  parseWeather(parseRequest);
  return parseRequest;
};

const parseWeather = (parseRequest) => {
  weatherData.tempK = parseRequest.main.temp;
  weatherData.tempC = Math.round((weatherData.tempK - 273.15) * 100) / 100;
  weatherData.tempF = Math.round((((weatherData.tempK - 273.15) * 9) / 5 + 32) * 100) / 100;
}

const apiStore = () => {
  const weatherApi = "c7b2f0eceb789c42af234af5545e6fca";
  return weatherApi;
};
