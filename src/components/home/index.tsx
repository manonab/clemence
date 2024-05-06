import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";

import { Close, Construction } from "@mui/icons-material";
import Description from "./description";
import { useHeaderColor } from "@/context";
import { Images } from "@/common/images";
import Image from "next/image";
import { BigArrow } from "@assets/big-arrow";
import { Cookies } from "../cookies";

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
    <>
      {modalOpen && (
        <div className="w-full h-full">
          <div className="md:flex hidden fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div className="overflow-hidden md:h-[450px] md:w-1/3 rounded-2xl bg-white flex flex-col justify-around items-center relative">
              <div className="w-full flex flex-col gap-3 items-center justify-start">
                <div className="self-end p-2 hover:cursor-pointer" onClick={handleClose}><Close /></div>
              <p className="text-redHome font-neueRegular text-[60px] z-50">Psst...</p>
                <p className="text-footer text-m text-center mx-2">si tu veux vraiment vraiment voir ce site, sois<br></br> indulgent.e : il est encore en construction !</p>
              </div>
              <Image
                src={Images.inProgress}
                className="md:w-full md:h-full object-cover rounded-2xl"
                alt="inprogress"
              />
              <motion.div initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 150 }}
                className="absolute bottom-0 z-10">
                <Image src={Images.posh} alt="victoria beckam" className="w-full h-[200px]" />
              </motion.div>
            </div>
          </div>
          <div className="flex md:hidden fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div className="overflow-hidden md:h-[450px] md:w-1/3 rounded-2xl bg-white flex flex-col justify-around items-center relative">
              <div className="w-full flex flex-col gap-3 items-center justify-start">
                <div className="self-end p-2 hover:cursor-pointer" onClick={handleClose}><Close /></div>
                <p className="text-redHome font-neueRegular text-[60px] z-50">Psst...</p>
                <p className="text-footer text-m text-center mx-2">si tu veux vraiment vraiment voir ce site, sois<br></br> indulgent.e : il est encore en construction !</p>
            </div>
            <Image
              src={Images.inProgress}
                className="md:w-full md:h-full object-cover rounded-2xl"
              alt="inprogress"
            />
              <motion.div initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 150 }}
                className="absolute bottom-0 z-10">
                <Image src={Images.posh} alt="victoria beckam" className="w-full h-[200px]" />
              </motion.div>
            </div>
          </div>
        </div>
      )}
      {cookiesOpen &&
        <Cookies
          setIsOpen={handleCookiesClose}
        />
      }
      <ParallaxProvider>
        <Parallax speed={-30} className="hidden md:flex w-full flex-col justify-around items-center gap-4">
          <motion.div
            transition={{ ...timing, delay: 2 }}
            className="flex flex-col items-center justify-evenly h-screen">
            <p className="font-neueRegular text-redHome text-welcome text-center">Bienvenue</p>
            <div className="flex flex-col items-center gap-3 mb-20">
              <BigArrow />
              <p className="font-footer uppercase font-bold leading-[20px]">SCROLL & ROLL</p>
            </div>
          </motion.div>
        </Parallax>
        <Parallax speed={-15}>
          <Description />
        </Parallax>
      </ParallaxProvider>
    </>
  );
};

export default HomeComponent;
