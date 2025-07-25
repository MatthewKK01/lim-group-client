import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="description" content="ლიმ გრუფი - სანდო გადაწყვეტილება თქვენი სამშენებლო პროექტებისთვის" />
          {/* meta end */}

          {/* favicon begin */}
          <link rel="apple-touch-icon" sizes="512x512" href="/favicon/limgroup.svg" />
          <link rel="icon" type="image/png" sizes="512x512" href="/favicon/limgroup.svg" />
          <link rel="icon" type="image/png" sizes="512x512" href="/favicon/limgroup.svg" />
          <link rel="manifest" href="/favicon/manifest.json" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          {/* favicon */}

          {/* public assets begin */}
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/fontawesome.min.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          {/* public assets end */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
