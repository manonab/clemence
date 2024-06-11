import { motion, useViewportScroll } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Images } from "@/common/images";

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

const RouageAnimation: React.FC<RouageAnimationProps> = ({
  text1,
  text2,
  start,
  end,
  color,
  isMosaic,
  otherEnd,
  otherStart,
}) => {
  const { scrollY } = useViewportScroll();
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
        <div className="flex w-full flex-wrap gap-6">
          <motion.div
            className="flex items-center justify-evenly gap-12"
            style={{
              x: motionValueToScroll(scrollProgress),
            }}
          >
            <Image
              src={Images.PostMosaic1}
              alt="instagram post "
              className="size-[350px]"
            />
            <Image
              src={Images.PostMosaic2}
              alt="instagram post "
              className="mb-10 size-[310px]"
            />
            <Image
              src={Images.PostMosaic3}
              alt="instagram post "
              className="size-[350px]"
            />
            <Image
              src={Images.PostMosaic4}
              alt="instagram post "
              className="size-[350px]"
            />
            <Image
              src={Images.PostMosaic1}
              alt="instagram post "
              className="size-[350px]"
            />
            <Image
              src={Images.PostMosaic3}
              alt="instagram post "
              className="size-[350px]"
            />
            <Image
              src={Images.PostMosaic6}
              alt="instagram post "
              className="size-[350px]"
            />
          </motion.div>
          <motion.div
            className="flex items-center justify-evenly gap-12"
            style={{
              x: motionOtherValueToScroll(scrollProgress),
            }}
          >
            <Image
              src={Images.PostMosaic6}
              alt="instagram post "
              className="size-[350px]"
            />
            <Image
              src={Images.PostMosaic5}
              alt="instagram post "
              className="mb-10 size-[310px]"
            />
            <Image
              src={Images.PostMosaic4}
              alt="instagram post "
              className="size-[350px]"
            />
            <Image
              src={Images.PostMosaic2}
              alt="instagram post "
              className="mb-10 size-[310px]"
            />
            <Image
              src={Images.PostMosaic1}
              alt="instagram post "
              className="size-[350px]"
            />
            <Image
              src={Images.PostMosaic3}
              alt="instagram post "
              className="size-[350px]"
            />
            <Image
              src={Images.PostMosaic6}
              alt="instagram post "
              className="size-[350px]"
            />
          </motion.div>
        </div>
      ) : (
        <motion.div
          className="flex w-screen items-center gap-12"
          style={{
            x: motionValueToScroll(scrollProgress),
          }}
        >
          <h1
            className={`font-neueRegular text-[200px]  leading-loose ${color}`}
          >
            {text1}
          </h1>
          <Image
            src={Images.service}
            alt="arrow"
            width={800}
            className="size-[150px]"
          />
          <h1
            className={`font-neueRegular text-[200px]  leading-loose ${color}`}
          >
            {text2}
          </h1>
        </motion.div>
      )}
    </>
  );
};

export default RouageAnimation;
