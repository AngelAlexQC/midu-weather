import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@tabler/core@latest/dist/css/tabler.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="https://unpkg.com/@tabler/core@latest/dist/js/tabler.min.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
