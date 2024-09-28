import { ArrowBack } from "@mui/icons-material";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { Link } from "react-scroll";

import { Images } from "@/common/images";
import { BigArrow } from "@assets/big-arrow";

const LogoFolio: NextPage = () => {
  const [switchColor, setSwitchColor] = useState<boolean>(false);
  // const containerRef = useRef<HTMLDivElement | null>(null);
  const capicheRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (capicheRef.current) {
  //       const containerRect = capicheRef.current.getBoundingClientRect();
  //       const scrollPosition = window.scrollY || window.pageYOffset;
  //       const threshold = containerRect.top + containerRect.height / 0.5;
  //       if (scrollPosition > threshold) {
  //         setSwitchColor(true);
  //       } else {
  //         setSwitchColor(false);
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [capicheRef]);

  return (
    <div>
      <div className="h-full bg-customRed mt-28">
        <div className="flex flex-col items-start w-[500px] ml-20">
          <p className="font-marsdenHeavy text-mainColor uppercase text-redHome pt-28 leading-[90%] text-[350px] text-left">
            Logo-<br></br>folio
          </p>
          <motion.div
            className="my-20 flex flex-col items-center gap-3 mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...timing, delay: 0.6 }}
          >
            <BigArrow />
            <p className="font-footer font-bold uppercase leading-[20px]">
              DISCOVER
            </p>
          </motion.div>
        </div>
      </div>
      <div
        ref={capicheRef}
        className="flex items-center h-screen justify-center mx-20"
      >
        <Image
          src={Images.newlogo}
          className="mx-auto size-auto"
          alt="portfolio logo"
        />
        <Image
          src={Images.capichelogo}
          className="mx-auto w-[600px] h-[150px]"
          alt="capiche logo"
        />
      </div>
      <div className="flex items-center justify-between mx-16 mb-10 uppercase font-footer">
        <div
          onClick={() => router.push("/projects")}
          className="hover:cursor-pointer"
        >
          Retour
        </div>
        <div
          className="uppercase font-extrabold hover:cursor-pointer"
          onClick={() => router.push("/projets/mosaic")}
        >
          Prochain projet
        </div>
      </div>
    </div>
  );
};
export default LogoFolio;
