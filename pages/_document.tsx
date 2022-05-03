import { Html, Head, Main, NextScript } from "next/document";
import theme from "../styles/theme";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color={theme.palette.primary.main} />
        <meta name="msapplication-TileColor" content="#" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta property="og:title" content="Trey Moen" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moen.ai" />
        <meta property="og:image" content="/img/me.jpg" />
        <meta property="og:description" content="Portfolio and blog of Trey Moen" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}