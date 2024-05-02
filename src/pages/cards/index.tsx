import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";

const Cards: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor("mainColor")
  }, [setHeaderColor]);
  return (
    <div className="h-full flex-col items-center justify-center mx-auto">
      <div className="flex-col my-20">
        <p className="font-neueRegular text-redHome text-[200px] leading-[90%] ml-20 mb-[180px]">MOSAIC</p>
        <div className="flex justify-evenly items-center">
          <div className="w-[400px] h-[400px]">
            <p className="text-[70px] mb-10 font-footer font-semibold leading-[90%]">Concept.</p>
            <p className="font-footer h-[150px] text-base leading-[130%]">Mosaic est une association LGBTQ+ pour les jeunes de 12 à 18 ans, qui propose des activités, des programmes et des services accessibles qui visent à responsabiliser les membres de la communauté, à fournir des ressources essentielles et à défendre les droits des jeunes LGBT+. </p>
          </div>
          <div className="w-[400px] h-[400px]">
            <p className="text-[70px] mb-10 font-footer font-semibold leading-[90%]">Mission.</p>
            <p className="font-footer text-base leading-[130%] h-[150px]">Mon travail pour l’association The Mosaic Trust a été de créer entièrement un plan de communication pour leur réseaux sociaux. </p>
          </div>
        </div>
      </div>
      <div className="bg-saumon h-full pt-[150px] pb-[200px]">
        <Image src={Images.rectangle} className="absolute left-[10%] z-0" alt="rectangle" />
        <div className="flex items-center mt-[150px] ml-[150px] jusitfy-center" >
          <Image src={Images.mosaic1} className="ml-[230px] z-[10]" alt="mosaic1" />
          <Image src={Images.mosaic2} className="ml-[100px]" alt="mosaic2" />
        </div>
      </div>
      <div className="h-screen bg-mainColor">
        <p className="w-[1000px] ml-20 mt-20 leading-[100%] text-[64px] font-neueCondensed text-orange">Mosaic encourage, éduque et inspire les jeune personnes LGBTQ+ et celleux à leur côtés</p>
        <div className="flex items-center justify-around my-20">
          <div className="flex-col">
            <p className="text-center mb-3 font-extrabold font-footer text-[100px] leading-[90%]">+16%</p>
            <p className="text-right ml-16  w-[200px] font-footer text-[25px] leading-[90%]">Augmentation de l&lsquo;audience en ligne.</p>
          </div>
          <div className="flex-col">
            <p className="text-center mb-10 font-extrabold font-footer text-[100px] leading-[90%]">1</p>
            <p className="text-right  w-[321px] font-footer text-[25px] leading-[90%]">Nouveau concours littéraire pour les personnes Queer.</p>
          </div>
          <div className="flex-col">
            <p className="text-center mb-10 font-extrabold font-footer text-[100px] leading-[90%]">+20</p>
            <p className="text-right  w-[321px] font-footer text-[25px] leading-[90%]">Workshops en ligne pour les jeunes LGBTQ+.</p>
          </div>
        </div>
        <p className="text-center font-neueRegular my-[200px] font-semibold text-[80px] leading-[90%] text-orange">TEMOIGNAGE</p>
        <p className="w-[1062px] text-center mx-auto font-neueCondensed text-redHome text-[64px] leading-[100%]">“Clémence was a true pleasure to work with.In joining us she created a new role for herself leveraging her skills and abilities to build on Mosaic&apos;s online presence and grew our audience [...]”.</p>
        <p className="w-[280px] text-center mx-auto font-neueCondensed  mt-20 text-[50px] leading-[100%]">Hugh O’Keeffe</p>
        <div className="border-t border-black w-[108px] my-5 mx-auto"></div>
        <p className="w-[313px] pb-[100px] text-center mx-auto font-inter  text-[30px] leading-[100%]">Assistant de direction</p>
      </div>
    </div>
  );
}
export default Cards;