import React, { createContext, ReactNode, useContext, useState } from "react";

interface HeaderProps {
  children: ReactNode;
}

interface HeaderColorContextProps {
  headerColor: string;
  textColor: boolean;
  setHeaderColor: (color: string) => void;
  setTextColor: (color: boolean) => void;
}

const HeaderColorContext = createContext<HeaderColorContextProps>({
  headerColor: "",
  textColor: false,
  setHeaderColor: () => {},
  setTextColor: () => {},
});

export const useHeaderColor = () => useContext(HeaderColorContext);

export const HeaderColorProvider: React.FC<HeaderProps> = ({
  children,
}: HeaderProps) => {
  const [headerColor, setHeaderColor] = useState<string>("");
  const [textColor, setTextColor] = useState<boolean>(false);
  return (
    <HeaderColorContext.Provider
      value={{ headerColor, setHeaderColor, textColor, setTextColor }}
    >
      {children}
    </HeaderColorContext.Provider>
  );
};
