import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";

import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";

const Cards: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]);
  return (
    <div className="mx-auto h-full flex-col items-center justify-center">
      <div className="my-20 flex-col">
        <p className="mb-[180px] ml-20 font-neueRegular text-[200px] leading-[90%] text-redHome">
          MOSAIC
        </p>
        <div className="flex items-center justify-evenly">
          <div className="size-[400px]">
            <p className="mb-10 font-footer text-[70px] font-semibold leading-[90%]">
              Concept.
            </p>
            <p className="h-[150px] font-footer text-base leading-[130%]">
              Mosaic est une association LGBTQ+ pour les jeunes de 12 à 18 ans,
              qui propose des activités, des programmes et des services
              accessibles qui visent à responsabiliser les membres de la
              communauté, à fournir des ressources essentielles et à défendre
              les droits des jeunes LGBT+.{" "}
            </p>
          </div>
          <div className="size-[400px]">
            <p className="mb-10 font-footer text-[70px] font-semibold leading-[90%]">
              Mission.
            </p>
            <p className="h-[150px] font-footer text-base leading-[130%]">
              Mon travail pour l’association The Mosaic Trust a été de créer
              entièrement un plan de communication pour leur réseaux sociaux.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="h-full bg-saumon pb-[200px] pt-[150px]">
        <Image
          src={Images.rectangle}
          className="absolute left-[10%] z-0"
          alt="rectangle"
        />
        <div className="jusitfy-center ml-[150px] mt-[150px] flex items-center">
          <Image
            src={Images.mosaic1}
            className="z-10 ml-[230px]"
            alt="mosaic1"
          />
          <Image src={Images.mosaic2} className="ml-[100px]" alt="mosaic2" />
        </div>
      </div>
      <div className="h-screen bg-mainColor">
        <p className="ml-20 mt-20 w-[1000px] font-neueCondensed text-[64px] leading-[100%] text-orange">
          Mosaic encourage, éduque et inspire les jeune personnes LGBTQ+ et
          celleux à leur côtés
        </p>
        <div className="my-20 flex items-center justify-around">
          <div className="flex-col">
            <p className="mb-3 text-center font-footer text-[100px] font-extrabold leading-[90%]">
              +16%
            </p>
            <p className="ml-16 w-[200px]  text-right font-footer text-[25px] leading-[90%]">
              Augmentation de l&lsquo;audience en ligne.
            </p>
          </div>
          <div className="flex-col">
            <p className="mb-10 text-center font-footer text-[100px] font-extrabold leading-[90%]">
              1
            </p>
            <p className="w-[321px]  text-right font-footer text-[25px] leading-[90%]">
              Nouveau concours littéraire pour les personnes Queer.
            </p>
          </div>
          <div className="flex-col">
            <p className="mb-10 text-center font-footer text-[100px] font-extrabold leading-[90%]">
              +20
            </p>
            <p className="w-[321px]  text-right font-footer text-[25px] leading-[90%]">
              Workshops en ligne pour les jeunes LGBTQ+.
            </p>
          </div>
        </div>
        <p className="my-[200px] text-center font-neueRegular text-[80px] font-semibold leading-[90%] text-orange">
          TEMOIGNAGE
        </p>
        <p className="mx-auto w-[1062px] text-center font-neueCondensed text-[64px] leading-[100%] text-redHome">
          “Clémence was a true pleasure to work with.In joining us she created a
          new role for herself leveraging her skills and abilities to build on
          Mosaic&apos;s online presence and grew our audience [...]”.
        </p>
        <p className="mx-auto mt-20 w-[280px] text-center  font-neueCondensed text-[50px] leading-[100%]">
          Hugh O’Keeffe
        </p>
        <div className="mx-auto my-5 w-[108px] border-t border-black"></div>
        <p className="mx-auto w-[313px] pb-[100px] text-center font-inter  text-[30px] leading-[100%]">
          Assistant de direction
        </p>
      </div>
    </div>
  );
};
export default Cards;
