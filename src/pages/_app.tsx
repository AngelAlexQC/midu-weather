import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MainLayout } from 'layout/main-layout/MainLayout';
import Head from 'next/head';
import Script from 'next/script';
import WeatherContextProvider from 'src/context/WeatherContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MiduWeather | Ángel Quiroz</title>
      </Head>
      <WeatherContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </WeatherContextProvider>
      <Script src="/js/font-awesome.js" />
    </>
  );
}

export default MyApp;
