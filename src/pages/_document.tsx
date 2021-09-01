import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const url = 'https://nextjs.org/';
  const title = 'Demo Next.js';
  const description = 'Demo of Next.js';
  return (
    <Html>
      <Head />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={`${url}/ogp.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
