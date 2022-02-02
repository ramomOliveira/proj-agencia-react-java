import Head from 'next/head';
import Script from 'next/script';
import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Agência</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Spinnaker&display=swap"
          rel="stylesheet"
        />
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-1TWKM71G4W"
        />

        <Script strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1TWKM71G4W');`}
        </Script>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
