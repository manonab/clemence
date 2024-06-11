import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { useHeaderColor } from "@/context";

interface BgProps {
  isVisible: boolean;
}

const BackgroundSlider: React.FC<BgProps> = ({
  isVisible = false,
}: BgProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHovered(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [setHeaderColor]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={`animate__animated animate__fadeInUpBig animate__delay-1.3s ${!isVisible ? "hidden" : "bg_slider absolute inset-0 -top-20 z-10 flex size-full items-start justify-between md:min-h-[910px]"} ${isHovered && "hovered"}`}
    >
      <div className="w-full flex-col">
        <p
          className={`move-left-to-right font-neueExtra text-[245px] uppercase leading-[200px]`}
          style={{ animationDelay: "2s" }}
        >
          for
        </p>
        <p
          className="move-left-to-right font-neueExtra text-[245px] uppercase leading-[200px]"
          style={{ animationDelay: "2.1s" }}
        >
          bold
        </p>
        <p
          className="move-left-to-right font-neueExtra text-[245px] uppercase leading-[200px]"
          style={{ animationDelay: "2.2s" }}
        >
          mind
        </p>
        <p
          className="move-left-to-right font-neueExtra text-[245px] uppercase leading-[200px]"
          style={{ animationDelay: "2.3s" }}
        >
          only
        </p>
      </div>
    </motion.div>
  );
};

export default BackgroundSlider;
