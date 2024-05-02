import { Menu } from "@/components/header";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="h-auto bg-mainColor w-auto">
      <Menu />
      <main>{children}</main>
    </div>
  );
};
