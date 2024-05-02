import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";

import Image from "next/image";
import { useHeaderColor } from "@/context";
import { Images } from "@/common/images";
import { NextPage } from "next";
import { BigArrow } from "@assets/big-arrow";
import { ArrowRight } from "@assets/arrow-right";

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
      <div className="flex flex-col md:hidden">
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
      <div className="md:flex hidden bg-saumon items-center">
        <div className="flex flex-col gap-6 items-start w-full overflow-auto h-full ml-28 my-28">
          <div className="flex flex-col items-start pl-6 pb-6">
            <p className="text-redHome font-neueSemiBold lowercase text-[50px] mb-2">Concept.</p>
            <p className="font-footer text-[18px] leading-[130%] min-w-[100px] max-w-1/3">J&lsquo;ai conçu ce portfolio comme une<br></br> introduction à mon univers, mon style et<br></br> mes valeurs. Des arrière-plans neutres<br></br> mais des couleurs de texte saturées,<br></br> une police douce mais imposante...<br></br> L’ensemble se pose en miroir de mes<br></br> engagements et croyances : un design<br></br> simple, épuré mais résolument affirmé.</p>
          </div>
          <div className="flex flex-col items-start pl-6 pb-6">
            <p className="text-redHome font-neueSemiBold lowercase text-[50px] mb-2">Intention</p>
            <p className="font-footer text-[18px] leading-[130%] min-w-[100px] max-w-1/3">audacieux, fluide, engagé</p>
          </div>
          <div className="flex flex-col items-start pl-6 pb-6">
            <p className="text-redHome font-neueSemiBold lowercase text-[50px] mb-2">Réalisation</p>
            <p className="font-footer text-[18px] leading-[130%] min-w-[100px] max-w-1/3">J&lsquo;ai veillé à ce que ce portfolio présente<br></br> une cohérence entre la version mobile et<br></br> web, tout en offrant une expérience<br></br> utilisateur spécifique à chaque support.</p>
          </div>
        </div>
        <Image src={Images.portfolioDW} alt="desktop screenshot" className="w-1/2 h-1/2" />
      </div>
      <div className="md:flex flex-col hidden bg-mainColor my-20  w-full">
        <div className="flex items-center justify-around">
          <div className="-mt-[300px]">
            <Image src={Images.portfolioScreen1} alt="mobile screen portfolio" />
          </div>
          <div className="">
            <Image src={Images.portfolioScreen2} alt="mobile screen portfolio" />
          </div>
          <div className="pt-[300px]">
            <Image src={Images.portfolioScreen3} alt="mobile screen portfolio" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col ml-28 mt-20">
            <p className="text-orange text-[62px] font-neueCondensed leading-[90%] mb-20">Changer les choses, une idée<br></br> à la fois.</p>
            <p className="text-justify font-footer text-[18px] leading-[150%] w-1/2">Lorem ipsum dolor sit amet consectetur. Interdum quis etiam egestas purus orci suscipit sollicitudin. Iaculis odio pulvinar augue urna. Lorem dignissim morbi pellentesque dolor congue faucibus. Cras habitant lorem velit aliquam commodo congue. Vitae eros morbi et varius sagittis eget.</p>
            <div
              onClick={() => router.push('/projects')}
              className="hover:cursor-pointer -ml-5 flex flex-col mt-[100px] w-[200px] pb-2 items-center justify-around">
              <span className="flex items-center gap-3">
                <p className="uppercase text-xs	font-footer">Autres projets</p>
                <ArrowRight />
              </span>
              <div className="border-b-black border-b-2 w-[150px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" />
            </div>
          </div>
          <div className="w-full mt-[200px] -mb-20">
            <Image src={Images.portfolioDB} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PortFolio;