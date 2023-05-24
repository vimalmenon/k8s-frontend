import React from "react";
import type { AppProps } from 'next/app';

const MyApp:React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
};

export default MyApp;