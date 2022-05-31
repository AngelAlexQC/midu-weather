import { FunctionComponent, ReactNode, useContext } from 'react';
import { WeatherContext } from 'src/context/WeatherContextProvider';
import styles from './MainLayout.module.scss';
export const MainLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const { background } = useContext(WeatherContext);
  return (
    <main className={`card ${styles.main} `}>
      <img
        className={`card-img ${styles.img} `}
        src={background}
        alt="MiduWeather"
      />
      <div className="card-img-overlay justify-content-start">{children}</div>
    </main>
  );
};
