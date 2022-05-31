import { FunctionComponent, ReactNode, useContext } from 'react';
import { WeatherContext } from 'src/context/WeatherContextProvider';
import styles from './MainLayout.module.scss';
export const MainLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const { background } = useContext(WeatherContext);
  return (
    <main
      className={`${styles.main}`}
      style={{
        background: `url(${background}) no-repeat center center fixed`,
      }}
    >
      <img
        className={`card-img ${styles.img} `}
        src={background}
        alt="MiduWeather"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://picsum.photos/600/1200/?blur';
        }}
      />
      <div className={`card-img-overlay justify-content-start ${styles.main}`}>
        {children}
      </div>
    </main>
  );
};
