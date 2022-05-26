import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MainLayout } from 'layout/main-layout/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@tabler/core@latest/dist/css/tabler.min.css"
      />
      <Component {...pageProps} />
      <script src="https://unpkg.com/@tabler/core@latest/dist/js/tabler.min.js" />
    </MainLayout>
  );
}

export default MyApp;
