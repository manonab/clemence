import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";

import Description from "./description";
import { useHeaderColor } from "@/context";
import { BigArrow } from "@assets/big-arrow";
import { Construction } from "../construction";
import { Link } from 'react-scroll';

const timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const HomeComponent: React.FC = () => {
  const { setHeaderColor } = useHeaderColor();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [cookiesOpen, setCookiesOpen] = useState<boolean>(false);

  useEffect(() => {
    setHeaderColor("#FCF6EF");
  }, [setHeaderColor]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCookiesOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  const handleClose = () => {
    setModalOpen(false);
  }

  const handleCookiesClose = () => {
    setCookiesOpen(false);

    setTimeout(() => {
      setModalOpen(true)
    }, 2000);
  }

  return (
    <ParallaxProvider>
      <Construction isVisible={modalOpen} setIsVisible={setModalOpen} />
      <Parallax speed={-30} className="hidden md:flex w-full flex-col justify-around items-center gap-4">
        <motion.div
          transition={{ ...timing, delay: 2 }}
          className="flex flex-col items-center justify-evenly h-screen">
          <p className="font-neueRegular text-redHome text-welcome text-center">Bienvenue</p>
          <Link to="scroll_target" className="hover:cursor-pointer" smooth={true}>
            <div className="flex flex-col items-center gap-3 mb-20">
              <BigArrow />
              <p className="font-footer uppercase font-bold leading-[20px]">SCROLL & ROLL</p>
            </div>
          </Link>
        </motion.div>
      </Parallax>
      <Parallax speed={-15}>
        <Description id="scroll_target" />
      </Parallax>
    </ParallaxProvider>
  );
};

export default HomeComponent;
