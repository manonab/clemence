import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowBack } from "@mui/icons-material";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";
import { NextPage } from "next";
import { BigArrow } from "@assets/big-arrow";

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
      <div>
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
      </div>
      <div className="md:border-t-[1px] md:border-black md:w-full md:my-20 hidden" />
      <div className="w-full md:py-[250px] py-[150px] bg-saumon">
        <Image src={Images.newlogo} className="md:w-[400px] md:h-[350px] w-[100px] mx-auto" alt="newlogo" />
      </div>
      <div className={`md:py-[250px] py-[150px] w-full ${showYellowBackground && "bg-yellowHome"}`}>
        <Image src={Images.capichelogo} className="mx-auto md:w-[600px] md:h-[150px] w-[250px]" alt="capiche" />
      </div>
    </div>
  );
}
export default LogoFolio;