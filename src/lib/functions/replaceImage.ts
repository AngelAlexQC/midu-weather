export const replaceImage = (original: string) => {
  // Get the image name
  const imageName = original.split('/').pop();
  // Get the image name without extension
  const code = imageName?.split('.').shift();
  if (code === '113') {
    // Check time of day
    const hour = new Date().getHours();
    if (hour < 6 || hour > 18) {
      return '/img/conditions/clear-night.svg';
    }
  }
  return `/img/conditions/${code}.svg`;
};
