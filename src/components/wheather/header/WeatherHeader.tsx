import { Place } from 'lib/interfaces/place';
import { Weather } from 'lib/interfaces/weather';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { WeatherSearch } from '../search/WeatherSearch';
import styles from './WeatherHeader.module.scss';
interface WeatherHeaderProps {
  weather: Weather;
  onChangeLocation: (location: Place) => void;
}
export const WeatherHeader: FunctionComponent<WeatherHeaderProps> = ({
  weather,
  onChangeLocation,
}) => {
  const replaceImage = (original: string) => {
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
  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between">
          <div className={styles.cityName}>
            <i className={`fa fa-map-marker ${styles.marker}`}></i>
            <span>
              {weather.location.name},&nbsp;{weather.location.country}
            </span>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className={styles.temperature}>
            <Image
              src={replaceImage(weather.current.condition.icon)}
              alt={weather.current.condition.text}
              width={220}
              height={220}
            />
            <span className={styles.temp}>{weather.current.temp_c}°</span>
            <span className={styles.status}>
              {weather.current.condition.text}
            </span>
            <span className={styles.status}>
              Last updated at: {weather.current.last_updated}
            </span>
          </div>
        </div>
        <WeatherSearch onSelect={onChangeLocation} />
      </div>
    </>
  );
};
