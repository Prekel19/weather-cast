export const getImageURL = (name: string) => {
  return new URL(`../assets/weather-icons/${name}`, import.meta.url).href;
};
