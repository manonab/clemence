import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Parallax } from "react-scroll-parallax";

import RouageAnimation from "@/animations/rouage";
import { Images } from "@/common/images";
import { ArrowRight } from "@assets/arrow-right";
import useResponsive from "@/hooks/useResponsive";
import { ContactMeButton } from "../contact-me-button";
import { CustomButton } from "../custom-button";

interface DescriptionProps {
  id: string;
}
const Description: React.FC<DescriptionProps> = ({ id }) => {
  const router = useRouter();
  const customBreakpoints = { mobile: 600, tablet: 900, desktop: 1200 };
  const screenSize = useResponsive(customBreakpoints);
  return (
    <div>
      <div className="h-auto w-full flex-col md:flex">
        <div className="flex size-full flex-col md:gap-[150px] bg-mediumRed md:px-28 md:py-32 py-20 px-3 gap-12">
          <p
            className="font-helvetica67 text-left md:text-[48px] md:leading-[57.6px] text-white hidden md:block"
            id={id}
          >
            Le courage de nos idées, la passion de les<br></br> partager. Parce
            que chaque histoire mérite qu’on<br></br> la raconte,
            <span className="font-bold">
              qu’attendons nous pour commencer ?
            </span>
          </p>
          <p className="text-right md:text-[53px] leading-[57.6px] text-white hidden md:block">
            Consultante en communication et créative<br></br> passionnée, je
            m’efforce d’aider votre projet à<br></br> grandir grâce au design et
            au marketing digital.
          </p>
          <p
            className="font-helvetica67 text-left text-white md:hidden leading-snug"
            id={id}
          >
            Le courage de nos idées, la passion de les partager. Parce que
            chaque histoire mérite qu’on la raconte,
            <span className="font-bold">
              qu’attendons nous pour commencer ?
            </span>
            <p className="text-right lleading-snug text-white md:hidden">
              Consultante en communication et créative<br></br> passionnée, je
              m’efforce d’aider votre projet à<br></br> grandir grâce au design
              et au marketing digital.
            </p>
          </p>
          <CustomButton text="En savoir plus" redirection="/services" />
        </div>
        <div className="flex flex-col">
          <p className="hidden md:my-10 md:ml-32 md:font-marsdenBlack md:text-[150px] md:leading-[95%] md:text-darkRed md:block">
            construisons<br></br> votre pochain<br></br> succès
          </p>
          <p className="font-marsdenBlack leading-[95%] text-darkRed text-[50px] text-center my-20">
            construisons votre pochain succès
          </p>
          <div className="flex w-full md:items-end md:justify-between md:flex-row flex-col">
            <Image
              src={Images.self}
              alt="instagram post"
              className={`${screenSize === "mobile" ? "w-[150px] h-[300px]" : "h-[600px] w-[310px]"}`}
            />
            <div className="md:mb-24 md:mr-[250px] md:w-[450px] mx-6 md:mx-0">
              <h1 className="font-marsdenMedium md:text-[75px] text-customRed text-[50px] my-10 ml-3.5 md:ml-0">
                à propos
              </h1>
              <p className="font-footer font-normal text-sm md:text-base">
                Je m’appelle Clémence, j’ai 28 ans et ma passion, mon ambition
                et mon expérience sont tout ce que j’ai à offrir (c’est déjà pas
                mal).
              </p>
              <br></br>
              <p className="font-footer font-normal text-sm md:text-base">
                Quand j’ai lancé mon auto-entreprise en 2020, j’avais pour
                objectif d’aider les entreprises à atteindre leur plein
                potentiel et partager leur message, notamment via l’appui des
                réseaux sociaux. Quatre années ont passées, et cet objectif
                reste inchangé.
              </p>
              <br></br>
              <p className="font-footer font-normal text-sm md:text-base">
                Depuis, je me suis également formée en autodidacte aux principes
                de l’UX-UI design : une double casquette qui me permet d’avoir
                une vision 360 des produits et besoins de mes client.es.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-full w-auto overflow-hidden">
          <div className="hidden md:relative">
            <RouageAnimation
              text1="SERVICES"
              text2="SERVICES"
              end={200}
              start={900}
              color="text-customRed"
            />
          </div>
          <div className="md:hidden relative">
            <RouageAnimation
              text1="SERVICES"
              text2="SERVICES"
              end={-300}
              start={900}
              color="text-customRed"
            />
          </div>
          <div className="mx-20 my-36 items-center justify-around hidden md:flex">
            <div className="flex-col items-center gap-3">
              <p className="text-serviceTitle">Communication</p>
              <div className="flex items-center">
                <p className="mr-4 text-serviceTitle">&</p>
                <p className="text-serviceTitle">marketing</p>
              </div>
              <p className="ml-20 text-serviceTitle">digital.</p>
            </div>
            <p className="text-serviceTitle">Design</p>
            <p className="text-serviceTitle">Consulting</p>
          </div>
          {/* <div className="md:hidden flex flex-col mb-36 mt-10 mx-3.5">
              <p className="text-4xl">Communication & marketing digital.</p>
            <p className="text-4xl">Design</p>
            <p className="text-4xl">Consulting</p>
          </div> */}
          <div
            onClick={() => router.push("/services")}
            className="md:mb-[250px] md:ml-24 flex md:w-[150px] flex-col items-center justify-around pb-2 hover:cursor-pointer"
          >
            <span className="flex items-center gap-3">
              <p className="font-footer text-xs	uppercase">En savoir plus</p>
              <ArrowRight />
            </span>
            <div className="absolute h-12 w-[150px] origin-left border-b-2 border-b-black transition-transform duration-300 hover:scale-x-0" />
          </div>
        </div>
        <Parallax speed={-15} className="md:min-h-screen h-full bg-darkRed">
          <div className="relative md:h-screen w-full pt-20 min-h-2xl">
            <div className="flex-col items-center justify-center">
              <p className="md:mt-44 flex justify-center font-marsdenBlack md:text-[100px] leading-[100px] text-white text-[50px]">
                Like what you see ?
              </p>
              <p className="text-center font-footer md:text-[50px] font-medium md:leading-[100px] text-black">
                Restons en contact.
              </p>
            </div>
            <ContactMeButton />
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Description;
