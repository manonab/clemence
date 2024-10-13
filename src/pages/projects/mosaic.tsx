import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import RouageAnimation from "@/animations/rouage";
import { useHeaderColor } from "@/context";
import { BigArrow } from "@assets/big-arrow";
import CustomSection from "@/components/custom-section";
import BusinessInfo from "@/components/business-infos";
import { Testimony } from "@/components/testimony";
import { ButtonBottom } from "@/components/button-bottom";
import { Images } from "@/common/images";
import Image from "next/image";

const Mosaic: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const router = useRouter();

  useEffect(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]);

  const concept =
    "Mosaic est une association de défense des droits des personnes LGBTQ+ de 12 à 18 ans. Iels proposent des services d'écoute et d'animations pour les jeunes et leurs proches.";
  const mission =
    "Augmenter la visibilité globale de l'association avec un plan de communication adapté, de nouveaux concepts et en accord avec le ton et le design déjà mis en place.";
  const whatIDid = ["Community management", "Design", "Gestion de projet"];

  return (
    <div>
      <div className="flex-col overflow-hidden">
        <BusinessInfo
          name="MOSA-IC"
          customStyle="mt-26"
          sector="Économie sociale et solidaire"
          location="Londres"
        />
        <CustomSection
          concept={concept}
          mission={mission}
          whatIDid={whatIDid}
        />
        <div className="w-full my-32">
          <RouageAnimation
            isMosaic={true}
            start={-800}
            end={100}
            otherStart={100}
            otherEnd={-800}
          />
        </div>
        <div className="ml-24 my-40">
          <div className="text-left text-[170px] text-customRed max-w-[650px] leading-[90%] font-marsdenHeavy">
            Encourager, éduquer et inspirer.{" "}
          </div>
          <div className="mt-28 flex flex-col items-start justify-end gap-6 self-end max-w-[550px] ml-auto mr-32">
            <div className="flex items-start flex-col">
              <div className="font-footer text-lightRed font-semibold text-[70px]">
                +16%
              </div>
              <div className="text-customBlack font-helveticaCondensed leading-[90%] text-[50px]">
                d'audience globale sur<br></br>l'ensemble des réseaux
              </div>
            </div>
            <div className="flex items-start  flex-col">
              <div className="font-footer text-lightRed font-semibold text-[70px]">
                20
              </div>
              <div className="text-customBlack font-helveticaCondensed leading-[90%] text-[50px]">
                workshops en ligne<br></br> organisés pour les<br></br> jeunes
                de l’association
              </div>
            </div>
            <div className="flex items-start  flex-col">
              <div className="font-footer text-lightRed font-semibold text-[70px]">
                1
              </div>
              <div className="text-customBlack font-helveticaCondensed leading-[90%] text-[50px]">
                nouveau concours littéraire<br></br> pour les personnes Queer.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-32">
          <RouageAnimation
            text1="IN WORD"
            text2="WE TRUST"
            end={-300}
            start={900}
            color="text-customRed"
          />
        </div>
        <div className="my-32">
          <div className="flex justify-evenly">
            <Image
              src={Images.newMosaicPost1}
              alt="Image 3"
              width={420}
              height={420}
              className="object-cover hover:cursor-pointer"
            />
            <Image
              src={Images.newMosaicPost2}
              alt="Image 4"
              width={420}
              height={420}
              className="object-cover  hover:cursor-pointer"
            />
            <Image
              src={Images.newMosaicPost3}
              alt="Image 5"
              width={420}
              height={420}
              className="object-cover  hover:cursor-pointer"
            />
          </div>
          <div className="my-[250px] max-w-[550px] ml-12">
            Lors de ma mission à Mosaic, j’ai eu l’opportunité d’organiser un
            concours littéraire pour la communauté LGBTQ+. De l’idée, à la
            recherche de partenaire jusqu’à la promotion de l’élément sur les
            réseaux sociaux, je suis fière d’avoir pu contribuer à créer un
            événement créatif et inclusif. Un concours par et pour les Queer.
          </div>
        </div>
        <div>
          <Testimony content=" “Clémence was a true pleasure to work with. In joining us she created a new role for herself leveraging her skills and abilities to build on Mosaic's online presence and grew our audience [...]”." />
        </div>
      </div>
      <ButtonBottom />
    </div>
  );
};
export default Mosaic;
