import { useState, useEffect } from "react";

interface Breakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
}

const DEFAULT_BREAKPOINTS: Breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
};

type ScreenSize = "mobile" | "tablet" | "desktop" | "largeDesktop";

const useResponsive = (breakpoints: Breakpoints = DEFAULT_BREAKPOINTS) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(
    typeof window !== "undefined"
      ? getScreenSize(window.innerWidth, breakpoints)
      : "desktop", // default if SSR
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return; // Prevent running on the server
    }

    const handleResize = () => {
      const newScreenSize = getScreenSize(window.innerWidth, breakpoints);
      setScreenSize(newScreenSize);
    };

    window.addEventListener("resize", handleResize);

    // Initial call to set the screen size based on the current window width
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoints]);

  return screenSize;
};

const getScreenSize = (width: number, breakpoints: Breakpoints): ScreenSize => {
  if (width < breakpoints.mobile) {
    return "mobile";
  } else if (width < breakpoints.tablet) {
    return "tablet";
  } else if (width < breakpoints.desktop) {
    return "desktop";
  } else {
    return "largeDesktop";
  }
};

export default useResponsive;
