import { useEffect, useRef, useState } from "react";
import { Remove, Add } from '@mui/icons-material';
import { useHeaderColor } from "@/context";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { NextPage } from "next";
import { ArrowRight } from "@assets/arrow-right";

const Services: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isCommunicationSelected, setIsCommunicationSelected] = useState<boolean>(false)
  const [isDesignSelected, setIsDesignSelected] = useState<boolean>(false)
  const [isConsultingSelected, setIsConsultingSelected] = useState<boolean>(false)
  const router = useRouter();

  const scrollingTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile) {
      setHeaderColor("bg-yellowHome");
      const handleScroll = () => {
        if (scrollingTextRef.current) {
          const rect = scrollingTextRef.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          setScrolled(isVisible);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setHeaderColor("linear-background");

    }
  }, [setHeaderColor]);

  const handleCommunication = () => {
    setIsCommunicationSelected((isCommunicationSelected: boolean) => !isCommunicationSelected)
  }

  const handleDesign = () => {
    setIsDesignSelected((isDesignSelected: boolean) => !isDesignSelected)
  }
  const handleConsulting = () => {
    setIsConsultingSelected((isConsultingSelected: boolean) => !isConsultingSelected)
  }

  return (
    <>
      <div className="hidden flex-col md:flex gap-6 w-full">
        <div className="bg-yellowHome w-full h-screen">
          <div className="flex  justify-evenly mx-auto  h-full mt-20">
            <div className="flex-col flex gap-12 w-auto h-full ">
              <p className="font-neueBold  text-[50px] leading-[90%] text-gray-900">
                Communication &<br></br>marketing digital
              </p>
              <div className="h-full">
                <div className="items-end flex">
                  <p className="text-base text-gray-900 w-[300px]">
                    Informer, engager et fidéliser votre audience avec une stratégie moderne et adaptée à vos problématiques.
                  </p>
                  {isCommunicationSelected ? <div onClick={handleCommunication} className="hover:cursor-pointer"><Remove /></div> : <div className="hover:cursor-pointer" onClick={handleCommunication} ><Add /></div>}
                </div>
                <div className={isCommunicationSelected ? "flex flex-col" : "hidden"}>
                    <ul className="list-disc ml-3 mt-3 text-gray-900">
                      <li className="text-base font-semibold">Social Media</li>
                      <li className="text-base font-semibold">SEO</li>
                      <li className="text-base font-semibold">Gestion de projet</li>
                      <li className="text-base font-semibold">Rédaction</li>
                      <li className="text-base font-semibold">Campagnes payantes (ads)</li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="flex-col flex gap-12 w-auto h-full mt-10">
              <p className="font-neueBold text-[50px] leading-[90%]">Design</p>
              <div className="h-full">
                <div className="items-end flex">
                  <p className="text-base text-gray-900 w-[300px]">
                    Donner de la puissance à vos messages avec des designs marquants et intuitifs, notamment sur les réseaux.
                  </p>
                  {isDesignSelected ? <div onClick={handleDesign} className="hover:cursor-pointer"><Remove /></div> : <div className="hover:cursor-pointer" onClick={handleDesign} ><Add /></div>}
                </div>
                <div className={isDesignSelected ? "flex flex-col" : "hidden"}>
                  <ul className="list-disc ml-3 mt-3 text-gray-900">
                    <li className="text-base font-semibold">UX/UI design (Figma)</li>
                    <li className="text-base font-semibold">Cartes de visite, brochures...</li>
                    <li className="text-base font-semibold">Réseaux sociaux (posts, stories).</li>
                  </ul>

                </div>
              </div>
            </div>
            <div className="flex-col flex gap-12  w-auto h-full mt-10">
              <p className="font-neueBold text-[50px] leading-[90%]">Consulting</p>
              <div>
                <p className="text-base text-gray-900 w-[300px] font-footer">
                  <div className="items-end flex">
                    <p className="text-base text-gray-900 w-[300px]">
                      Vous portez vers une communication plus éthique et solidaire qui répond aux problématiques d’aujourd’hui.
                    </p>
                    {isConsultingSelected ? <div onClick={handleConsulting} className="hover:cursor-pointer"><Remove /></div> : <div className="hover:cursor-pointer" onClick={handleConsulting} ><Add /></div>}
                  </div>
                </p>
                <div className={isConsultingSelected ? "flex flex-col" : "hidden"}>
                  <ul className="list-disc ml-3 mt-3">
                    <li className="text-base font-semibold">Relecture inclusive</li>
                    <li className="text-base font-semibold">Formation & sensibilisation aux<br></br> questions LGBTQ+ & féministes</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>




        <div className="bg-mainColor h-screen flex flex-col items-base justify-center">
          <p className="font-neueRegular text-[50px] leading-[90%] mb-20 ml-20">Expertise</p>
          <div className="flex justify-evenly">
            <div className="flex-col w-[330px]">
              <p className="font-footer text-[70px] leading-[90%] font-semibold">01.</p>
              <p className="font-footer text-base leading-[90%] font-bold my-6">Analyser.</p>
              <p className="font-footer text-base leading-[130%]">
                Ma mission est de vous écouter et de vous accompagner pas à pas dans votre parcours. Avoir une compréhension approfondie de vos problématiques pour trouver ensemble des solutions efficaces et personnalisées qui répondent à vos défis uniques.              </p>
            </div>

            <div className="flex-col w-[330px]">
              <p className="font-footer text-[70px] leading-[90%] font-semibold">02.</p>
              <p className="font-footer text-base leading-[90%] font-bold my-6">Optimiser.</p>
              <p className="font-footer text-base leading-[130%]">
                Construire ensemble une image de marque solide et cohérente. En adoptant une approche centrée sur vos besoins, je vise à créer pour vous une stratégie innovante et actuelle qui qui résonnera avec votre audience cible et génèrera un engagement nouveau.</p>
            </div>
            <div className="flex-col w-[330px]">
              <p className="font-footer text-[70px] leading-[90%] font-semibold">03.</p>
              <p className="font-footer text-base leading-[90%] font-bold my-6">Conseiller.</p>
              <p className="font-footer text-base leading-[130%]">Dans un monde où la diversité est devenue un facteur non négociable, je serai là pour vous soutenir et vous fournir les outils et conseils nécessaires pour naviguer avec succès dans ces nouveaux enjeux.</p>
            </div>
          </div>
          <div onClick={() => router.push('/projects')} className="mt-[100px] hover:cursor-pointer ml-[100px] flex gap-1.5 w-[105px] pb-2 items-center justify-around">
            <p className="uppercase text-	font-bold font-footer">Projets</p>
            <ArrowRight />
            <div className="border-b-black border-b-2 w-[105px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" />

          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col mx-auto mt-16">
        <p className="text-redHome font-neueSemiBold text-homeMobileTitleServices ml-10">Communication<br></br> & marketing <br></br>digital</p>
        <p className="text-2xl self-end mr-16 -mt-6 hover:cursor-pointer" onClick={handleCommunication}>{isCommunicationSelected ? "-" : "+"}</p>
        {isCommunicationSelected &&
          <div className="ml-5 mt-8">
            <p className="text-[12px] font-footer mx-4">Informer, engager et fidéliser votre audience avec une stratégie moderne et adaptée à vos problématiques.</p>
            <ul className="list-disc ml-10 mt-5">
              <li className="text-[12px] font-footer font-medium">Community management</li>
              <li className="text-[12px] font-footer font-medium">SEO</li>
              <li className="text-[12px] font-footer font-medium">Gestion de projet</li>
              <li className="text-[12px] font-footer font-medium">Analyse de données (analytics)</li>
              <li className="text-[12px] font-footer font-medium">Rédaction</li>
              <li className="text-[12px] font-footer font-medium">Campagnes payantes (ads)</li>
            </ul>
          </div>
        }
        <div className="border-b border-black w-[360px] mx-auto px-10 my-8" />
        <p className="text-redHome ml-10 font-neueSemiBold text-homeMobileTitleServices">Design</p>
        <p className="text-xl self-end mr-16 -mt-6 hover:cursor-pointer" onClick={handleDesign}>{isDesignSelected ? "-" : "+"}</p>
        {isDesignSelected &&
          <div className="ml-5 mt-8">
            <p className="text-[12px] font-footer mx-4">Donner de la puissance à vos messages avec des designs marquants et intuitifs, notamment sur les réseaux.</p>
            <ul className="list-disc ml-10 mt-5">
              <li className="text-[12px] font-footer font-medium">UX/UI design (Figma)</li>
              <li className="text-[12px] font-footer font-medium">Cartes de visite, brochures...</li>
              <li className="text-[12px] font-footer font-medium">Réseaux sociaux (posts, stories).</li>
            </ul>
          </div>
        }
        <div className="border-b border-black w-[360px] mx-auto px-10 my-8" />
        <p className="text-redHome ml-10 font-neueSemiBold text-homeMobileTitleServices">Consulting</p>
        <p className="text-xl self-end mr-16 -mt-6 hover:cursor-pointer" onClick={handleConsulting}>{isConsultingSelected ? "-" : "+"}</p>
        {isConsultingSelected &&
          <div className="ml-5 mt-8">
            <p className="text-[12px] font-footer mx-4">Vous porter vers une communication plus éthique et solidaire qui répond aux problématiques d’aujourd’hui.</p>
            <ul className="list-disc ml-10 mt-5">
              <li className="text-[12px] font-footer font-medium">Relecture inclusive</li>
              <li className="text-[12px] font-footer font-medium">Sensibilisation aux questions LGBTQ+<br></br> & féministes</li>
            </ul>
          </div>
        }
        <div className="bg-yellowHome pb-20 pt-14 mt-20">
          <p className="font-neueRegular text-[25px] leading-[90%] ml-5 mb-12">Expertise</p>
          <div className="flex flex-col gap-4 mx-6 mt-10 mb-8">
            <p className="font-footer leading-[90‰] text-[38px] font-semibold">01.</p>
            <p className="font-semibold mb-2">Analyser.</p>
            <p className="text-[14px] leading-[130%] font-footer">Ma mission est de vous écouter et de vous accompagner pas à pas dans votre parcours. Avoir une compréhension approfondie de vos problématiques pour trouver ensemble des solutions efficaces et personnalisées qui répondent à vos défis uniques.</p>
          </div>
          <div className="flex flex-col gap-4 mx-6 mb-8">
            <p className="font-footer leading-[90‰] text-[38px] font-semibold">02.</p>
            <p className="font-semibold mb-2">Optimiser.</p>
            <p className="text-[14px] leading-[130%] font-footer">Construire ensemble une image de marque solide et cohérente. En adoptant une approche centrée sur vos besoins, je vise à créer pour vous une stratégie innovante et actuelle qui résonnera avec votre audience cible et génèrera un engagement nouveau.</p>
          </div>
          <div className="flex flex-col gap-4 mx-6 mt-10 mb-16">
            <p className="font-footer leading-[90‰] text-[38px] font-semibold">03.</p>
            <p className="font-semibold mb-2">Conseiller</p>
            <p className="text-[14px] leading-[130%] font-footer">Dans un monde où la diversité est devenue un facteur non négociable, je serai là pour vous soutenir et vous fournir les outils et conseils nécessaires pour naviguer avec succès dans cet environnement diversifié.</p>
          </div>
          <div onClick={() => router.push('/projects')} className="py-3 px-2 transition-all duration-300 ease-in-out font-bold text-[7px] text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border rounded-full w-[100px] mx-auto">
            Mes projets
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;