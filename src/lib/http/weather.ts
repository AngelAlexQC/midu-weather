export const weather = async (search: string) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': process.env.RAPID_API_WEATHER_HOST as string,
      'X-RapidAPI-Key': process.env.RAPID_API_KEY as string,
    },
  };

  const url = `https://${process.env.RAPID_API_WEATHER_HOST}/current.json?q=${search}`;

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
