import type { AppProps } from 'next/app';

import { Analytics } from '@vercel/analytics/react';

import ThemeProvider from '@mui/system/ThemeProvider';

import "../styles/global.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
