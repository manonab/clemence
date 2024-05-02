import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHeaderColor } from "@/context";

interface BgProps {
  isVisible: boolean;
}

const BackgroundSlider: React.FC<BgProps> = ({ isVisible = false }: BgProps) => {
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
      className={`animate__animated animate__fadeInUpBig animate__delay-1.3s ${!isVisible ? "hidden" : "w-full md:min-h-[910px] flex justify-between items-start z-10 h-full inset-0 absolute -top-20 bg_slider"} ${isHovered && "hovered"}`}
    >
      <div className="flex-col">
        <p className={`move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra`} style={{ animationDelay: "2s" }}>
          for
        </p>
        <p className="move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra" style={{ animationDelay: "2.1s" }}>
          bold
        </p>
        <p className="move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra" style={{ animationDelay: "2.2s" }}>
          mind
        </p>
        <p className="move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra" style={{ animationDelay: "2.3s" }}>
          only
        </p>
      </div>
    </motion.div>
  );
};

export default BackgroundSlider;