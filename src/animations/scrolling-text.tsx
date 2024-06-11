import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { Images } from "@/common/images";

const ScrollingText: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const scrollingTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollingTextRef.current) {
        const rect = scrollingTextRef.current.getBoundingClientRect();
        const isScrolled = rect.top < window.innerHeight / 2; // Vous pouvez ajuster cette valeur selon vos besoins
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="scrolling-text"
      ref={scrollingTextRef}
      className={`relative flex items-center justify-end gap-3`}
    >
      <p className="text-right font-neueRegular text-[160px] uppercase leading-[90%] text-redHome">
        CRÉER
      </p>
      <Image src={Images.service} alt="Service" />
      <p
        className={`text-right font-neueRegular text-[160px] uppercase leading-[90%] text-redHome ${
          scrolled ? styles.textTransition : styles.hidden
        }`}
      >
        CRÉER
      </p>
    </div>
  );
};

export default ScrollingText;
