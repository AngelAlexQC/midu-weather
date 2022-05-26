import { FunctionComponent, ReactNode } from 'react';
import styles from './MainLayout.module.scss';
export const MainLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return <main className={styles.main}>{children}</main>;
};
