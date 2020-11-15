const getWeather = async (location = "indianola, us") => {
  const units = "imperial";
  const api = config.weather_api;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=
  ${location.replace(" ", "")}
  &APPID=${api}&units=${units}`;

  const request = await fetch(url);
  const parseRequest = await request.json();
  console.log(url);
  console.log(parseRequest);
  const temp = document.querySelector(".temp");
  temp.textContent = parseRequest.main.temp;
};

getWeather();
