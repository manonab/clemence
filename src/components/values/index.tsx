import RouageAnimation from "@/animations/rouage";
import { Images } from "@/common/images";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "@assets/arrow-right";
import { useRouter } from "next/router";
import { CustomButton } from "../custom-button";

export const ValueComponent: React.FC = () => {
  return (
    <div>
      <div className="flex size-full md:min-h-screen bg-mediumRed">
        <p className="bg-mediumRed md:min-h-screen md:ml-28 mt-36 font-marsdenHeavy md:text-[250px] text-[100px] md:leading-[120%] leading-snug text-white uppercase">
          It's all about passion
        </p>
      </div>
      {/* desktop version */}
      <div className="md:flex hidden min-h-screen bg-mainColor">
        <div className="flex pt-36 items-start w-full">
          <div className="flex flex-col items-center w-1/2 md:pr-36">
            <CustomButton text="Mes projets" redirection="/projects" />
            <Image
              src={Images.badass}
              alt="lgbt+ with heels and pride flag"
              className="self-end mt-20"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <p className="text-darkRed md:text-[80px] leading-[90%] text-left font-marsdenHeavy">
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

      {/* mobile version */}
      <div className="min-h-screen md:hidden bg-mainColor">
        <p className="text-darkRed text-[50px] leading-[100%] text-center font-marsdenHeavy pt-16">
          "Seules 54% des entreprises françaises ont embrassé la diversité"*
        </p>
        <div className="flex items-end w-full mt-20">
          <Image
            src={Images.badass}
            alt="lgbt+ with heels and pride flag"
            className="w-1/2"
          />
          <CustomButton text="Mes projets" redirection="/projects" />
        </div>
        <div className="my-10 mx-2.5">
          <p>
            Au fil de ma vie et de ma carrière personnelle, j’ai pu appréhender
            avec clarté et détermination les bouleversements sociaux qui se
            jouent depuis maintenant des années. Pour toutes les entreprises qui
            souhaitent faire partie du changement, je propose une
            <span className="font-bold">relecture inclusive</span> et une vision
            sensible de votre communication.
          </p>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur. Cursus euismod morbi tortor
            sapien vulputate in vestibulum eu faucibus. Nunc tellus luctus nisl
            placerat ornare sed malesuada elit.
          </p>
        </div>
      </div>
      <div className="hidden md:relative">
        <RouageAnimation
          text1="MANIFESTO"
          text2="MANIFESTO"
          end={-300}
          start={900}
          color="text-customRed mb-[-138px]"
        />
      </div>
      <div className="flex flex-col size-full py-10 bg-mediumRed  my-auto gap-3 px-2.5">
        <p className="text-[30px] text-white tracking-tight">01.</p>
        <p className="text-xl leading-[100%] text-customBlack">
          L'<span className="text-white">inclusivité</span> et le respect
          d’autrui sont des valeurs fondamentales. Faisons de la diversité un
          engagement quotidien.
        </p>
        <p className="text-[30px] text-white tracking-tight">02.</p>
        <p className="text-xl leading-[100%]  text-customBlack">
          L'<span className="text-white">bienveillance</span> et l'écoute
          forment la base d'une culture d'entreprise saine et productive.Le
          dialogue est la clé.
        </p>
        <p className="text-[30px] text-white tracking-tight">03.</p>
        <p className="text-xl leading-[120%] text-customBlack">
          Sans <span className="text-white">passion</span>, pas d’action. Croyez
          en votre message, je me charge de le partager.
        </p>
        <p className="text-[30px] text-white">04.</p>
        <p className="text-xl leading-[120%] tracking-tight text-customBlack">
          <span className="text-white">Amusons nous</span>. Créons, pensons et
          surtout partageons l’amour de nos métiers.
        </p>
      </div>
    </div>
  );
};
