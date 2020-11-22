export { getImage, imageData };

const imageData = {};

const getImage = async (temp) => {
  const api = apiStore();
  let search = "grass";
  switch (true) {
    case temp > 310:
      search = "scorcher";
      break;
    case temp > 300:
      search = "hot";
      break;
    case temp > 294:
      search = "warm";
      break;
    case temp > 278:
      search = "cool";
      break;
    case temp > 272:
      search = "cold";
      break;
    case temp > 260:
      search = "frozen";
      break;
    case temp <= 260:
      search = "ice";
      break;
  }
  const url = `https://api.giphy.com/v1/stickers/translate?api_key=${api}&s=${search}`;
  const image = await fetch(url);
  const parsedImage = await image.json();
  parseImage(parsedImage);
};

const parseImage = (parseRequest) => {
  imageData.imageUrl = parseRequest.data.images.original.url;
}

const apiStore = () => {
  return "2xTslZwd1StN3QAijl7xTJ6AuZxgPK0W";
};
