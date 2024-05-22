import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import { Images } from '@/common/images';

interface RouageAnimationProps {
  text1: string;
  text2: string;
  start: number;
  end: number;
  color: string;
}

const RouageAnimation: React.FC<RouageAnimationProps> = ({ text1, text2, start, end, color }) => {
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
    if (typeof window === 'undefined') {
      return 0;
    }

    const scrollRange: number = window.innerHeight * 3;
    const motionRange: number = end - start;
    return ((value / scrollRange) * motionRange) + start;
  };

  return (
    <motion.div
      className="flex items-center gap-12 w-screen"
      style={{
        x: motionValueToScroll(scrollProgress),
      }}
    >
      <h1 className={`text-[200px] font-neueRegular  leading-loose ${color}`}>{text1}</h1>
      <Image src={Images.service} alt='arrow' width={800} className='size-[150px]' />
      <h1 className={`text-[200px] font-neueRegular  leading-loose ${color}`}>{text2}</h1>
    </motion.div>
  );
};

export default RouageAnimation;
