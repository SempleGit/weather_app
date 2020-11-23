import { getImage } from "./getImage";
import { getWeather, weatherData } from "./getWeather";
import { renderTemp } from "./renderTemp";
import "./style.css";

const getTemp = async (city, country) => {
  try {
    await getWeather(city, country);
  } catch {
    cityError();
    return;
  }
  await getImage(weatherData.tempK);
  clearError();
  renderTemp();
};

const updateUnits = (e) => {
  const item = document.querySelector(".unitButton");
  item.value = item.value == "F" ? "C" : "F";
  item.textContent = `Current Units ${item.value}`;
  if (!document.querySelector(".temp-display")) {
    return;
  }
  renderTemp();
};

const cityError = () => {
  document.querySelector(".city-error").classList.add("city-error-display");
};

const clearError = () => {
  document.querySelector(".city-error").classList.remove("city-error-display");
};

(function () {
  document.querySelector(".city-input").addEventListener("focus", clearError);

  document.querySelector(".unitButton").addEventListener("click", updateUnits);

  document.querySelector(".temp").addEventListener("click", updateUnits);

  document.querySelector(".getLocation").addEventListener("click", (e) => {
    e.preventDefault();
    //validate form inputs
    const city = e.target.form.elements.city.value;
    const country = e.target.form.elements.country.value;
    e.target.form.reset();
    getTemp(city, country);
  });
})();
