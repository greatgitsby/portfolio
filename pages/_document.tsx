import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Favicon and app icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#D4503C" />
        <meta name="msapplication-TileColor" content="#FDFDF9" />
        <meta name="theme-color" content="#fff" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Trey Moen" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moen.ai" />
        <meta property="og:image" content="/img/me.jpg" />
        <meta property="og:description" content="Portfolio and blog of Trey Moen" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Google Fonts preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
