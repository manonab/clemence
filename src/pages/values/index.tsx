import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";


const Values: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const router = useRouter();
  useEffect(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]);

  return (
    <ParallaxProvider>
      <div className="flex-col flex w-full h-auto hidden">
        <div className="!w-full bg-saumon pb-20">
          <p className="ml-10 font-neueRegular text-title text-orange font-medium">Tout commença par une <br></br><span className="text-redHome">idée</span>.</p>
        </div>
        <div className="bg-mainColor h-full flex-col flex">
          <div className="flex gap-12 justify-evenly items-center">
            <div className="w-[659px] ml-10">
              <p className="text-[22px] leading-[110%] font-footer text-justify"><span className="font-semibold">Spécialisée en communication et marketing digital</span>, j&lsquo; ai toujours ressenti ce besoin de trouver du sens.Plus qu&lsquo;un métier, je vois la communication comme un moyen de partager et faire grandir des projets auxquels je crois profondément. Cinq années se sont écoulées depuis mon premier poste et cette idée s’est transformée en un défi que je relève passionnément chaque jour. Grâce à d’autres humain.e.s qui croyaient fort en leur convictions, j’ai eu la chance de porter défis audacieux et des messages engagés. Peut-être serez vous les prochain.e.s ?</p>
            </div>
            <div className="!w-fit bg-white h-[480px] rounded-[50px] -mt-16">
              <Image alt="men with pride flag" src={Images.pride} />
            </div>
          </div>
          <p className="z-10 -mb-32 w-[741px] ml-[300px] leading-[72px] text-royalBlue text-[60px] font-neueRegular">
            &ldquo;Seules 54% des entreprises françaises ont embrassé la diversité&lsquo;.<span className="text-black">*</span>
          </p>
          <div className="flex items-center justify-evenly">
            <div className="z-0 flex justify-start items-center">
              <p className="rotate-[270deg] -mr-16">Têtu, Nom de l’enquête.</p>
              <Image alt="group people" src={Images.group} className="rounded-[50px h-[480px] w-[395px]" />
            </div>
            <p className="text-[18px] font-normal text-justify w-[640px]">
              Au fil de ma vie et de ma carrière personnelle,  j’ai pu appréhender avec clarté et détermination les bouleversements sociaux qui se jouent depuis maintenant des années.  Pour toutes les entreprises qui souhaitent faire partie du changement, je propose une <span className="font-semibold">relecture inclusive</span> et une vision sensible de votre communication.</p>
          </div>
        </div>
        <div className="bg-yellowHome pt-40 -mt-16">
          <p className="font-neueRegular text-[50px] leading-[90%] mx-16">Manifesto</p>
          <div className="w-3/4 mx-auto">
            <div className="flex items-center">
              <p className="font-footer text-[70px] mr-14">01.</p>
              <p className="leading-[100%] text-[28px] font-footer">L&ldquo;<span className="text-orange">inclusivité</span> et le respect d’autrui sont des valeurs fondamentales. Faisons de la diversité un engagement quotidien.</p>
            </div>
            <div className="flex items-center">
              <p className="font-footer text-[70px] mr-11">02.</p>
              <p className="leading-[100%] text-[28px] font-footer">La <span className="text-orange">bienveillance</span> et l&ldquo;écoute forment la base d&ldquo;une culture d&ldquo;entreprise saine et productive. Le dialogue est la clé.</p>
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
          <div onClick={() => router.push('/projects')} className="py-5 px-10 transition-all duration-300 ease-in-out leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border my-20 rounded-full w-[200px] mx-auto">
            Mes projets
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex gap-4 mt-10">
        <p className="text-redHome uppercase hover:cursor-pointer text-[60px] leading-[90%] font-neueRegular">partage</p>
        <p className="text-redHome uppercase hover:cursor-pointer text-[60px] leading-[90%] font-neueRegular">création</p>
        <p className="text-redHome uppercase hover:cursor-pointer text-[60px] leading-[90%] font-neueRegular">ambition</p>
        <div className="flex gap-3 items-start justify-center mr-10 mt-20">
          <Image src={Images.manifesto} className="rotate-[185deg] w-[20px]" alt="manifesto" />
          <p className="font-footer text-justify text-[10px] w-2/3"><span className="font-bold">Spécialisée en communication et marketing digital</span>, j’ai toujours ressenti ce besoin de trouver du sens. Plus qu’un métier, je vois la communication comme un moyen de partager et faire grandir des projets auxquels je crois profondément.<br></br><br></br>
            Cinq années se sont écoulées depuis mon premier poste et cette idée s’est transformée en un défi que je relève passionnément chaque jour. Grâce à d’autres humain.e.s qui croyaient fort en leurs convictions,   j’ai eu la chance de porter des défis audacieux et des messages engagés. Peut-être serez-vous les prochain.e.s ?</p></div>
        <p className="self-start ml-20 text-[8px] font-bold mb-10">MON PARCOURS</p>
        <p className="text-orange -mb-10 z-50 font-neueRegular text-[25px] leading-[90%]">“Seules 54 % des<br></br> entreprises françaises<br></br> ont embrassé la<br></br> diversité&ldquo;.</p>
        <div className="flex items-center mx-4">
          <Image src={Images.group} className="w-[160px] h-[210px]" alt="group" />
          <div className="flex items-start justify-end gap-1.5 ml-5">
            <Image src={Images.manifesto} className="rotate-[185deg] w-[20px]" alt="manifesto" />
            <p className="text-[10px] text-justify">Au fil de ma vie et de ma carrière personnelle,  j’ai pu appréhender avec clarté et détermination les bouleversements sociaux qui se jouent depuis maintenant des années.  Pour toutes les entreprises qui souhaitent faire parti du changement, je propose une relecture inclusive et une vision sensible de votre communication. </p>
          </div>
        </div>
        <div className="bg-yellowHome !w-full h-full pt-20 pb-10 mt-10">
          <p className="font-neueRegular text-[20px] leading-[90%] mx-10">Manifesto</p>
          <div className="my-20 flex flex-col gap-4">
            <div className="flex items-center justify-evenly">
              <p className="font-semibold text-footer text-[35px] leading-[90px]">01.</p>
              <p className="font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3">
                L&lsquo;<span className="text-orange">inclusivité</span> et le respect d’autrui sont des valeurs fondamentales. Faisons de la diversité un engagement quotidien.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold text-footer text-[35px] leading-[90px]">02.</p>
              <p className="font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3">
                La <span className="text-orange">bienveillance</span> et l&lsquo;écoute forment la base d&lsquo;une culture d&lsquo;entreprise saine et productive. Le dialogue est la clé.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold text-footer text-[35px] leading-[90px]">03.</p>
              <p className="font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3">
                Sans <span className="text-orange">passion</span>, pas d’action. Croyez en votre message, je me charge de le partager.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold text-footer text-[35px] leading-[90px]">04.</p>
              <p className="font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3">
                <span className="text-orange">Amusons nous</span> à créer, partager, designer. Partageons l’amour de nos métiers.</p>
            </div>
          </div>
          <div onClick={() => router.push('/projects')} className="py-3 px-2 transition-all duration-300 ease-in-out font-bold text-[7px] text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border rounded-full w-[100px] mx-auto">
            Mes projets
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
export default Values;