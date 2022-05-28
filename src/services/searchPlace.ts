export const searchPlace = async (search: string) => {
  const citiesPromise = fetch(`/api/autocomplete?search=${search}`);
  const result = await citiesPromise;
  const cities = await result.json();
  return cities;
};
