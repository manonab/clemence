import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";


import { Close, Construction } from "@mui/icons-material";
import Description from "./description";
import { useRouter } from "next/router";
import { useHeaderColor } from "@/context";
import { Images } from "@/common/images";
import Image from "next/image";
import { BigArrow } from "../../../public/static/assets/big-arrow";

const timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const HomeComponent: React.FC = () => {
  const { setHeaderColor } = useHeaderColor();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setHeaderColor("#FCF6EF");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setModalOpen(false)
  }
  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
          <div className="h-[450px] w-[350px] rounded-2xl bg-white flex flex-col justify-around items-center relative">
            <div className="flex flex-col gap-3 items-center justify-start h-1/2">
              <div className="self-end" onClick={handleClose}><Close /></div>
              <p className="text-redHome font-neueRegular text-[60px] z-50">Psst...</p>
              <p className="text-footer text-m text-center mx-2">si tu veux vraiment vraiment voir ce<br></br> site, sois indulgent.e : il est encore<br></br> <span className="flex gap-0.5 items-center">en construction <Construction className="w-6" /></span></p>
              <div onClick={handleClose} className="mt-5 bg-mainColor z-50 transition-all duration-300 ease-in-out font-bold text-xs text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border rounded-full px-5 py-2 mx-auto">
                Bien noté!
              </div>
            </div>
            <Image
              src={Images.inProgress}
              className="h-1/2 z-10"
              alt="inprogress"
            />
            {/* <motion.img
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 150 }}
              src={Images.posh}
              className="absolute bottom-0 z-10"
            /> */}
          </div>
        </div>
      )}
      <ParallaxProvider>
        <Parallax speed={-30} className="hidden md:flex !w-full flex-col justify-around items-center gap-4">
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
