import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowBack } from "@mui/icons-material";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";
import { NextPage } from "next";
import { BigArrow } from "@assets/big-arrow";
import { Link } from "react-scroll";

const LogoFolio: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const [showSaumonBackground, setShowSaumonBackground] = useState<boolean>(false);
  const [showYellowBackground, setShowYellowBackground] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const capicheRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  useEffect(() => {
    setHeaderColor("linear-background")
  }, [setHeaderColor]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY || window.pageYOffset;
        const threshold = containerRect.top + containerRect.height / 2;
        if (scrollPosition > threshold) {
          setShowSaumonBackground(true);
        } else {
          setShowSaumonBackground(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

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
    <div className="h-full flex-col flex w-full">
      <div className="mx-5 w-8 flex md:hidden" onClick={handleGoBack}><ArrowBack /></div>
      <div className="h-screen">
        <Link to="logo_target" className="hover:cursor-pointer" smooth={true}>
        <p className="uppercase font-neueRegular md:text-title text-titleMobile text-redHome text-center my-40">Logofolio</p>
        <motion.div
          className="mx-auto flex-col flex items-center gap-3 mb-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...timing, delay: 0.6 }}
        >
          <BigArrow />
          <p className="font-footer uppercase font-bold leading-[20px]">DISCOVER</p>
        </motion.div>
        </Link>
      </div>
      <div ref={containerRef} id="logo_target" className={` ${showSaumonBackground ? 'bg-saumon' : 'bg-mainColor'} w-full md:py-[250px] py-[150px] h-screen`} >
        <Image src={Images.newlogo} className="md:w-[400px] md:h-[350px] w-auto h-auto mx-auto" alt="clemence logo" />
      </div>
      <div ref={capicheRef} className={` ${showYellowBackground ? 'bg-yellowHome' : 'bg-mainColor'} w-full md:py-[250px] py-[150px] h-screen`} >
        <Image src={Images.capichelogo} className="md:h-1/2 w-auto h-auto mx-auto" alt="capiche logo" />
      </div>
    </div>
  );
}
export default LogoFolio;