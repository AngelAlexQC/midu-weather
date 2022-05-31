import { FunctionComponent } from 'react';
import styles from './Footer.module.scss';
export const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by{' '}
      <a href="https://www.linkedin.com/in/aquirozdev/" target="_blank">
        Ángel Quiroz
      </a>
    </footer>
  );
};
