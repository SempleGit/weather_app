import { imageData } from "./getImage";

export const setBackgroundImage = (element) => {
  try {
    element.style.backgroundImage = `url(${imageData.imageUrl})`;
  } catch {
    console.log("no image");
  };
};
