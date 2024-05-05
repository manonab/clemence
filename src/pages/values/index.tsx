import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";


const Values: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const router = useRouter();
  useEffect(() => {
    console.log(isMobile)
    if (isMobile) {
      setHeaderColor("linear-background");
    } else {
      setHeaderColor("bg-saumon")
    }
  }, [setHeaderColor]);

  return (
    <ParallaxProvider>
      <div className="flex flex-col items-center md:hidden gap-4 mt-10">
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
      <div className="hidden md:flex bg-saumon w-full h-full pt-10 pb-20">
        <p className="text-orange font-neueRegular text-[190px] leading-[90%] ml-16">Tout <br></br> commença<br></br>par une<br></br><span className="text-redHome">idée</span>.</p>
      </div>
      <div className="hidden md:flex flex-col bg-mainColor w-full h-full pt-10">
        <div className="flex items-center justify-evenly -mt-20">
          <p className="font-footer text-justify leading-[150%] text-[18px] min-w-[550px] max-w-[650px]"><span className="font-bold text-[23px]">Spécialisée en communication et marketing digital,</span> j’ai toujours ressenti ce besoin de trouver du sens. Plus qu’un métier, je vois la communication comme un moyen de partager et faire grandir des projets auxquels je crois profondément. Cinq années se sont écoulées depuis mon premier poste et cette idée s’est transformée en un défi que je relève passionnément chaque jour. Grâce à d’autres humain.e.s qui croyaient fort en leur convictions,   j’ai eu la chance de porter défis audacieux et des messages engagés. Serez-vous les prochain.e.s ?</p>
          <div><Image src={Images.pride} alt="men with rainbow flag" /></div>
        </div>
        <div className="flex items-center justify-evenly">
          <p className="absolute left-[15%] font-neueRegular mb-[400px] text-royalBlue text-[60px] leading-[90%] w-1/2">“Seules 54 % des entreprises françaises<br></br> ont embrassé la diversité”.</p>
          <p className="rotate-[269deg] absolute left-[0.5%]">*Têtu; Inclusion, Workday.</p>
          <div><Image src={Images.group} alt="men with rainbow flag" /></div>
          <div className="flex">
            <Image alt="pink arrow" src={Images.manifesto} className="rotate-[180deg] w-[40px] h-[40px] mr-2" />
            <p className="min-w-[550px] max-w-[650px] font-footer text-justify leading-[150%] text-[18px] w-1/2">Au fil de ma vie et de ma carrière personnelle,  j’ai pu appréhender avec clarté et détermination les bouleversements sociaux qui se jouent depuis maintenant des années.  Pour toutes les entreprises qui souhaitent faire partie du changement, je propose une <span className="font-bold">relecture inclusive</span> et une vision sensible de votre communication.</p>
          </div>
        </div>
        <div className="bg-yellowHome !w-full h-full mt-10 pt-20 hidden md:flex flex-col">
          <p className="font-neueRegular text-[60px] leading-[90%] ml-[180px]">Manifesto</p>
          <div className="my-20 flex flex-col gap-4 mx-20">
            <div className="flex items-center justify-evenly">
              <p className="font-semibold text-footer text-[70px] leading-[90px]">01.</p>
              <p className="font-semibold text-footer text-[28px] leading-[120%] text-justify tracking-[02%] w-2/3">
                L&lsquo;<span className="text-orange">inclusivité</span> et le respect d’autrui sont des valeurs fondamentales.<br></br> Faisons de la diversité un engagement quotidien.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold text-footer text-[70px] leading-[90px]">02.</p>
              <p className="font-semibold text-footer text-[28px] tracking-[2%] leading-[120%] text-justify tracking-[02%] w-2/3">
                La <span className="text-orange">bienveillance</span> et l&lsquo;écoute forment la base d&lsquo;une culture<br></br> d&lsquo;entreprise saine et productive. Le dialogue est la clé.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold text-footer text-[70px] leading-[90px]">03.</p>
              <p className="font-semibold text-footer text-[28px] tracking-[2%] leading-[120%] tracking-[2%] text-justify tracking-[02%] w-2/3">
                Sans <span className="text-orange">passion</span>, pas d’action. Croyez en votre message, je me charge<br></br> de le partager.
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="font-semibold text-footer text-[70px] leading-[90px]">04.</p>
              <p className="font-semibold text-footer text-[28px] tracking-[2%] leading-[120%] text-justify tracking-[02%] w-2/3">
                <span className="text-orange">Amusons nous</span> à créer, partager, designer. Partageons l’amour<br></br> de nos métiers.</p>
            </div>
          </div>
          <div onClick={() => router.push('/projects')} className="px-8 py-3.5 transition-all duration-300 ease-in-out font-bold text-[12px] text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border rounded-full mx-auto mb-20">
            Mes projets
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
export default Values;