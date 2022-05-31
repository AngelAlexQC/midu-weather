export const searchPlace = async (search: string) => {
  const citiesPromise = fetch(`/api/autocomplete?search=${search}`);
  const result = await citiesPromise;
  const cities = await result.json();
  return cities;
};

export const getWeather = async (location: string) => {
  const weatherPromise = fetch(`/api/weather?search=${location}`);
  const result = await weatherPromise;
  const weather = await result.json();
  return weather;
};

export const getBackground = async (search: string) => {
  const backgroundPromise = fetch(`/api/background?search=${search}`);
  const result = await backgroundPromise;
  const background = await result.json();
  return background;
};
