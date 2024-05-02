import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";

import Image from "next/image";
import { useHeaderColor } from "@/context";
import { Images } from "@/common/images";
import { NextPage } from "next";
import { BigArrow } from "@assets/big-arrow";

const PortFolio: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const controls = useAnimation();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 }
        });
      } else {
        controls.start({
          opacity: 0,
          x: 100,
          transition: { duration: 0.5 }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);


  useEffect(() => {
    setHeaderColor("mainColor")
  }, [setHeaderColor]);

  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const handleScrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft += 380;
    }
  };

  const portfolioContent = [
    { title: "Concept.", content: "J'ai conçu ce portfolio comme une introduction à mon univers, mon style et mes valeurs. Des arrière-plans neutres mais des couleurs de texte saturées, une police douce mais imposante... L’ensemble se pose en miroir de mes engagements et croyances : un design simple, épuré mais résolument affirmé." },
    { title: "Intention", content: "audacieux, fluide, engagé" },
    { title: "Réalisation", content: "J’ai veillé à ce que ce portfolio présente une cohérence entre la version mobile et web, tout en offrant une expérience utilisateur spécifique à chaque support." },
  ];

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="h-full flex-col items-center justify-center mx-auto w-full">
      <div className="mx-5 w-8" onClick={handleGoBack}><ArrowBack /></div>

      <div className="flex-col mt-10 mb-12">
        <p className="uppercase font-neueRegular md:text-title text-capicheMobile text-redHome text-center mt-[180px] mb-[100px]">Portfolio</p>
        <motion.div
          className="mx-auto flex-col flex items-center gap-3 mb-[150px]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...timing, delay: 0.6 }}
        >
          <BigArrow />
          <p className="font-footer uppercase font-bold leading-[20px] text-[14px]">DISCOVER</p>
        </motion.div>
      </div>
      <div className="w-auto mt-6 mb-10 mx-10">
        <p className="font-neueCondensed text-left leading-[90%] text-orange text-[30px]">Changer les choses, une<br></br> idée à la fois. </p>
      </div>
      {/* <motion.div^
          initial={{ opacity: 0, x: "100%" }}
          animate={controls}
        >
      </motion.div>  */}
      {/* <img src={Images.bearMobilePortfolio} className='absolute right-0' /> */}

      <div className="flex gap-6 items-start w-full overflow-auto h-full size-12 px-4 mb-10">
        {portfolioContent.map((content, index) => (
          <div key={index} className="flex flex-col items-start pl-6 pb-6">
            <p className="text-redHome font-neueSemiBold lowercase text-[25px] mb-5">{content.title}</p>
            <p className="font-footer text-[16px] min-w-[320px]">{content.content}</p>
          </div>
        ))}
      </div>
      <div className="bg-saumon flex flex-col gap-3 justify-center py-10">
        <div className="flex gap-6 items-center w-full overflow-auto h-full size-12 px-4 py-6" ref={contentRef}>
          <Image src={Images.screenPortFolio1} width={350} className="pl-6" alt="portfolio1" />
          <Image src={Images.service} className="w-8" onClick={handleScrollRight} alt="service" />
          <Image src={Images.screenPortFolio2} width={350} alt="portfolio2" />
          <Image src={Images.service} className="w-8" onClick={handleScrollRight} alt="service" />
          <Image src={Images.screenPortFolio3} width={350} alt="portfolio3" />
        </div>
      </div>
      <div className="my-20">
        <div onClick={() => router.push('/projects')} className="py-2 px-2 transition-all duration-300 ease-in-out font-bold text-[10px] text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border rounded-full min-w-[100px] max-w-[130px] mx-auto">
          Autres projets
        </div>
      </div>

    </div>
  );
}
export default PortFolio;