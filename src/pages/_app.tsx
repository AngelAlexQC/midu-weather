import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MainLayout } from 'layout/main-layout/MainLayout';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MiduWeather | Ángel Quiroz</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Script src="/js/font-awesome.js" />
    </>
  );
}

export default MyApp;
