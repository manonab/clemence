import { ArrowBack } from "@mui/icons-material";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";

import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";
import { BigArrow } from "@assets/big-arrow";

const LogoFolio: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const [showYellowBackground, setShowYellowBackground] =
    useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const capicheRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  useEffect(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]);

  useEffect(() => {
    const handleScroll = () => {
      if (capicheRef.current) {
        const containerRect = capicheRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY || window.pageYOffset;
        const threshold = containerRect.top + containerRect.height / 0.5;
        if (scrollPosition > threshold) {
          setShowYellowBackground(true);
        } else {
          setShowYellowBackground(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [capicheRef]);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex size-full flex-col">
      <div className="mx-5 flex w-8 md:hidden" onClick={handleGoBack}>
        <ArrowBack />
      </div>
      <div className="my-56 h-screen">
        <Link to="logo_target" className="hover:cursor-pointer" smooth={true}>
          <p className="mt-40 text-center font-neueRegular text-titleMobile uppercase text-redHome md:text-title">
            Logofolio
          </p>
          <motion.div
            className="mx-auto my-20 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...timing, delay: 0.6 }}
          >
            <BigArrow />
            <p className="font-footer font-bold uppercase leading-[20px]">
              DISCOVER
            </p>
          </motion.div>
        </Link>
      </div>
      <div
        ref={containerRef}
        id="logo_target"
        className={`h-screen w-full bg-mainColor py-[150px] `}
      >
        <Image
          src={Images.newlogo}
          className="mx-auto size-auto md:h-[350px] md:w-[400px]"
          alt="clemence logo"
        />
      </div>
      <div
        ref={capicheRef}
        className={` ${showYellowBackground ? "bg-yellowHome" : "bg-mainColor"} h-screen w-full py-[150px] md:py-[250px]`}
      >
        <Image
          src={Images.capichelogo}
          className="mx-auto size-auto md:h-1/2"
          alt="capiche logo"
        />
      </div>
    </div>
  );
};
export default LogoFolio;
