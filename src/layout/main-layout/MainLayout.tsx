import { FunctionComponent, ReactNode } from 'react';
import styles from './MainLayout.module.scss';
export const MainLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <main className={`card ${styles.main} `}>
      <img
        className={`card-img ${styles.img} `}
        src="https://picsum.photos/600/1200/?blur"
        alt="MiduWeather"
      />
      <div className="card-img-overlay justify-content-start">{children}</div>
    </main>
  );
};
