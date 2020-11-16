const getWeather = async (location = "indianola, us") => {
  const units = "imperial";
  const api = config.weather_api;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=
  ${location.replace(" ", "")}
  &APPID=${api}`;

  const request = await fetch(url);
  const parseRequest = await request.json();
  console.log(parseRequest);
  return parseRequest;
};

const getTemp = async () => {
  const temp = document.querySelector(".temp");
  const p = document.createElement("p");
  const temperature = await getWeather();
  const tf =
    Math.round((((temperature.main.temp - 273.15) * 9) / 5 + 32) * 100) / 100;
  p.textContent = `Current temperature: ${tf}°F`;
  temp.appendChild(p);
  getImage();
};

const getImage = async () => {
  const api = config.giphy_api;
  const search = "cold";
  const url = `https://api.giphy.com/v1/stickers/translate?api_key=${api}&s=${search}`;
  const image = await fetch(url);
  const parsedImage = await image.json();
  console.log(parsedImage);
  const temp = document.querySelector(".temp");
  const i = document.createElement("img");
  i.src = parsedImage.data.images.original.url;
  temp.appendChild(i);
};
