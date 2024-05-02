import { Images } from "@/common/images/index";
import { useHeaderColor } from "@/context/index";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { BigDownArrow } from "../../../public/static/assets/big-down-arrow";

const About: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]);

  return (
    <ParallaxProvider>
      <div className="flex-col md:flex gap-12 w-screen h-auto hidden">
        <div className="flex items-end justify-between w-auto">
          <div className="min-w-[950px] flex-col flex">
            <div className="w-[1259px] ml-10">
              <p className="font-neueRegular text-title uppercase  text-orange font-medium">Tout commença par une idée</p>
            </div>
            <div className="w-[637px] ml-12 my-16">
              <p className="leading-[31.2px] text-justify text-2xl font-normal font-footer">
                Spécialiste en communication/marketing et passionnée de design, j’aide les entreprises à valoriser leur image de marque en leur proposant une stratégie digitale adaptée.J’aime relever de nouveaux défis et méthodiquement mener les projets jusqu&ldquo;à leur pleine réussite.</p>
            </div>
          </div>
          <div className="w-auto">
            <p className="mx-10 uppercase text-redHome text-[100px] font-medium font-neueRegular leading-[90px]">Scroll</p>
          </div>
        </div>
        <div className="self-end mr-[220px] -mb-[130px] z-[10]">
          <BigDownArrow />
        </div>
        <div className="bg-saumon h-full w-full flex-col flex">
          <div className="flex items-end justify-around">
            <div className="w-[395px] h-[480px] rounded-[50px] -mt-10 ml-12">
              <Image alt="men with pride flag" src={Images.pride} />
            </div>
            <p className="-mb-40 z-[10] w-[802px] leading-[72px] text-royalBlue text-right text-[80px] font-neueRegular">
              &ldquo; Seules 54% des entreprises françaises ont embrassé la diversité&ldquo;*.
            </p>
          </div>
          <div className="flex items-center justify-around mb-10 mt-28 mx-20">
            <p className="text-[25px] leading-[32px] font-normal font-footer text-justify w-[640px]">
              Dans un monde où l&ldquo; équité n&ldquo; est plus simplement une option mais une nécessité, j&ldquo; ai un grand intérêt à utiliser mon expertise pour aider les marques à évoluer.Mon objectif est de les guider vers une approche plus inclusive.Cela implique de comprendre et de respecter la diversité de leur public et de s&lsquo;assurer que tous se sentent représentés et valorisés. Ensemble, faisons bouger les choses !</p>
            <div className="z-0 w-[395px] h-[480px] rounded-[50px]">
              <Image alt="group people" src={Images.group} />
            </div>
          </div>
        </div>

        <div className="bg-mainColor h-full w-full flex-col flex gap-12">
          <div className="flex items-center justify-center">
            <p className="text-[250px] text-redHome font-neueRegular uppercase mr-10">Militer</p>
            <Image alt="arrow pink" src={Images.manifesto} width={100} height={100} />
          </div>
          <p className="font-neueRegular italic text-[50px] leading-[90%] mx-16">Manifesto</p>

          <div className="w-3/4 mx-auto">
            <div className="flex items-center">
              <p className="font-footer text-[70px] mr-14">01.</p>
              <p className="leading-[100%] text-[28px] font-footer">L&ldquo;<span className="text-orange">inclusivité</span> et le respect d’autrui sont des valeurs fondamentales. Faisons de la diversité un engagement quotidien.</p>
            </div>
            <div className="flex items-center">
              <p className="font-footer text-[70px] mr-11">02.</p>
              <p className="leading-[100%] text-[28px] font-footer">La <span className="text-orange">bienveillance</span> et l&ldquo; écoute forment la base d&ldquo;une culture d&ldquo;entreprise saine et productive. Le dialogue est la clé.</p>
            </div>
            <div className="flex items-center">
              <p className="font-footer text-[70px] mr-11">03.</p>
              <p className="font-footer leading-[100%] text-[28px]">Sans <span className="text-orange">passion</span>, pas d’action. Croyez en votre message, je m’occupe de le partager.</p>
            </div>
            <div className="flex items-center">
              <p className="font-footer text-[70px] mr-11">04.</p>
              <p className="leading-[100%] text-[28px] font-footer"><span className="text-orange">Amusons nous</span> à créer, partager, designer. Partageons l’amour de nos métiers.</p>
            </div>
          </div>
          <div className="hover:cursor-pointer border-black border mb-20 rounded-3xl p-[10px] w-[200px] mx-auto">
            <p className="leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase">Services</p>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col">
        <p className="text-redHome uppercase  hover:cursor-pointer text-titleMobile font-neueRegular">
          Partage
        </p>
        <p className="text-redHome uppercase  hover:cursor-pointer text-titleMobile font-neueRegular">
          Création
        </p>
        <p className="text-redHome uppercase  hover:cursor-pointer text-titleMobile font-neueRegular">
          Ambition
        </p>
      </div>
    </ParallaxProvider>
  );
}
export default About;