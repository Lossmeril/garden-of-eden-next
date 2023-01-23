import "../styles/globals.scss";
import "../modules/i18n";
import type { AppProps } from "next/app";
import Layout from "../layouts/layout";
import Script from "next/script";
import { Provider } from "react-wrap-balancer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-SQBGDSK0QZ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SQBGDSK0QZ');
    `,
        }}
      />
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
