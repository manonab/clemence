import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Parallax } from "react-scroll-parallax";

import RouageAnimation from "@/animations/rouage";
import { Images } from "@/common/images";
import { ArrowRight } from "@assets/arrow-right";

interface DescriptionProps {
  id: string;
}
const Description: React.FC<DescriptionProps> = ({ id }) => {
  const router = useRouter();

  return (
    <div>
      <div className="h-auto w-full flex-col md:flex">
        <div className="flex size-full flex-col gap-[150px] bg-mediumRed px-28 py-32">
          <p
            className="font-helvetica67 text-left text-[48px] leading-[57.6px] text-white"
            id={id}
          >
            Le courage de nos idées, la passion de les<br></br> partager. Parce
            que chaque histoire mérite qu’on<br></br> la raconte,
            <span className="font-bold">
              qu’attendons nous pour commencer ?
            </span>
          </p>
          <p className="text-right text-[53px] leading-[57.6px] text-white">
            Consultante en communication et créative<br></br> passionnée, je
            m’efforce d’aider votre projet à<br></br> grandir grâce au design et
            au marketing digital.
          </p>
          <div
            onClick={() => router.push("/services")}
            className="mb-2 ml-24 flex w-[150px] flex-col items-center justify-around pb-2 hover:cursor-pointer"
          >
            <span className="flex items-center gap-3">
              <p className="text-xs	uppercase">En savoir plus</p>
              <ArrowRight />
            </span>
            <div className="absolute h-12 w-[150px] origin-left border-b-2 border-b-black transition-transform duration-300 hover:scale-x-0" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="my-10 ml-32 font-marsdenBlack text-[150px] leading-[95%] text-darkRed">
            construisons<br></br> votre pochain<br></br> succès
          </p>
          <div className="flex w-full items-end justify-between">
            <Image
              src={Images.self}
              alt="instagram post"
              className="h-[600px] w-[310px]"
            />
            <div className="mb-24 mr-[250px] w-[450px]">
              <h1 className="my-10 font-marsdenMedium text-[75px] text-customRed">
                à propos
              </h1>
              <p className="font-footer font-normal">
                Je m’appelle Clémence, j’ai 28 ans et ma passion, mon ambition
                et mon expérience sont tout ce que j’ai à offrir (c’est déjà pas
                mal).
              </p>
              <br></br>
              <p className="font-footer font-normal">
                Quand j’ai lancé mon auto-entreprise en 2020, j’avais pour
                objectif d’aider les entreprises à atteindre leur plein
                potentiel et partager leur message, notamment via l’appui des
                réseaux sociaux. Quatre années ont passées, et cet objectif
                reste inchangé.
              </p>
              <br></br>
              <p className="font-footer font-normal">
                Depuis, je me suis également formée en autodidacte aux principes
                de l’UX-UI design : une double casquette qui me permet d’avoir
                une vision 360 des produits et besoins de mes client.es.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-full w-auto overflow-hidden">
          <RouageAnimation
            text1="SERVICES"
            text2="SERVICES"
            end={200}
            start={900}
            color="text-customRed"
          />
          <div className="mx-20 my-36 flex items-center justify-around">
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
        <Parallax speed={-15} className="min-h-screen bg-darkRed">
          <div className="relative h-screen w-full pt-20">
            <div className="flex-col items-center justify-center">
              <p className="mt-44 flex justify-center font-marsdenBlack text-[100px] leading-[100px] text-white">
                Like what you see ?
              </p>
              <p className="text-center font-footer text-[50px] font-medium leading-[100px] text-black">
                Restons en contact.
              </p>
            </div>
            <div
              onClick={() => router.push("/contact")}
              className="mx-auto my-20 w-[200px] rounded-full border border-black px-10 py-5 text-center text-sm font-bold uppercase leading-[17.5px] text-customBlack transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-customBlack hover:text-white"
            >
              Me contacter
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Description;
