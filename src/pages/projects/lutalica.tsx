import { NextPage } from "next";
import { useRouter } from "next/router";

import Carousel from "@/components/mosaic/carousel";
import BusinessInfo from "@/components/business-infos";
import CustomSection from "@/components/custom-section";

const Lutalica: NextPage = () => {
  const router = useRouter();

  const concept =
    "Studio Lutalica est un studio de design graphique dédié aux projets et clients féministes et Queer. ";
  const mission =
    "Ma mission principale au sein du studio a été de créer une stratégie de communication digitale pour l’ensemble des réseaux sociaux. L’objectif étant de développer la visibilité et toucher une nouvelle clientèle via les réseaux.";
  const whatIDid = [
    "Community management",
    "Stratégie de marque",
    "Marketing digital",
    "Relations publiques",
    "Gestion de projet",
  ];

  return (
    <div className="flex-col overflow-hidden flex">
      <BusinessInfo
        name="Lutal-ica"
        customStyle="mt-32"
        sector="Design"
        location="Edimbourg"
      />
      <CustomSection concept={concept} mission={mission} whatIDid={whatIDid} />
    </div>
  );
};
export default Lutalica;
