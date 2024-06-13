import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Link } from "react-scroll";

import RouageAnimation from "@/animations/rouage";
import { Images } from "@/common/images";
import Carousel from "@/components/mosaic/carousel";
import { useHeaderColor } from "@/context";
import { ArrowRight } from "@assets/arrow-right";
import { BigArrow } from "@assets/big-arrow";

const Mosaic: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const router = useRouter();

  useEffect(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]);

  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const mosaicContent = [
    {
      title: "mission.",
      content:
        "Mosaic est une association de défense des droits des personnes LGBTQ+ de 12 à 18 ans. Ils proposent des services d’écoute et d’animation pour les jeunes et leurs proches.",
    },
    {
      title: "objectifs",
      content:
        "Augmenter la visibilité globale de l’association avec un plan de communication adapté, de nouveaux concepts et en accord avec le ton et le design déjà mis en place.",
    },
  ];

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="w-full">
      <div className="mx-auto flex size-full flex-col items-center justify-center md:hidden">
        <div className="mx-5 w-8 self-start" onClick={handleGoBack}>
          <ArrowBack />
        </div>
        <div className="mb-16 mt-20 flex-col">
          <p className="mb-[100px] mt-[180px] text-center font-neueRegular text-capicheMobile uppercase text-redHome md:text-title">
            Mosaic
          </p>
          <Link
            to="scroll_target"
            className="hover:cursor-pointer"
            smooth={true}
          >
            <motion.div
              className="mb-[150px] flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...timing, delay: 0.6 }}
            >
              <BigArrow />
              <p className="font-footer text-[14px] font-bold uppercase leading-[20px] hover:cursor-pointer ">
                DISCOVER
              </p>
            </motion.div>
          </Link>
        </div>
        <div className="h-auto w-full bg-saumon py-10">
          <div className="flex items-center justify-center gap-4">
            <p className="w-1/2 font-neueCondensed text-[24px] leading-[120%] text-orange">
              &ldquo;Mosaic encourage, éduque et inspire les jeunes personnes
              LGBTQ+ et celleux à<br></br> leur côtés.&ldquo;
            </p>
            <div className="z-50 mt-10 size-[130px] rounded-2xl bg-mainColor">
              <div className="flex h-full flex-col items-center justify-center">
                <p className="text-center font-neueSemiBold text-[28px]">
                  +16%
                </p>
                <p className="text-center font-footer text-[12px]">
                  Augmentation<br></br> globale en ligne.
                </p>
              </div>
            </div>
            <div className="absolute right-4 z-10  mt-14 size-[130px] rounded-2xl bg-yellowHome"></div>
          </div>
          <div className="mb-4 mt-8 flex size-12 items-start gap-6 overflow-auto px-4">
            {mosaicContent.map((content, index) => (
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
        </div>
        <div
          className="w-auto overflow-hidden bg-yellowHome py-20"
          id="mosaic_target"
        >
          <div className="flex items-center justify-around gap-12">
            <Image
              src={Images.mosaic1}
              className="ml-[-120px] size-[180px]"
              alt="mosaic1"
            />
            <Image
              src={Images.mosaic2}
              className="size-[220px]"
              alt="mosaic2"
            />
            <Image
              src={Images.mosaic007}
              className="size-[180px] rounded-xl"
              alt="mosaic3"
            />
          </div>
          <p className=" mt-5 text-center font-neueCondensed text-[14px] text-orange">
            Trust the Word, la première édition d&lsquo;un concours <br></br>{" "}
            littéraire par et pour la communauté Queer.
          </p>
        </div>
        <div className="mb-20 mt-10 flex flex-col items-center">
          <p className="mb-10 font-neueRegular text-[40px] text-orange">
            Témoignage
          </p>
          <div className="flex items-center">
            <ArrowForward className="w-6" />
            <p className="font-footer text-[18px]">
              <span className="font-footer font-semibold">
                Hugh O&lsquo;keeffe
              </span>
              , Assistant Directeur
            </p>
          </div>
          <p className="mb-10 mt-5 w-[300px] font-footer text-[12px] leading-[120%]">
            “Clémence was a true pleasure to work with. In<br></br> joining us
            she created a new role for herself<br></br> leveraging her skills
            and abilities to build on Mosaic&lsquo;s<br></br> online presence
            and grew our audience [...]”.
          </p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/cl%C3%A9mence-dequaire/?locale=en_US"
            className="mx-auto mb-20 min-w-[100px] max-w-[130px] rounded-full border border-black p-2 text-center text-[10px] font-bold uppercase text-grayBlack transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-grayBlack hover:text-white"
            rel="noreferrer"
          >
            Voir sur linkedin
          </a>
        </div>
      </div>

      {/* DESKTOP VERSION */}

      <div className="hidden flex-col overflow-hidden md:flex">
        <div className="mb-12 mt-10 h-screen flex-col">
          <p className="mb-[100px] mt-[180px] text-center font-neueRegular text-capicheMobile uppercase text-redHome md:text-title">
            MOSAIC
          </p>
          <Link
            to="mosaic_desktop_target"
            className="hover:cursor-pointer"
            smooth={true}
          >
            <motion.div
              className="mb-[150px] flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...timing, delay: 0.6 }}
            >
              <BigArrow />
              <p className="font-footer text-[14px] font-bold uppercase leading-[20px] hover:cursor-pointer ">
                DISCOVER
              </p>
            </motion.div>
          </Link>
        </div>
        <div className="w-full">
          <RouageAnimation
            isMosaic={true}
            start={-800}
            end={100}
            otherStart={100}
            otherEnd={-800}
          />
        </div>
        <div className="mt-32 bg-yellowHome py-10">
          <div className="absolute -left-16 -mt-36 size-[189px]  rounded-full border-2 border-mosaic" />
          <div className="ml-32 flex flex-col items-start">
            <p className="mt-20 font-neueCondensed text-[62px] leading-[100%] text-orange">
              “Mosaic encourage, éduque<br></br> et inspire les jeunes<br></br>{" "}
              personnes LGBTQ+ et celleux<br></br> à leur côtés”.
            </p>
            <div className="mx-auto flex w-full items-center justify-start pb-28">
              <div className="my-20 flex w-1/2 flex-col gap-6">
                {mosaicContent.map((element, index) => (
                  <div key={index} className="w-1/2">
                    <p className="my-10 font-neueRegular text-[50px] leading-[90%] text-redHome">
                      {element.title}
                    </p>
                    <p className="font-footer text-[17px] leading-[130%] text-lightBlack">
                      {element.content}
                    </p>
                  </div>
                ))}
              </div>
              <div className="ml-36">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto bg-mainColor py-20">
          <p className="my-16 text-center font-neueRegular text-[150px] uppercase leading-[90%] text-redHome">
            Témoignage
          </p>
          <Image src={Images.reviewMosaic} alt="review" className="mb-32" />
          <div
            onClick={() => router.push("/projects")}
            className="-ml-10 mt-[100px] hidden w-[200px] flex-col items-center justify-around pb-2 hover:cursor-pointer md:flex"
          >
            <span className="flex items-center gap-3">
              <p className="font-footer text-xs	uppercase">Autres projets</p>
              <ArrowRight />
            </span>
            <div className="absolute h-12 w-[150px] origin-left border-b-2 border-b-black transition-transform duration-300 hover:scale-x-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mosaic;
