import { NextPage } from "next";
import { useRouter } from "next/router";

import RouageAnimation from "@/animations/rouage";
import Carousel from "@/components/mosaic/carousel";
import BusinessInfo from "@/components/business-infos";
import CustomSection from "@/components/custom-section";
import { ButtonBottom } from "@/components/button-bottom";
import { Testimony } from "@/components/testimony";
import Image from "next/image";
import { Images } from "@/common/images";

const Kama: NextPage = () => {
  const router = useRouter();
  const concept =
    "Studio Lutalica est un studio de design graphique dédié aux projets et clients féministes et Queer. ";
  const mission =
    "Ma mission principale au sein du studio a été de créer une stratégie de communication digitale pour l’ensemble des réseaux sociaux. L’objectif étant de développer la visibilité et toucher une nouvelle clientèle via les réseaux.";
  const whatIDid = [
    "Community management",
    "Stratégie de marque",
    "Marketing digital",
    "Relations publiques",
    "Gestion de projet",
  ];

  return (
    <div className="flex-col overflow-hidden flex">
      <BusinessInfo name="Kama" sector="Bien-être" location="Londres" />
      <CustomSection concept={concept} mission={mission} whatIDid={whatIDid} />
      <div className="flex flex-col mt-32 ml-12">
        <div className="text-[170px] text-customRed ml-12 font-marsdenHeavy leading-[90%]">
          Lorem ipsum<br></br> dolor sit amet.
        </div>
        <div className="flex items-start justify-around my-32 mx-12">
          <Image
            src={Images.kamaPost1}
            alt="kama post"
            width={450}
            height={450}
            className="object-cover"
          />
          <div className="max-w-[750px] font-footer text-[25px] leading-[120%] relative left-20">
            Lorem ipsum dolor sit amet consectetur. Gravida enim mauris amet
            fermentum sed fermentum quam. Ac in purus eget nulla orci orci
            condimentum. Eget ac amet velit adipiscing et ultricies auctor quis
            enim. Egestas mauris tincidunt praesent amet venenatis accumsan. Et
            volutpat tellus arcu consectetur adipiscing.
          </div>
        </div>
        <Image
          src={Images.kamaPost2}
          alt="kama post"
          width={450}
          height={450}
          className="object-cover relative bottom-28 self-end right-[300px]"
        />
      </div>
      <div className="w-full my-32">
        <RouageAnimation
          text1="INCLUSION"
          text2="INCLUSION"
          end={400}
          start={1000}
          color="text-customRed"
        />
      </div>
      <Testimony content=" “Clemence worked on the social account for Kama for a couple of months. During this time, she added a huge amount of value with her viewpoints and her mindful approach to talking about delicate topics. Her human and creative qualities were very aligned with the company's mission.  [...]”." />
      <ButtonBottom />
    </div>
  );
};
export default Kama;
