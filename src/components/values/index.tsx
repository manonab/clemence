import RouageAnimation from "@/animations/rouage";
import { Images } from "@/common/images";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "@assets/arrow-right";
import { useRouter } from "next/router";

export const ValueComponent: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex size-full min-h-screen bg-mediumRed my-auto">
        <p className="ml-28 mt-36 font-marsdenHeavy text-[250px] leading-[120%] text-white uppercase">
          It's all about passion
        </p>
      </div>
      <div className="min-h-screen bg-mainColor">
        <div className="flex pt-36 items-start w-full">
          <div className="flex flex-col items-center w-1/2 pr-36">
            <div
              onClick={() => router.push("/projects")}
              className="flex w-[110px] items-center justify-around gap-1.5 pb-2 pl-3 hover:cursor-pointer"
            >
              <p className="font-footer uppercase">Projets</p>
              <ArrowRight />
              <div className="absolute h-8 w-[105px] origin-left border-b-2 border-b-black pl-[100px] transition-transform duration-300 hover:scale-x-0" />
            </div>
            <Image
              src={Images.badass}
              alt="lgbt+ with heels and pride flag"
              className="self-end mt-20"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <p className="text-darkRed text-[80px] leading-[90%] text-left font-marsdenHeavy">
              "Seules 54% des entreprises françaises<br></br> ont embrassé la
              diversité"*
            </p>
            <div className="my-20">
              <p>
                Au fil de ma vie et de ma carrière personnelle, j’ai pu
                appréhender avec clarté<br></br> et détermination les
                bouleversements sociaux qui se jouent depuis<br></br> maintenant
                des années. Pour toutes les entreprises qui souhaitent faire
                <br></br> partie du changement, je propose une{" "}
                <span className="font-bold">relecture inclusive</span> et une
                vision<br></br> sensible de votre communication.
              </p>
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur. Cursus euismod morbi
                tortor sapien vulputate in vestibulum eu faucibus. Nunc tellus
                luctus nisl placerat ornare sed malesuada elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <RouageAnimation
        text1="MANIFESTO"
        text2="MANIFESTO"
        end={-300}
        start={900}
        color="text-customRed"
      />
      <div className="flex size-full min-h-screen bg-mediumRed">
        <div className="mx-auto font-footer my-auto">
          <div className="flex items-center justify-start">
            <p className="text-[70px] text-white tracking-tight">01.</p>
            <p className="text-[28px] leading-[120%]  ml-[60px] text-customBlack">
              L'<span className="text-white">inclusivité</span> et le respect
              d’autrui sont des valeurs fondamentales. <br></br>Faisons de la
              diversité un engagement quotidien.
            </p>
          </div>
          <div className="flex items-center justify-start">
            <p className="text-[70px] text-white tracking-tight">02.</p>
            <p className="text-[28px] leading-[120%] ml-12 text-customBlack">
              La <span className="text-white">bienveillance</span> et l'écoute
              forment la base d'une culture<br></br> d'entreprise saine et
              productive.Le dialogue est la clé.
            </p>
          </div>
          <div className="flex items-center justify-start">
            <p className="text-[70px] text-white tracking-tight">03.</p>
            <p className="text-[28px] leading-[120%] ml-12 text-customBlack">
              Sans <span className="text-white">passion</span>, pas d’action.
              Croyez en votre message, je me charge<br></br>
              de le partager.
            </p>
          </div>
          <div className="flex items-center justify-start">
            <p className="text-[70px] text-white">04.</p>
            <p className="text-[28px] leading-[120%] tracking-tight ml-[45px] text-customBlack">
              <span className="text-white">Amusons nous</span>. Créons, pensons
              et surtout partageons l’amour<br></br> de nos métiers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
