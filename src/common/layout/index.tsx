import { ReactNode } from "react";

import { Menu } from "@/components/header";

interface LayoutProps {
  children: ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="size-auto bg-mainColor">
      <Menu />
      <main>{children}</main>
    </div>
  );
};
