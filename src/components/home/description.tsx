import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

import RouageAnimation from "@/animations/rouage";
import { Images } from "@/common/images";
import Contact from "@/pages/contact";
import { ArrowRight } from "@assets/arrow-right";
import { BigArrow } from "@assets/big-arrow";

interface DescriptionProps {
  id: string;
}
const Description: React.FC<DescriptionProps> = ({ id }) => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const isServicesSectionVisible = scrollPosition > 1350;
  console.log(scrolled);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 1150) {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`hidden h-auto w-full flex-col md:flex ${isServicesSectionVisible ? "bg-mainColor" : "bg-yellowHome"}`}
      >
        <div className="items-base flex size-full flex-col gap-[150px] py-32">
          <p
            className="ml-32 text-left font-neueCondensed text-[53px] leading-[57.6px] text-orange"
            id={id}
          >
            Le courage de nos idées, la passion de les<br></br> partager. Parce
            que chaque histoire mérite qu’on<br></br> la raconte,{" "}
            <span className="font-bold text-redHome">
              qu’attendons nous pour commencer ?
            </span>
          </p>
          <p className="mr-32 text-right font-neueCondensed text-[53px] leading-[57.6px] text-orange">
            Consultante en communication et créative<br></br> passionnée, je
            m’efforce d’aider votre projet à<br></br> grandir grâce au design et
            au marketing digital.
          </p>
          <div
            onClick={() => router.push("/about")}
            className="mb-2 ml-24 flex w-[150px] flex-col items-center justify-around pb-2 hover:cursor-pointer"
          >
            <span className="flex items-center gap-3">
              <p className="font-footer text-xs	uppercase">En savoir plus</p>
              <ArrowRight />
            </span>
            <div className="absolute h-12 w-[150px] origin-left border-b-2 border-b-black transition-transform duration-300 hover:scale-x-0" />
          </div>
        </div>
        <div className="relative h-full w-auto overflow-hidden">
          <RouageAnimation
            text1="SERVICES"
            text2="SERVICES"
            end={-200}
            start={800}
            color="text-redHome"
          />
          <div className="mx-20 my-36 flex items-center justify-around">
            <div className="flex-col items-center gap-3">
              <p className="font-neueBold text-serviceTitle text-orange">
                Communication
              </p>
              <div className="flex items-center">
                <p className="mr-4 font-neueBold text-serviceTitle text-orange">
                  &
                </p>
                <p className="font-neueBold text-serviceTitle text-orange">
                  marketing
                </p>
              </div>
              <p className="ml-20 font-neueBold text-serviceTitle text-orange">
                digital.
              </p>
            </div>
            <p className="font-neueBold text-serviceTitle text-orange">
              Design
            </p>
            <p className="font-neueBold text-serviceTitle text-orange">
              Consulting
            </p>
          </div>
          <div
            onClick={() => router.push("/services")}
            className="mb-[250px] ml-24 flex w-[150px] flex-col items-center justify-around pb-2 hover:cursor-pointer"
          >
            <span className="flex items-center gap-3">
              <p className="font-footer text-xs	uppercase">En savoir plus</p>
              <ArrowRight />
            </span>
            <div className="absolute h-12 w-[150px] origin-left border-b-2 border-b-black transition-transform duration-300 hover:scale-x-0" />
          </div>
        </div>
        <Parallax speed={-15} className="min-h-[450px]">
          <div className="relative h-screen w-full bg-saumon pt-20">
            <div className="flex-col items-center justify-center">
              <p className="mt-44 flex items-baseline justify-center font-neueSemiBold text-[100px] leading-[100px] text-royalBlue">
                Like what you s
                <span>
                  <Image
                    src={Images?.rabbit}
                    alt="rabbit"
                    className="mx-2 w-[130px] rounded-2xl bg-center"
                  />
                </span>
                ?
              </p>
              <p className="text-center font-footer text-[80px] font-medium leading-[100px] text-black">
                Restons en contact
              </p>
            </div>
            <div
              onClick={() => router.push("/contact")}
              className="translate mx-auto my-20 w-[200px] rounded-full border border-black px-10 py-5 text-center text-sm font-bold uppercase leading-[17.5px] text-grayBlack transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-grayBlack hover:text-white"
            >
              Me contacter
            </div>
          </div>
        </Parallax>
      </div>
      <div className="mt-12 flex h-full !w-full flex-col gap-12 md:hidden">
        <div>
          <Image src={Images.homeMobile} width={200} alt="home" />
          <p className="-mt-[100px] ml-6 font-neueRegular text-homeMobileTitle text-redHome">
            Tout<br></br> commence<br></br> par une<br></br> idée.{" "}
          </p>
          <div className="mx-6 my-10">
            <p className="max-w-[300px] font-neueCondensed text-homeMobileContent text-orange">
              Consultante en communication et créative passionnée, je m’efforce
              d’aider votre marque à grandir grâce au design et au marketing
              digital.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <div className="flex flex-col items-center gap-3">
              <BigArrow />
              <p className="font-footer font-bold uppercase leading-[20px]">
                SCROLL & ROLL
              </p>
            </div>
            <Image src={Images.homeMobile2} width={160} alt="mobile2" />
          </div>
        </div>
        <div className="w-full bg-yellowHome pb-24">
          <div className="mx-6 mb-10 mt-20" id="scroll-target">
            <p className="max-w-[300px] font-neueCondensed text-homeMobileContent text-orange">
              Le courage de nos idées, la passion de les partager.Parce que
              chaque histoire mérite qu&lsquo;on la raconte,{" "}
              <span className="font-bold text-redHome">
                qu&lsquo;attendons nous pour commencer ?
              </span>
            </p>
          </div>
          <p className="mx-6 mb-5 font-neueRegular text-homeMobileServices text-redHome">
            services
          </p>
          <div className="mx-6 my-5 flex flex-col items-start gap-3">
            <p className="font-footer font-bold text-grayBlack">
              Communication
            </p>
            <Image src={Images.line} className="-mt-3" alt="line" />
            <p className="font-footer font-bold text-grayBlack">
              Marketing digital
            </p>
            <Image src={Images.line} className="-mt-3" alt="line" />
            <p className="font-footer font-bold text-grayBlack">Design</p>
            <Image src={Images.line} className="-mt-3" alt="line" />
            <p className="font-footer font-bold text-grayBlack">Consulting</p>
            <Image src={Images.line} className="-mt-3" alt="line" />
          </div>
          <p
            className="mx-4 my-5 font-footer text-[8px] uppercase text-grayBlack"
            onClick={() => router.push("services")}
          >
            EN SAVOIR PLUS
          </p>
          <p className="mx-6 my-5 font-neueRegular text-homeMobileServices text-redHome">
            projets
          </p>
          <div className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mx-5 overflow-auto whitespace-nowrap">
            <div className="flex items-center justify-evenly space-x-6 px-10 py-5">
              <Image
                onClick={() => router.push("/projects/capiche")}
                src={Images.homeCapiche}
                alt="Logo de capiche"
                className="mx-5 w-[130px]"
              />
              <Image
                onClick={() => router.push("/projects/mosaic")}
                src={Images.homeMosaic}
                alt="Image 2"
                className="mx-5 w-[130px]"
              />
              <Image
                onClick={() => router.push("/projects/portfolio")}
                src={Images.homePortfolio}
                alt="Image 3"
                className="ml-5 mr-10 w-[130px]"
              />
            </div>
          </div>
          <p
            className="mx-4 my-5 font-footer text-[8px] uppercase text-grayBlack"
            onClick={() => router.push("project")}
          >
            EN SAVOIR PLUS
          </p>
        </div>
        <div className="pb-18 w-full bg-mainColor">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Description;
