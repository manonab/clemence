import { useRouter } from 'next/router';
import { Menu } from '@/components/header';
import { ReactNode, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.dataLayer.push({
        event: 'pageview',
        page: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TQSBRQLV"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      </body>
      <div className="h-auto bg-mainColor w-auto">
        <Menu />
        <main>{children}</main>
      </div>
    </>
  );
};

