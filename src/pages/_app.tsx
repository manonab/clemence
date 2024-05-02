import { Layout } from "@/common/layout";
import "./globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
export default MyApp;
