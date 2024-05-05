import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { ArrowBack } from "@mui/icons-material";
import { useHeaderColor } from "@/context/index";
import { Images } from "@/common/images/index";

import { useRouter } from "next/router";
import { NextPage } from "next";
import { Capiche001 } from "@assets/capiche/capiche-001";
import { Capiche002 } from "@assets/capiche/capiche-002";
import { BigArrow } from "@assets/big-arrow";
import { ArrowRight } from "@assets/arrow-right";
import { Logo } from "@assets/capiche/logo";


const Capiche: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const router = useRouter()

  useEffect(() => {
    setHeaderColor("linear-background")
  }, [setHeaderColor]);

  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const capicheContent = [
    { title: "Concept.", content: "Capiche est un site spécialisé dans la revente de jeux de société de seconde main. Il se distingue par ses sections dédiées aux produits vintage et japonais, toujours d'occasion. L’objectif est d’encourager le consommateur à un mode de consommation plus responsable via une plateforme ludique et moderne." },
    { title: "Intention.", content: "L’univers et le ton se veulent léger, la palette de couleur est un rappel du logo. Le site et l’application mobile sont à la fois ludiques et fondés sur les principes de L’UX design pour une expérience utilisateur optimum." },
    { title: "Réalisation.", content: "La conception du site web et de l'application mobile a été réalisée sur Figma, en respectant les principes de l'UX design. Une attention particulière a été portée sur la pertinence des recherches des consommateurs et les suggestions personnalisées." },
  ];

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="h-full flex-col items-center justify-center mx-auto w-full">
      <div className="mx-5 w-8 flex md:hidden" onClick={handleGoBack}><ArrowBack /></div>
      <div className="flex-col mb-20">
        <p className="uppercase font-neueRegular md:text-title text-capicheMobile text-redHome text-center mt-[180px] mb-[100px]">Capiche</p>
        <motion.div
          className="mx-auto flex-col flex items-center gap-3 mb-[150px]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...timing, delay: 0.6 }}
        >
          <BigArrow />
          <p className="font-footer uppercase font-bold leading-[20px] text-[14px]">DISCOVER</p>
        </motion.div>
      </div>
      <div className="w-full h-auto mb-16 mt-20 md:py-20 md:bg-yellowHome">
        <Image src={Images.capicheBG} alt="capiche background" className="md:w-2/3 w-full md:rounded-2xl md:mx-auto" />
      </div>
      <div className="w-auto mt-12 mb-10 mx-10 md:hidden">
        <p className="font-neueCondensed text-left leading-[90%] text-orange text-[30px]">Une alternative<br></br> écologique à vos soirées<br></br> endiablées. </p>
      </div>
      <div className="flex gap-6 md:justify-evenly items-start w-full overflow-auto h-full size-12 px-4 mb-10 md:my-20">
        {capicheContent.map((content, index) => (
          <div key={index} className="flex flex-col items-start mpl-6 pb-6">
            <p className="text-redHome font-neueSemiBold lowercase text-[25px] md:text-[50px] mb-5">{content.title}</p>
            <p className="font-footer text-[16px] md:max-w-[280px] min-w-[320px]">{content.content}</p>
          </div>
        ))}
      </div>
      <div className="md:hidden bg-saumon mt-10 pt-10 flex flex-col gap-3 justify-center">
        <div className="flex gap-3 justify-evenly pt-10 ">
          <div className="-mt-10">
            <Capiche001 />
          </div>
          <Capiche002 />
        </div>
        {/* <div className="absolute right-0 ]">
          <Logo />
      </div> */}
      </div>
      <div className="hidden md:flex mt-[120px] pb-[150px] w-full gap-3 justify-center bg-saumon">
        <div className="flex justify-evenly items-center w-full justify-around">
          <Image src={Images.mobileScreen2} alt="capiche screen" className="w-[350px] h-[700px] -mt-10" />
          <p className="text-orange font-neueCondensed text-[50px] leading-[90%] w-[550px] mb-20">Une alternative responsable et économique à vos soirées endiablées. </p>
        </div>
      </div>
      <div className="hidden md:flex w-full gap-3 justify-center bg-mainColor">
        <div className="flex justify-evenly items-center w-full justify-around">
          <p className="font-footer text-[17px] text-justify leading-[150%] w-[500px]">Lorem ipsum dolor sit amet consectetur. Molestie elementum convallis odio lacinia arcu aliquam etiam. A tristique ullamcorper vitae est lectus. Fermentum tellus sit gravida nunc aliquet mi. Habitasse mattis non vulputate tempor ultricies proin montes dignissim consectetur. Netus enim vivamus at sem arcu vitae faucibus cras neque.</p>
          <Image src={Images.mobileScreen1} alt="capiche screen" className="w-[350px] h-[700px] -mt-[350px] mr-20" />
        </div>
      </div>
      <div
        onClick={() => router.push('/projects')}
        className="hidden mb-[250px] mt-10 hover:cursor-pointer ml-[100px] md:flex flex-col w-[200px] pb-2 items-center justify-around">
        <span className="flex items-center gap-3">
          <p className="uppercase text-xs	font-footer">Autres projets</p>
          <ArrowRight />
        </span>
        <div className="border-b-black border-b-2 w-[150px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" />
      </div>
    </div>
  );
}
export default Capiche;