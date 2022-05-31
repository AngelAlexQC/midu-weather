export const background = async (search: string) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': process.env.RAPID_API_IMAGE_HOST as string,
      'X-RapidAPI-Key': process.env.RAPID_API_KEY as string,
    },
  };

  const url = `https://${process.env.RAPID_API_IMAGE_HOST}/v2/?q=${search}&hl=es`;

  const response = await fetch(url, options);
  const data = await response.json();
  const { response: imageResponse } = data;
  const { images } = imageResponse;
  return images[0].image;
};
