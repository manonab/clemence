import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Images } from "@/common/images";
import { RedArrow } from "@assets/utils/red-arrow-service";

interface RouageAnimationProps {
  text1?: string;
  text2?: string;
  start: number;
  end: number;
  color?: string;
  isMosaic?: boolean;
  otherEnd?: number;
  otherStart?: number;
}

export const RouageAnimation: React.FC<RouageAnimationProps> = ({
  text1,
  text2,
  start,
  end,
  color,
  isMosaic,
  otherEnd,
  otherStart,
}) => {
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(() => {
      setScrollProgress(scrollY.get());
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  const motionValueToScroll = (value: number): number => {
    if (typeof window === "undefined") {
      return 0;
    }

    const scrollRange: number = window.innerHeight * 3;
    const motionRange: number = end - start;
    return (value / scrollRange) * motionRange + start;
  };

  const motionOtherValueToScroll = (value: number): number => {
    if (
      typeof window === "undefined" ||
      otherEnd === undefined ||
      otherStart === undefined
    ) {
      return 0;
    }

    const scrollRange: number = window.innerHeight * 3;
    const motionRange: number = otherEnd - otherStart;
    return (value / scrollRange) * motionRange + otherStart;
  };

  return (
    <>
      {isMosaic ? (
        <div className="flex w-full flex-wrap gap-4 md:gap-6">
          <motion.div
            className="flex items-center justify-evenly gap-8 md:gap-12"
            style={{
              x: motionValueToScroll(scrollProgress),
            }}
          >
            <Image
              src={Images.PostMosaic1}
              alt="instagram post"
              className="w-[150px] md:w-[350px]" // Ajustement de taille pour mobile
            />
            <Image
              src={Images.PostMosaic2}
              alt="instagram post"
              className="mb-4 w-[130px] md:mb-10 md:w-[310px]"
            />
            <Image
              src={Images.PostMosaic3}
              alt="instagram post"
              className="w-[150px] md:w-[350px]"
            />
            <Image
              src={Images.PostMosaic4}
              alt="instagram post"
              className="w-[150px] md:w-[350px]"
            />
            <Image
              src={Images.PostMosaic1}
              alt="instagram post"
              className="w-[150px] md:w-[350px]"
            />
            <Image
              src={Images.PostMosaic3}
              alt="instagram post"
              className="w-[150px] md:w-[350px]"
            />
            <Image
              src={Images.PostMosaic6}
              alt="instagram post"
              className="w-[150px] md:w-[350px]"
            />
          </motion.div>
          <motion.div
            className="flex items-center justify-evenly gap-8 md:gap-12"
            style={{
              x: motionOtherValueToScroll(scrollProgress),
            }}
          >
            <Image
              src={Images.PostMosaic6}
              alt="instagram post"
              className="w-[150px] md:w-[350px]"
            />
            <Image
              src={Images.PostMosaic5}
              alt="instagram post"
              className="mb-4 w-[130px] md:mb-10 md:w-[310px]"
            />
            <Image
              src={Images.PostMosaic4}
              alt="instagram post"
              className="w-[150px] md:w-[350px]"
            />
            <Image
              src={Images.PostMosaic2}
              alt="instagram post"
              className="mb-4 w-[130px] md:mb-10 md:w-[310px]"
            />
            <Image
              src={Images.PostMosaic1}
              alt="instagram post"
              className="w-[150px] md:w-[350px]"
            />
            <Image
              src={Images.PostMosaic3}
              alt="instagram post"
              className="w-[150px] md:w-[350px]"
            />
            <Image
              src={Images.PostMosaic6}
              alt="instagram post"
              className="w-[150px] md:w-[350px]"
            />
          </motion.div>
        </div>
      ) : (
        <motion.div
          className="flex w-screen items-center gap-4 md:gap-12"
          style={{
            x: motionValueToScroll(scrollProgress),
          }}
        >
          <h1
            className={`font-marsdenBlack text-[80px] md:text-[200px] leading-loose ${color}`}
          >
            {text1}
          </h1>
          <RedArrow />
          <h1
            className={`font-marsdenBlack text-[80px] md:text-[200px] leading-loose ${color}`}
          >
            {text2}
          </h1>
        </motion.div>
      )}
    </>
  );
};

export default RouageAnimation;
