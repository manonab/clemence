import { NextPage } from "next";
import { useRouter } from "next/router";

import BusinessInfo from "@/components/business-infos";
import CustomSection from "@/components/custom-section";
import { ButtonBottom } from "@/components/button-bottom";
import Image from "next/image";
import { Images } from "@/common/images";

const Lutalica: NextPage = () => {
  const router = useRouter();

  const concept =
    "Studio Lutalica est un studio de design graphique dédié aux projets et clients féministes et Queer.";
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
      <BusinessInfo
        name="Lutal-ica"
        customStyle="mt-32"
        sector="Design"
        location="Edimbourg"
      />
      <CustomSection concept={concept} mission={mission} whatIDid={whatIDid} />

      <div className="flex flex-col items-center md:mt-36">
        <div className="md:grid md:grid-cols-2 md:gap-12">
          <Image
            src={Images.lutalicaPost1}
            alt="Image 1"
            className="object-cover md:-mt-12 md:w-[500px] w-[300px] my-12 md:my-auto"
          />
          <Image
            src={Images.lutalicaPost2}
            alt="Image 2"
            className="object-cover md:-mt-12 md:w-[500px] w-[300px] my-12 md:my-auto"
          />
        </div>
        <h1 className="text-customRed text-left text-[80px] md:text-[170px] font-marsdenHeavy leading-[90%] mx-8 md:my-[150px] self-end">
          L'engagement<br></br>comme<br></br> moteur.
        </h1>
        <p className="text-left mt-4 max-w-[880px] mb-32 self-start mx-12">
          Lorem ipsum dolor sit amet consectetur. Gravida enim mauris amet
          fermentum sed fermentum quam. Ac in purus eget nulla orci orci
          condimentum. Eget ac amet velit adipiscing et ultricies auctor quis
          enim. Egestas mauris tincidunt praesent amet venenatis accumsan. Et
          volutpat tellus arcu consectetur adipiscing.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8 self-end mr-24">
          <Image
            src={Images.lutalicaReel2}
            alt="Video 2"
            width={280}
            height={400}
            className="object-cover relative mb-12 bottom-10 left-10"
          />
          <Image
            src={Images.lutalicaReel3}
            alt="Video 3"
            width={280}
            height={400}
            className="object-cover relative mb-12 top-12 z-10"
          />
          <Image
            src={Images.lutalicaReel1}
            alt="Video 1"
            width={280}
            height={400}
            className="object-cover relative mb-12 bottom-20 right-8 z-0"
          />
        </div>
      </div>

      <div className="bg-darkRed text-white flex flex-col items-start mt-16 px-12 pt-12 pb-[200px]">
        <h1 className="text-[100px] font-bold text-left font-helveticaNeue leading-[90%] py-20">
          Lorem ipsum dolor sit<br></br> amet consectetur.
        </h1>
        <p className="text-left mt-4  text-customBlack text-[25px] leading-[150%] py-20">
          Lorem ipsum dolor sit amet consectetur. Gravida enim mauris amet
          fermentum sed fermentum quam.<br></br> Ac in purus eget nulla orci
          orci condimentum. Eget ac amet velit adipiscing et ultricies auctor
          quis.
        </p>
        <div className="grid grid-cols-3 gap-8 my-32">
          <Image
            src={Images.lutalicaPost4}
            alt="Image 3"
            width={500}
            height={500}
            className="object-cover relative top-[350px] right-12"
          />
          <Image
            src={Images.lutalicaPost5}
            alt="Image 4"
            width={500}
            height={500}
            className="object-cover relative top-[150px] left-0"
          />
          <Image
            src={Images.lutalicaPost3}
            alt="Image 5"
            width={500}
            height={500}
            className="object-cover relative bottom-[50px] left-12"
          />
        </div>
      </div>
      <div className="bg-darkRed pt-32">
        <ButtonBottom nextRoute="/projects/kama" />
      </div>
    </div>
  );
};

export default Lutalica;
