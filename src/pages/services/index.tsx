import { Remove, Add } from "@mui/icons-material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

import RouageAnimation from "@/animations/rouage";
import { useHeaderColor } from "@/context";
import { ArrowRight } from "@assets/arrow-right";

const Services: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isCommunicationSelected, setIsCommunicationSelected] =
    useState<boolean>(false);
  const [isDesignSelected, setIsDesignSelected] = useState<boolean>(false);
  const [isConsultingSelected, setIsConsultingSelected] =
    useState<boolean>(false);
  const [showWhiteBackground, setShowWhiteBackground] =
    useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  const scrollingTextRef = useRef<HTMLDivElement>(null);

  console.log(scrolled);
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
    setIsCommunicationSelected(
      (isCommunicationSelected: boolean) => !isCommunicationSelected,
    );
  };

  const handleDesign = () => {
    setIsDesignSelected((isDesignSelected: boolean) => !isDesignSelected);
  };
  const handleConsulting = () => {
    setIsConsultingSelected(
      (isConsultingSelected: boolean) => !isConsultingSelected,
    );
  };
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY || window.pageYOffset;
        const threshold = containerRect.top + containerRect.height / 2;
        if (scrollPosition > threshold) {
          setShowWhiteBackground(true);
        } else {
          setShowWhiteBackground(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);
  return (
    <>
      <div className="hidden w-full flex-col  overflow-hidden md:flex">
        <div className="flex h-screen w-full flex-col bg-yellowHome">
          <div className="m-auto  flex  min-h-[450px] w-full justify-evenly">
            <div className="flex h-full w-auto flex-col gap-12">
              <p className="font-neueBold  text-[50px] leading-[90%] text-gray-900">
                Communication &<br></br>marketing digital
              </p>
              <div className="h-full">
                <div className="flex items-end">
                  <p className="w-[300px] text-base text-gray-900">
                    Informer, engager et fidéliser votre audience avec une
                    stratégie moderne et adaptée à vos problématiques.
                  </p>
                  {isCommunicationSelected ? (
                    <div
                      onClick={handleCommunication}
                      className="hover:cursor-pointer"
                    >
                      <Remove />
                    </div>
                  ) : (
                    <div
                      className="hover:cursor-pointer"
                      onClick={handleCommunication}
                    >
                      <Add />
                    </div>
                  )}
                </div>
                <div
                  className={
                    isCommunicationSelected ? "flex flex-col" : "hidden"
                  }
                >
                  <ul className="ml-3 mt-3 list-disc text-gray-900">
                    <li className="text-base font-semibold">Social Media</li>
                    <li className="text-base font-semibold">SEO</li>
                    <li className="text-base font-semibold">
                      Gestion de projet
                    </li>
                    <li className="text-base font-semibold">Rédaction</li>
                    <li className="text-base font-semibold">
                      Campagnes payantes (ads)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 flex h-full w-auto flex-col gap-12">
              <p className="font-neueBold text-[50px] leading-[90%]">Design</p>
              <div className="h-full">
                <div className="flex items-end">
                  <p className="w-[300px] text-base text-gray-900">
                    Donner de la puissance à vos messages avec des designs
                    marquants et intuitifs, notamment sur les réseaux.
                  </p>
                  {isDesignSelected ? (
                    <div
                      onClick={handleDesign}
                      className="hover:cursor-pointer"
                    >
                      <Remove />
                    </div>
                  ) : (
                    <div
                      className="hover:cursor-pointer"
                      onClick={handleDesign}
                    >
                      <Add />
                    </div>
                  )}
                </div>
                <div className={isDesignSelected ? "flex flex-col" : "hidden"}>
                  <ul className="ml-3 mt-3 list-disc text-gray-900">
                    <li className="text-base font-semibold">
                      UX/UI design (Figma)
                    </li>
                    <li className="text-base font-semibold">
                      Cartes de visite, brochures...
                    </li>
                    <li className="text-base font-semibold">
                      Réseaux sociaux (posts, stories).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 flex h-full  w-auto flex-col gap-12">
              <p className="font-neueBold text-[50px] leading-[90%]">
                Consulting
              </p>
              <div>
                <p className="w-[300px] font-footer text-base text-gray-900">
                  <div className="flex items-end">
                    <p className="w-[300px] text-base text-gray-900">
                      Vous portez vers une communication plus éthique et
                      solidaire qui répond aux problématiques d’aujourd’hui.
                    </p>
                    {isConsultingSelected ? (
                      <div
                        onClick={handleConsulting}
                        className="hover:cursor-pointer"
                      >
                        <Remove />
                      </div>
                    ) : (
                      <div
                        className="hover:cursor-pointer"
                        onClick={handleConsulting}
                      >
                        <Add />
                      </div>
                    )}
                  </div>
                </p>
                <div
                  className={isConsultingSelected ? "flex flex-col" : "hidden"}
                >
                  <ul className="ml-3 mt-3 list-disc">
                    <li className="text-base font-semibold">
                      Relecture inclusive
                    </li>
                    <li className="text-base font-semibold">
                      Formation & sensibilisation aux<br></br> questions LGBTQ+
                      & féministes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className={`${showWhiteBackground ? "bg-mainColor" : "bg-yellowHome"}`}
      >
        <RouageAnimation
          text1="CRÉER"
          text2="CRÉER"
          end={-200}
          start={800}
          color="text-orange"
        />
      </div>
      <div className="items-base flex h-screen flex-col justify-center bg-mainColor">
        <p className="-mt-36 mb-20 ml-20 font-neueRegular text-[50px] leading-[90%]">
          Expertise
        </p>
        <div className="flex justify-evenly">
          <div className="w-[330px] flex-col">
            <p className="font-footer text-[70px] font-semibold leading-[90%]">
              01.
            </p>
            <p className="my-6 font-footer text-base font-bold leading-[90%]">
              Analyser.
            </p>
            <p className="font-footer text-base leading-[130%]">
              Ma mission est de vous écouter et de vous accompagner pas à pas
              dans votre parcours. Avoir une compréhension approfondie de vos
              problématiques pour trouver ensemble des solutions efficaces et
              personnalisées qui répondent à vos défis uniques.{" "}
            </p>
          </div>

          <div className="w-[330px] flex-col">
            <p className="font-footer text-[70px] font-semibold leading-[90%]">
              02.
            </p>
            <p className="my-6 font-footer text-base font-bold leading-[90%]">
              Optimiser.
            </p>
            <p className="font-footer text-base leading-[130%]">
              Construire ensemble une image de marque solide et cohérente. En
              adoptant une approche centrée sur vos besoins, je vise à créer
              pour vous une stratégie innovante et actuelle qui qui résonnera
              avec votre audience cible et génèrera un engagement nouveau.
            </p>
          </div>
          <div className="w-[330px] flex-col">
            <p className="font-footer text-[70px] font-semibold leading-[90%]">
              03.
            </p>
            <p className="my-6 font-footer text-base font-bold leading-[90%]">
              Conseiller.
            </p>
            <p className="font-footer text-base leading-[130%]">
              Dans un monde où la diversité est devenue un facteur non
              négociable, je serai là pour vous soutenir et vous fournir les
              outils et conseils nécessaires pour naviguer avec succès dans ces
              nouveaux enjeux.
            </p>
          </div>
        </div>
        <div
          onClick={() => router.push("/projects")}
          className="ml-[100px] mt-[100px] flex w-[105px] items-center justify-around gap-1.5 pb-2 hover:cursor-pointer"
        >
          <p className="text- font-footer	font-bold uppercase">Projets</p>
          <ArrowRight />
          <div className="absolute h-12 w-[105px] origin-left border-b-2 border-b-black transition-transform duration-300 hover:scale-x-0" />
        </div>
      </div>
      <div className="mx-auto mt-16 flex flex-col md:hidden">
        <p className="ml-10 font-neueSemiBold text-homeMobileTitleServices text-redHome">
          Communication<br></br> & marketing <br></br>digital
        </p>
        <p
          className="-mt-6 mr-16 self-end text-2xl hover:cursor-pointer"
          onClick={handleCommunication}
        >
          {isCommunicationSelected ? "-" : "+"}
        </p>
        {isCommunicationSelected && (
          <div className="ml-5 mt-8">
            <p className="mx-4 font-footer text-[12px]">
              Informer, engager et fidéliser votre audience avec une stratégie
              moderne et adaptée à vos problématiques.
            </p>
            <ul className="ml-10 mt-5 list-disc">
              <li className="font-footer text-[12px] font-medium">
                Community management
              </li>
              <li className="font-footer text-[12px] font-medium">SEO</li>
              <li className="font-footer text-[12px] font-medium">
                Gestion de projet
              </li>
              <li className="font-footer text-[12px] font-medium">
                Analyse de données (analytics)
              </li>
              <li className="font-footer text-[12px] font-medium">Rédaction</li>
              <li className="font-footer text-[12px] font-medium">
                Campagnes payantes (ads)
              </li>
            </ul>
          </div>
        )}
        <div className="mx-auto my-8 w-[360px] border-b border-black px-10" />
        <p className="ml-10 font-neueSemiBold text-homeMobileTitleServices text-redHome">
          Design
        </p>
        <p
          className="-mt-6 mr-16 self-end text-xl hover:cursor-pointer"
          onClick={handleDesign}
        >
          {isDesignSelected ? "-" : "+"}
        </p>
        {isDesignSelected && (
          <div className="ml-5 mt-8">
            <p className="mx-4 font-footer text-[12px]">
              Donner de la puissance à vos messages avec des designs marquants
              et intuitifs, notamment sur les réseaux.
            </p>
            <ul className="ml-10 mt-5 list-disc">
              <li className="font-footer text-[12px] font-medium">
                UX/UI design (Figma)
              </li>
              <li className="font-footer text-[12px] font-medium">
                Cartes de visite, brochures...
              </li>
              <li className="font-footer text-[12px] font-medium">
                Réseaux sociaux (posts, stories).
              </li>
            </ul>
          </div>
        )}
        <div className="mx-auto my-8 w-[360px] border-b border-black px-10" />
        <p className="ml-10 font-neueSemiBold text-homeMobileTitleServices text-redHome">
          Consulting
        </p>
        <p
          className="-mt-6 mr-16 self-end text-xl hover:cursor-pointer"
          onClick={handleConsulting}
        >
          {isConsultingSelected ? "-" : "+"}
        </p>
        {isConsultingSelected && (
          <div className="ml-5 mt-8">
            <p className="mx-4 font-footer text-[12px]">
              Vous porter vers une communication plus éthique et solidaire qui
              répond aux problématiques d’aujourd’hui.
            </p>
            <ul className="ml-10 mt-5 list-disc">
              <li className="font-footer text-[12px] font-medium">
                Relecture inclusive
              </li>
              <li className="font-footer text-[12px] font-medium">
                Sensibilisation aux questions LGBTQ+<br></br> & féministes
              </li>
            </ul>
          </div>
        )}
        <div className="mt-20 bg-yellowHome pb-20 pt-14">
          <p className="mb-12 ml-5 font-neueRegular text-[25px] leading-[90%]">
            Expertise
          </p>
          <div className="mx-6 mb-8 mt-10 flex flex-col gap-4">
            <p className="font-footer text-[38px] font-semibold leading-[90‰]">
              01.
            </p>
            <p className="mb-2 font-semibold">Analyser.</p>
            <p className="font-footer text-[14px] leading-[130%]">
              Ma mission est de vous écouter et de vous accompagner pas à pas
              dans votre parcours. Avoir une compréhension approfondie de vos
              problématiques pour trouver ensemble des solutions efficaces et
              personnalisées qui répondent à vos défis uniques.
            </p>
          </div>
          <div className="mx-6 mb-8 flex flex-col gap-4">
            <p className="font-footer text-[38px] font-semibold leading-[90‰]">
              02.
            </p>
            <p className="mb-2 font-semibold">Optimiser.</p>
            <p className="font-footer text-[14px] leading-[130%]">
              Construire ensemble une image de marque solide et cohérente. En
              adoptant une approche centrée sur vos besoins, je vise à créer
              pour vous une stratégie innovante et actuelle qui résonnera avec
              votre audience cible et génèrera un engagement nouveau.
            </p>
          </div>
          <div className="mx-6 mb-16 mt-10 flex flex-col gap-4">
            <p className="font-footer text-[38px] font-semibold leading-[90‰]">
              03.
            </p>
            <p className="mb-2 font-semibold">Conseiller</p>
            <p className="font-footer text-[14px] leading-[130%]">
              Dans un monde où la diversité est devenue un facteur non
              négociable, je serai là pour vous soutenir et vous fournir les
              outils et conseils nécessaires pour naviguer avec succès dans cet
              environnement diversifié.
            </p>
          </div>
          <div
            onClick={() => router.push("/projects")}
            className="translate mx-auto w-[100px] rounded-full border border-black px-2 py-3 text-center text-[7px] font-bold uppercase text-grayBlack transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-grayBlack hover:text-white"
          >
            Mes projets
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
