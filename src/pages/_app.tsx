import { Layout } from "@/common/layout";
import "./globals.css";
import type { AppProps } from "next/app";
import { HeaderColorProvider } from "@/context";

function MyApp({ Component, pageProps }: AppProps) {
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
