import { motion } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import RouageAnimation from "@/animations/rouage";
import { useHeaderColor } from "@/context";
import { BigArrow } from "@assets/big-arrow";
import CustomSection from "@/components/custom-section";
import BusinessInfo from "@/components/business-infos";

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
      </div>
    </div>
  );
};
export default Mosaic;
