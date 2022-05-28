import { FunctionComponent } from 'react';
import { WeatherSearch } from '../search/WeatherSearch';
import styles from './WeatherHeader.module.scss';
interface WeatherHeaderProps {
  city: string;
  country: string;
  temperature: number;
  status: string;
}
export const WeatherHeader: FunctionComponent<WeatherHeaderProps> = ({
  city,
  country,
  temperature,
  status,
}) => {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between">
          <div className={styles.cityName}>
            <i className={`fa fa-map-marker ${styles.marker}`}></i>
            <span>
              {city},&nbsp;{country}
            </span>
          </div>
          <div className="btn btn-ghost-light">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className={styles.temperature}>
            <span>{temperature}°</span>
            <span className={styles.status}>{status}</span>
          </div>
        </div>
        <WeatherSearch />
      </div>
    </>
  );
};
