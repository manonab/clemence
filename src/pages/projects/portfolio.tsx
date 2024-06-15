import { ArrowBack } from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";

import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";
import { ArrowRight } from "@assets/arrow-right";
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
          transition: { duration: 0.5 },
        });
      } else {
        controls.start({
          opacity: 0,
          x: 100,
          transition: { duration: 0.5 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  useEffect(() => {
    setHeaderColor("linear-background");
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
    {
      title: "Concept.",
      content:
        "J'ai conçu ce portfolio comme une introduction à mon univers, mon style et mes valeurs. Des arrière-plans neutres mais des couleurs de texte saturées, une police douce mais imposante... L’ensemble se pose en miroir de mes engagements et croyances : un design simple, épuré mais résolument affirmé.",
    },
    { title: "Intention", content: "audacieux, fluide, engagé" },
    {
      title: "Réalisation",
      content:
        "J’ai veillé à ce que ce portfolio présente une cohérence entre la version mobile et web, tout en offrant une expérience utilisateur spécifique à chaque support.",
    },
  ];

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="mx-auto size-full flex-col items-center justify-center">
      <div className="mx-5 flex w-8 md:hidden" onClick={handleGoBack}>
        <ArrowBack />
      </div>
      <div className="mb-12 mt-10 h-screen flex-col">
        <p className="mb-[100px] mt-[180px] text-center font-neueRegular text-capicheMobile uppercase text-redHome md:text-title">
          Portfolio
        </p>
        <Link
          to="portfolio_target"
          className="hover:cursor-pointer"
          smooth={true}
        >
          <motion.div
            className="mx-auto mb-[150px] flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...timing, delay: 0.6 }}
          >
            <BigArrow />
            <p className="font-footer text-[14px] font-bold uppercase leading-[20px]">
              DISCOVER
            </p>
          </motion.div>
        </Link>
      </div>
      <div className="flex flex-col md:hidden">
        <div className="mx-10 mb-10 mt-6 w-auto">
          <p
            className="text-left font-neueCondensed text-[30px] leading-[90%] text-orange"
            id="portfolio_desktop_target"
          >
            Changer les choses, une<br></br> idée à la fois.{" "}
          </p>
        </div>
        {/* <motion.div^
          initial={{ opacity: 0, x: "100%" }}
          animate={controls}
        >
      </motion.div>  */}
        {/* <img src={Images.bearMobilePortfolio} className='absolute right-0' /> */}

        <div className="mb-10 flex size-12 items-start gap-6 overflow-auto px-4">
          {portfolioContent.map((content, index) => (
            <div key={index} className="flex flex-col items-start pb-6 pl-6">
              <p className="mb-5 font-neueSemiBold text-[25px] lowercase text-redHome">
                {content.title}
              </p>
              <p className="min-w-[320px] font-footer text-[16px]">
                {content.content}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-3 bg-saumon py-10">
          <div
            className="flex size-12 items-center gap-6 overflow-auto px-4 py-6"
            ref={contentRef}
          >
            <Image
              src={Images.screenPortFolio1}
              width={350}
              className="pl-6"
              alt="portfolio1"
            />
            <Image
              src={Images.service}
              className="w-8"
              onClick={handleScrollRight}
              alt="service"
            />
            <Image src={Images.screenPortFolio2} width={350} alt="portfolio2" />
            <Image
              src={Images.service}
              className="w-8"
              onClick={handleScrollRight}
              alt="service"
            />
            <Image src={Images.screenPortFolio3} width={350} alt="portfolio3" />
          </div>
        </div>
        <div className="my-20">
          <div
            onClick={() => router.push("/projects")}
            className="mx-auto min-w-[100px] max-w-[130px] rounded-full border border-black p-2 text-center text-[10px] font-bold uppercase text-grayBlack transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-grayBlack hover:text-white"
          >
            Autres projets
          </div>
        </div>
      </div>

      <div
        className="hidden items-center bg-saumon md:flex"
        id="portfolio_target"
      >
        <div className="my-28 ml-28 flex size-full flex-col items-start gap-6 overflow-auto">
          <div className="flex flex-col items-start pb-6 pl-6">
            <p className="mb-2 font-neueSemiBold text-[50px] lowercase text-redHome">
              Concept.
            </p>
            <p className="max-w-1/3 min-w-[100px] font-footer text-[18px] leading-[130%]">
              J&lsquo;ai conçu ce portfolio comme une<br></br> introduction à
              mon univers, mon style et<br></br> mes valeurs. Des arrière-plans
              neutres<br></br> mais des couleurs de texte saturées,<br></br> une
              police douce mais imposante...<br></br> L’ensemble se pose en
              miroir de mes<br></br> engagements et croyances : un design
              <br></br> simple, épuré mais résolument affirmé.
            </p>
          </div>
          <div className="flex flex-col items-start pb-6 pl-6">
            <p className="mb-2 font-neueSemiBold text-[50px] lowercase text-redHome">
              Intention
            </p>
            <p className="max-w-1/3 min-w-[100px] font-footer text-[18px] leading-[130%]">
              audacieux, fluide, engagé
            </p>
          </div>
          <div className="flex flex-col items-start pb-6 pl-6">
            <p className="mb-2 font-neueSemiBold text-[50px] lowercase text-redHome">
              Réalisation
            </p>
            <p className="max-w-1/3 min-w-[100px] font-footer text-[18px] leading-[130%]">
              J&lsquo;ai veillé à ce que ce portfolio présente<br></br> une
              cohérence entre la version mobile et<br></br> web, tout en offrant
              une expérience<br></br> utilisateur spécifique à chaque support.
            </p>
          </div>
        </div>
        <Image
          src={Images.portfolioDW}
          alt="desktop screenshot"
          className="size-1/2"
        />
      </div>
      <div className="my-20 hidden w-full flex-col bg-mainColor  md:flex">
        <div className="flex items-center justify-around">
          <div className="-mt-[300px]">
            <Image
              src={Images.portfolioScreen1}
              alt="mobile screen portfolio"
            />
          </div>
          <div className="">
            <Image
              src={Images.portfolioScreen2}
              alt="mobile screen portfolio"
            />
          </div>
          <div className="pt-[300px]">
            <Image
              src={Images.portfolioScreen3}
              alt="mobile screen portfolio"
            />
          </div>
        </div>
        <div className="flex">
          <div className="ml-28 mt-28 flex flex-col">
            <p className="mb-20 font-neueCondensed text-[62px] leading-[90%] text-orange">
              Changer les choses, une idée<br></br> à la fois.
            </p>
            <p className="w-1/2 text-justify font-footer text-[18px] leading-[150%]">
              Lorem ipsum dolor sit amet consectetur. Interdum quis etiam
              egestas purus orci suscipit sollicitudin. Iaculis odio pulvinar
              augue urna. Lorem dignissim morbi pellentesque dolor congue
              faucibus. Cras habitant lorem velit aliquam commodo congue. Vitae
              eros morbi et varius sagittis eget.
            </p>
            <div
              onClick={() => router.push("/projects")}
              className="-ml-5 mt-[100px] hidden w-[200px] flex-col items-center justify-around pb-2 hover:cursor-pointer md:flex"
            >
              <span className="flex items-center gap-3">
                <p className="font-footer text-xs	uppercase">Autres projets</p>
                <ArrowRight />
              </span>
              <div className="absolute h-12 w-[150px] origin-left border-b-2 border-b-black transition-transform duration-300 hover:scale-x-0" />
            </div>
          </div>
          <div className="absolute right-0 mt-28 w-auto">
            <Image src={Images.portfolioDB} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortFolio;
