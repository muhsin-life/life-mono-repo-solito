import "raf/polyfill";
import "setimmediate";

import { Provider } from "app/provider";
import Head from "next/head";
import React from "react";

import "../global.css";
import { AppProps } from "next/app";
import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../public/font/Poppins/Poppins-Black.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/font/Poppins/Poppins-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../public/font/Poppins/Poppins-ExtraBold.ttf",
      style: "normal",
      weight: "800",
    },
    {
      path: "../public/font/Poppins/Poppins-ExtraLight.ttf",
      style: "normal",
      weight: "200",
    },
    {
      path: "../public/font/Poppins/Poppins-Light.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../public/font/Poppins/Poppins-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/font/Poppins/Poppins-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/font/Poppins/Poppins-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../public/font/Poppins/Poppins-Thin.ttf",
      style: "normal",
      weight: "100",
    },
  ],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </>
  );
}

export default MyApp;
