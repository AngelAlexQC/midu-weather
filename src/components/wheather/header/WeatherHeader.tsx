import { Weather } from 'lib/interfaces/weather';
import { FunctionComponent } from 'react';
import { WeatherSearch } from '../search/WeatherSearch';
import styles from './WeatherHeader.module.scss';
interface WeatherHeaderProps {
  weather: Weather;
}
export const WeatherHeader: FunctionComponent<WeatherHeaderProps> = ({
  weather,
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
          <div className="btn btn-ghost-light">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className={styles.temperature}>
            <span>{weather.current.temp_c}°</span>
            <span className={styles.status}>
              {weather.current.condition.text}
            </span>
          </div>
        </div>
        <WeatherSearch />
      </div>
    </>
  );
};
