import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { ParallaxProvider } from "react-scroll-parallax";

import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";

const Values: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const router = useRouter();
  useEffect(() => {
    console.log(isMobile);
    if (isMobile) {
      setHeaderColor("linear-background");
    } else {
      setHeaderColor("bg-saumon");
    }
  }, [setHeaderColor]);

  return (
    <ParallaxProvider>
      <div className="mt-10 flex flex-col items-center gap-4 md:hidden">
        <p className="font-neueRegular text-[60px] uppercase leading-[90%] text-redHome hover:cursor-pointer">
          partage
        </p>
        <p className="font-neueRegular text-[60px] uppercase leading-[90%] text-redHome hover:cursor-pointer">
          création
        </p>
        <p className="font-neueRegular text-[60px] uppercase leading-[90%] text-redHome hover:cursor-pointer">
          ambition
        </p>
        <div className="mr-10 mt-20 flex items-start justify-center gap-3">
          <Image
            src={Images.manifesto}
            className="w-[20px] rotate-[185deg]"
            alt="manifesto"
          />
          <p className="w-2/3 text-justify font-footer text-[10px]">
            <span className="font-bold">
              Spécialisée en communication et marketing digital
            </span>
            , j’ai toujours ressenti ce besoin de trouver du sens. Plus qu’un
            métier, je vois la communication comme un moyen de partager et faire
            grandir des projets auxquels je crois profondément.<br></br>
            <br></br>
            Cinq années se sont écoulées depuis mon premier poste et cette idée
            s’est transformée en un défi que je relève passionnément chaque
            jour. Grâce à d’autres humain.e.s qui croyaient fort en leurs
            convictions, j’ai eu la chance de porter des défis audacieux et des
            messages engagés. Peut-être serez-vous les prochain.e.s ?
          </p>
        </div>
        <p className="mb-10 ml-20 self-start text-[8px] font-bold">
          MON PARCOURS
        </p>
        <p className="z-50 -mb-10 font-neueRegular text-[25px] leading-[90%] text-orange">
          “Seules 54 % des<br></br> entreprises françaises<br></br> ont embrassé
          la<br></br> diversité&ldquo;.
        </p>
        <div className="mx-4 flex items-center">
          <Image
            src={Images.group}
            className="h-[210px] w-[160px]"
            alt="group"
          />
          <div className="ml-5 flex items-start justify-end gap-1.5">
            <Image
              src={Images.manifesto}
              className="w-[20px] rotate-[185deg]"
              alt="manifesto"
            />
            <p className="text-justify text-[10px]">
              Au fil de ma vie et de ma carrière personnelle, j’ai pu
              appréhender avec clarté et détermination les bouleversements
              sociaux qui se jouent depuis maintenant des années. Pour toutes
              les entreprises qui souhaitent faire parti du changement, je
              propose une relecture inclusive et une vision sensible de votre
              communication.{" "}
            </p>
          </div>
        </div>
        <div className="mt-10 h-full !w-full bg-yellowHome pb-10 pt-20">
          <p className="mx-10 font-neueRegular text-[20px] leading-[90%]">
            Manifeste
          </p>
          <div className="my-20 flex flex-col gap-4">
            <div className="flex items-center justify-evenly">
              <p className="text-footer text-[35px] font-semibold leading-[90px]">
                01.
              </p>
              <p className="text-footer w-2/3 text-justify text-[12px] font-semibold leading-[120%] tracking-[02%]">
                L&lsquo;<span className="text-orange">inclusivité</span> et le
                respect d’autrui sont des valeurs fondamentales. Faisons de la
                diversité un engagement quotidien.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="text-footer text-[35px] font-semibold leading-[90px]">
                02.
              </p>
              <p className="text-footer w-2/3 text-justify text-[12px] font-semibold leading-[120%] tracking-[02%]">
                La <span className="text-orange">bienveillance</span> et
                l&lsquo;écoute forment la base d&lsquo;une culture
                d&lsquo;entreprise saine et productive. Le dialogue est la clé.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="text-footer text-[35px] font-semibold leading-[90px]">
                03.
              </p>
              <p className="text-footer w-2/3 text-justify text-[12px] font-semibold leading-[120%] tracking-[02%]">
                Sans <span className="text-orange">passion</span>, pas d’action.
                Croyez en votre message, je me charge de le partager.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="text-footer text-[35px] font-semibold leading-[90px]">
                04.
              </p>
              <p className="text-footer w-2/3 text-justify text-[12px] font-semibold leading-[120%] tracking-[02%]">
                <span className="text-orange">Amusons nous</span> à créer,
                partager, designer. Partageons l’amour de nos métiers.
              </p>
            </div>
          </div>
          <div
            onClick={() => router.push("/projects")}
            className="mx-auto w-[100px] rounded-full border border-black px-2 py-3 text-center text-[7px] font-bold uppercase text-grayBlack transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-grayBlack hover:text-white"
          >
            Mes projets
          </div>
        </div>
      </div>
      <div className="hidden size-full bg-saumon pb-20 pt-36 md:flex">
        <p className="ml-16 font-neueRegular text-[250px] leading-[90%] text-orange">
          Tout <br></br> commença<br></br>par une<br></br>
          <span className="text-redHome">idée</span>.
        </p>
      </div>
      <div className="hidden size-full flex-col bg-mainColor pt-10 md:flex">
        <div className="-mt-20 flex items-center justify-evenly">
          <p className="min-w-[550px] max-w-[650px] text-justify font-footer text-[18px] leading-[150%]">
            <span className="text-[23px] font-bold">
              Spécialisée en communication et marketing digital,
            </span>{" "}
            j’ai toujours ressenti ce besoin de trouver du sens. Plus qu’un
            métier, je vois la communication comme un moyen de partager et faire
            grandir des projets auxquels je crois profondément. Cinq années se
            sont écoulées depuis mon premier poste et cette idée s’est
            transformée en un défi que je relève passionnément chaque jour.
            Grâce à d’autres humain.e.s qui croyaient fort en leur convictions,
            j’ai eu la chance de porter des défis audacieux et des messages
            engagés. Serez-vous les prochain.e.s ?
          </p>
          <div>
            <Image src={Images.pride} alt="men with rainbow flag" />
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          <p className="absolute left-[15%] mb-[400px] w-1/2 font-neueRegular text-[60px] leading-[90%] text-royalBlue">
            “Seules 54 % des entreprises françaises<br></br> ont embrassé la
            diversité”.
          </p>
          <p className="absolute left-[0.5%] -mb-24 rotate-[269deg]">
            *Têtu; Inclusion, Workday.
          </p>
          <div>
            <Image src={Images.group} alt="men with rainbow flag" />
          </div>
          <div className="flex">
            <Image
              alt="pink arrow"
              src={Images.manifesto}
              className="mr-2 size-[34px] rotate-180"
            />
            <p className="w-1/2 min-w-[550px] max-w-[650px] text-justify font-footer text-[18px] leading-[150%]">
              Au fil de ma vie et de ma carrière personnelle, j’ai pu
              appréhender avec clarté et détermination les bouleversements
              sociaux qui se jouent depuis maintenant des années. Pour toutes
              les entreprises qui souhaitent faire partie du changement, je
              propose une <span className="font-bold">relecture inclusive</span>{" "}
              et une vision sensible de votre communication.
            </p>
          </div>
        </div>
        <div className="mt-10 hidden h-full !w-full flex-col bg-yellowHome pt-20 md:flex">
          <p className="ml-[180px] font-neueRegular text-[60px] leading-[90%]">
            Manifeste
          </p>
          <div className="m-20 flex flex-col gap-12">
            <div className="flex items-center justify-evenly">
              <p className="text-footer text-[70px] font-semibold leading-[90px]">
                01.
              </p>
              <p className="text-footer w-2/3 text-justify text-[28px] font-semibold leading-[120%] tracking-[02%]">
                L&lsquo;<span className="text-orange">inclusivité</span> et le
                respect d’autrui sont des valeurs fondamentales.<br></br>{" "}
                Faisons de la diversité un engagement quotidien.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="text-footer text-[70px] font-semibold leading-[90px]">
                02.
              </p>
              <p className="text-footer w-2/3 text-justify text-[28px] font-semibold leading-[120%] tracking-[02%]">
                La <span className="text-orange">bienveillance</span> et
                l&lsquo;écoute forment la base d&lsquo;une culture<br></br>{" "}
                d&lsquo;entreprise saine et productive. Le dialogue est la clé.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="text-footer text-[70px] font-semibold leading-[90px]">
                03.
              </p>
              <p className="text-footer w-2/3 text-justify text-[28px] font-semibold leading-[120%] tracking-[02%]">
                Sans <span className="text-orange">passion</span>, pas d’action.
                Croyez en votre message, je me charge<br></br> de le partager.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="text-footer text-[70px] font-semibold leading-[90px]">
                04.
              </p>
              <p className="text-footer w-2/3 text-justify text-[28px] font-semibold leading-[120%] tracking-[02%]">
                <span className="text-orange">Amusons nous</span> à créer,
                partager, designer. Partageons l’amour<br></br> de nos métiers.
              </p>
            </div>
          </div>
          <div
            onClick={() => router.push("/projects")}
            className="translate mx-auto mb-20 rounded-full border border-black px-8 py-3.5 text-center text-[12px] font-bold uppercase text-grayBlack transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-grayBlack hover:text-white"
          >
            Mes projets
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};
export default Values;
