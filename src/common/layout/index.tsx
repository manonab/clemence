import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

import { Menu } from "@/components/header";

interface LayoutProps {
  children: ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.dataLayer.push({
        event: "pageview",
        page: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <div className="size-auto bg-mainColor">
      {/* <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TQSBRQLV"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      </body> */}
      <Menu />
      <main>{children}</main>
    </div>
  );
};
