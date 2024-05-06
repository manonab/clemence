import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from "@/common/layout";
import "./globals.css";
import type { AppProps } from "next/app";
import { HeaderColorProvider } from "@/context";

const GTM_ID = 'GTM-TQSBRQLV';
declare global {
  interface Window {
    dataLayer: any[];
  }
}
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.dataLayer.push({
        event: 'pageview',
        page: url,
      });
    };

    const initGTM = () => {
      const script = document.createElement('script');
      script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');`;

      document.head.appendChild(script);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    initGTM();

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <HeaderColorProvider>
      <Layout>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <Component {...pageProps} />
        </main>
      </Layout>
    </HeaderColorProvider>
  );
}

export default MyApp;
