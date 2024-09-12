import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { Images } from "@/common/images/index";
import { useHeaderColor } from "@/context/index";
import { BigDownArrow } from "@assets/big-down-arrow";

const About: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]);

  return (
    <ParallaxProvider>
      <div className="h-auto w-screen flex-col gap-12 md:flex">
        <div className="flex w-auto items-end justify-between">
          <div className="flex flex-col">
            <div className="ml-10 w-[1259px]">
              <p className="font-medium  uppercase">
                Tout commença par une idée
              </p>
            </div>
            <div className="my-16 ml-12 w-[637px]">
              <p className="text-justify text-2xl font-normal leading-[31.2px]">
                Spécialiste en communication/marketing et passionnée de design,
                j’aide les entreprises à valoriser leur image de marque en leur
                proposant une stratégie digitale adaptée.J’aime relever de
                nouveaux défis et méthodiquement mener les projets jusqu'à leur
                pleine réussite.
              </p>
            </div>
          </div>
          <div className="w-auto">
            <p className="mx-10 text-[100px] font-medium uppercase leading-[90px] text-customRed">
              Scroll
            </p>
          </div>
        </div>
        <div className="z-10 mb-[-130px] mr-[220px] self-end">
          <BigDownArrow />
        </div>
        <div className="flex size-full flex-col">
          <div className="flex items-end justify-around">
            <div className="-mt-10 ml-12 h-[480px] w-[395px] rounded-[50px]">
              <Image alt="men with pride flag" src={Images.pride} />
            </div>
            <p className="z-10 -mb-40 w-[802px] text-right text-[80px] leading-[72px]">
              &ldquo; Seules 54% des entreprises françaises ont embrassé la
              diversité&ldquo;*.
            </p>
          </div>
          <div className="mx-20 mb-10 mt-28 flex items-center justify-around">
            <p className="w-[640px] text-justify text-[25px] font-normal leading-[32px]">
              Dans un monde où l&ldquo; équité n&ldquo; est plus simplement une
              option mais une nécessité, j&ldquo; ai un grand intérêt à utiliser
              mon expertise pour aider les marques à évoluer.Mon objectif est de
              les guider vers une approche plus inclusive.Cela implique de
              comprendre et de respecter la diversité de leur public et de
              s&lsquo;assurer que tous se sentent représentés et valorisés.
              Ensemble, faisons bouger les choses !
            </p>
            <div className="z-0 h-[480px] w-[395px] rounded-[50px]">
              <Image alt="group people" src={Images.group} />
            </div>
          </div>
        </div>

        <div className="flex size-full flex-col gap-12 bg-mainColor">
          <div className="flex items-center justify-center">
            <p className="font-neueRegular mr-10 text-[250px] uppercase text-customRed">
              Militer
            </p>
            <Image
              alt="arrow pink"
              src={Images.manifesto}
              width={100}
              height={100}
            />
          </div>
          <p className="mx-16 text-[50px] italic leading-[90%]">Manifesto</p>
          <div className="mx-auto w-3/4">
            <div className="flex items-center">
              <p className="mr-14 text-[70px]">01.</p>
              <p className="text-[28px] leading-[100%]">
                L&ldquo;inclusivité et le respect d’autrui sont des valeurs
                fondamentales. Faisons de la diversité un engagement quotidien.
              </p>
            </div>
            <div className="flex items-center">
              <p className="mr-11 text-[70px]">02.</p>
              <p className="text-[28px] leading-[100%]">
                La bienveillance et l&ldquo; écoute forment la base d&ldquo;une
                culture d&ldquo;entreprise saine et productive. Le dialogue est
                la clé.
              </p>
            </div>
            <div className="flex items-center">
              <p className="mr-11 text-[70px]">03.</p>
              <p className="text-[28px] leading-[100%]">
                Sans passion, pas d’action. Croyez en votre message, je m’occupe
                de le partager.
              </p>
            </div>
            <div className="flex items-center">
              <p className="mr-11 text-[70px]">04.</p>
              <p className="text-[28px] leading-[100%]">
                Amusons nous partageons l’amour de nos métiers.
              </p>
            </div>
          </div>
          <div className="mx-auto mb-20 w-[200px] rounded-3xl border border-black p-[10px] hover:cursor-pointer">
            <p className="text-center text-sm font-bold uppercase leading-[17.5px] text-customBlack">
              Services
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <p className=" text-titleMobile  uppercase text-customRed hover:cursor-pointer">
          Partage
        </p>
        <p className="text-titleMobile  uppercase text-customRed hover:cursor-pointer">
          Création
        </p>
        <p className="text-titleMobile  uppercase text-customRed hover:cursor-pointer">
          Ambition
        </p>
      </div>
    </ParallaxProvider>
  );
};
export default About;
