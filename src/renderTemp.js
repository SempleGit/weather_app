import { clearContent } from "./clearContent";
import { weatherData } from "./getWeather";
import { setBackgroundImage } from "./setBackgroundImage";

export const renderTemp = () => {
  const temp = document.querySelector(".temp");
  clearContent(temp);
  const units = getCurrentUnits();
  let t;
  switch (units) {
    case "C":
      t = weatherData.tempC;
      break;
    default:
      t = weatherData.tempF;
  }
  const p = document.createElement("p");
  p.classList.add("temp-display");
  p.textContent = `Current Temperature: ${t}°${units}`;
  temp.appendChild(p);
  setBackgroundImage(temp);
};

const getCurrentUnits = () => {
  return document.querySelector(".unitButton").value;
};