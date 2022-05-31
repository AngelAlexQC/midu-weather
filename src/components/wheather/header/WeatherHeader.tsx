import { replaceImage } from 'lib/functions/replaceImage';
import { Place } from 'lib/interfaces/place';
import { Weather } from 'lib/interfaces/weather';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { WeatherSearch } from 'components/wheather/search/WeatherSearch';
import styles from './WeatherHeader.module.scss';
interface WeatherHeaderProps {
  weather: Weather;
  onChangeLocation: (location: Place) => void;
}
export const WeatherHeader: FunctionComponent<WeatherHeaderProps> = ({
  weather,
  onChangeLocation,
}) => {
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
