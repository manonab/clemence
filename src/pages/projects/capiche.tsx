import { ArrowBack } from "@mui/icons-material";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Link } from "react-scroll";

import { Images } from "@/common/images/index";
import { useHeaderColor } from "@/context/index";
import { ArrowRight } from "@assets/arrow-right";
import { BigArrow } from "@assets/big-arrow";
import { Capiche001 } from "@assets/capiche/capiche-001";
import { Capiche002 } from "@assets/capiche/capiche-002";

const Capiche: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const router = useRouter();

  useEffect(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]);

  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const capicheContent = [
    {
      title: "Concept.",
      content:
        "Capiche est un site spécialisé dans la revente de jeux de société de seconde main. Il se distingue par ses sections dédiées aux produits vintage et japonais, toujours d'occasion. L’objectif est d’encourager le consommateur à un mode de consommation plus responsable via une plateforme ludique et moderne.",
    },
    {
      title: "Intention.",
      content:
        "L’univers et le ton se veulent léger, la palette de couleur est un rappel du logo. Le site et l’application mobile sont à la fois ludiques et fondés sur les principes de L’UX design pour une expérience utilisateur optimum.",
    },
    {
      title: "Réalisation.",
      content:
        "La conception du site web et de l'application mobile a été réalisée sur Figma, en respectant les principes de l'UX design. Une attention particulière a été portée sur la pertinence des recherches des consommateurs et les suggestions personnalisées.",
    },
  ];

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="mx-auto size-full flex-col items-center justify-center">
      <div className="mx-5 flex w-8 md:hidden" onClick={handleGoBack}>
        <ArrowBack />
      </div>
      <div className="mb-20 h-screen flex-col">
        <p className="mb-[160px] mt-[180px] text-center font-neueRegular text-capicheMobile uppercase text-redHome md:text-title">
          Capiche
        </p>
        <Link
          to="capiche_target"
          className="hover:cursor-pointer"
          smooth={true}
        >
          <motion.div
            className="mx-auto mb-[150px] flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...timing, delay: 0.6 }}
          >
            <BigArrow />
            <p className="font-footer text-[14px] font-bold uppercase leading-[20px]">
              DISCOVER
            </p>
          </motion.div>
        </Link>
      </div>
      <div
        className="mb-16 mt-20 h-screen w-full md:bg-yellowHome md:py-20"
        id="capiche_target"
      >
        <Image
          src={Images.capicheBG}
          alt="capiche background"
          className="w-full md:mx-auto md:h-full md:w-auto md:rounded-2xl"
        />
      </div>
      <div className="mx-10 mb-10 mt-12 w-auto md:hidden">
        <p className="text-left font-neueCondensed text-[30px] leading-[90%] text-orange">
          Une alternative<br></br> écologique à vos soirées<br></br> endiablées.{" "}
        </p>
      </div>
      <div className="mb-10 flex size-12 items-start gap-6 overflow-auto px-4 md:my-20 md:justify-evenly">
        {capicheContent.map((content, index) => (
          <div key={index} className="mpl-6 flex flex-col items-start pb-6">
            <p className="mb-5 font-neueSemiBold text-[25px] lowercase text-redHome md:text-[50px]">
              {content.title}
            </p>
            <p className="min-w-[320px] font-footer text-[16px] md:max-w-[280px]">
              {content.content}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col justify-center gap-3 bg-saumon pt-10 md:hidden">
        <div className="flex justify-evenly gap-3 pt-10 ">
          <div className="-mt-10">
            <Capiche001 />
          </div>
          <Capiche002 />
        </div>
      </div>
      <div className="mt-[120px] hidden w-full justify-center gap-3 pb-[150px] md:flex">
        <div className="flex w-full items-center justify-around">
          <Image
            src={Images.mobileScreen2}
            alt="capiche screen"
            className="-mt-10 h-[700px] w-[350px]"
          />
          <p className="mb-20 w-[550px] font-neueCondensed text-[50px] leading-[90%] text-orange">
            Une alternative responsable et économique à vos soirées endiablées.{" "}
          </p>
        </div>
      </div>
      <div className="hidden w-full justify-center gap-3 bg-mainColor md:flex">
        <div className="flex w-full items-center justify-around">
          <p className="w-[500px] text-justify font-footer text-[17px] leading-[150%]">
            Lorem ipsum dolor sit amet consectetur. Molestie elementum convallis
            odio lacinia arcu aliquam etiam. A tristique ullamcorper vitae est
            lectus. Fermentum tellus sit gravida nunc aliquet mi. Habitasse
            mattis non vulputate tempor ultricies proin montes dignissim
            consectetur. Netus enim vivamus at sem arcu vitae faucibus cras
            neque.
          </p>
          <Image
            src={Images.mobileScreen1}
            alt="capiche screen"
            className="-mt-[350px] mr-20 h-[700px] w-[350px]"
          />
        </div>
      </div>
      <div
        onClick={() => router.push("/projects")}
        className="mb-[250px] ml-[100px] mt-10 hidden w-[200px] flex-col items-center justify-around pb-2 hover:cursor-pointer md:flex"
      >
        <span className="flex items-center gap-3">
          <p className="font-footer text-xs	uppercase">Autres projets</p>
          <ArrowRight />
        </span>
        <div className="absolute h-12 w-[150px] origin-left border-b-2 border-b-black transition-transform duration-300 hover:scale-x-0" />
      </div>
    </div>
  );
};
export default Capiche;
