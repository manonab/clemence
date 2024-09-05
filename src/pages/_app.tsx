import type { AppProps } from "next/app";

import { Layout } from "@/common/layout";
import "./globals.css";
import { HeaderColorProvider } from "@/context";
import { AnimationProvider } from "@/context/animation-context";
interface Props {
  event: string;
  page: string;
}
declare global {
  interface Window {
    dataLayer: Props[];
  }
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimationProvider>
      <HeaderColorProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HeaderColorProvider>
    </AnimationProvider>
  );
}

export default MyApp;
