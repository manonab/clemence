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
import { Logo } from "@assets/utils/logo-clemence";

const LogoFolio: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const [showYellowBackground, setShowYellowBackground] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
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
          setShowYellowBackground(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHeaderColor]);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="h-full flex-col flex w-full" ref={containerRef}>
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
      <div className="md:border-t-[1px] md:border-black md:w-full md:my-20 hidden" />
      <div className="w-full md:py-[250px] py-[150px] bg-saumon h-screen" id="logo_target">
        <Image src={Images.newlogo} className="md:w-[400px] md:h-[350px] w-auto h-auto mx-auto" alt="newlogo" />
      </div>
      <div className="w-full md:py-[250px] py-[150px] bg-yellowHome h-screen" id="logo_target">
        <Image src={Images.capichelogo} className="md:h-1/2 w-auto h-auto mx-auto" alt="newlogo" />
      </div>
    </div>
  );
}
export default LogoFolio;