import { Images } from "@/common/images";
import { BigArrow } from "@assets/big-arrow";
import Image from "next/image";

export const ServiceComponent = () => {
  return (
    <div className="size-full my-auto">
      <div className="min-h-screen flex items-center justify-between mb-32">
        <div className="my-auto">
          <Image
            src={Images.jumpPicture}
            alt="old picture"
            className="absolute top-72 left-[500px] z-0"
          />
          <p className="z-[999] relative text-customRed text-[300px] leading-[90%] mt-40 font-marsdenHeavy uppercase mx-28">
            Aller<br></br>plus<br></br>haut
          </p>
        </div>

        <div className="mb-auto mr-28 mt-[280px] flex-col flex">
          <p className="text-customBlack text-[30px]">
            se rapprocher de l'avenir<br></br> radieux de votre projet
          </p>
          <div className="flex flex-col items-center gap-3 mt-[500px]">
            <BigArrow />
            <p className="font-bold uppercase leading-[20px]">SCROLL & ROLL</p>
          </div>
        </div>
      </div>
      <div className="w-screen bg-mediumRed text-customBlack py-10 min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-around w-full px-5">
          <div className="text-left mb-10">
            <div className="flex items-baseline">
              <p className="text-mainColor text-[60px] font-helveticaNeue">
                (01)
              </p>
              <h2 className="text-[50px] font-marsdenHeavy mb-4 leading-[90%] mx-4">
                Communication<br></br> & marketing<br></br>digital
              </h2>
            </div>
            <p className="text-lg">
              Informer, engager et fidéliser votre audience avec une stratégie
              moderne et adaptée à vos problématiques.
            </p>
            <ul className="mt-4 text-left list-disc list-inside space-y-2">
              <li>Community management</li>
              <li>SEO</li>
              <li>Gestion de projet</li>
              <li>Analyse de données (analytics)</li>
              <li>Rédaction</li>
              <li>Campagnes payantes (ads)</li>
            </ul>
          </div>

          <div className="text-left max-w-sm md:max-w-md mb-10 md:mb-0">
            <div className="flex items-baseline">
              <p className="text-mainColor text-[60px] font-helveticaNeue">
                (02)
              </p>
              <h2 className="text-[50px] font-marsdenHeavy mb-4 leading-[90%] mx-4">
                Design
              </h2>
            </div>
            <p className="text-[16px]">
              Donner de la puissance à vos messages avec des designs marquants
              et intuitifs, notamment sur les réseaux.
            </p>
            <ul className="mt-4 text-left list-disc list-inside space-y-2  text-[16px]">
              <li>UX/UI design (Figma)</li>
              <li>Cartes de visite, brochures...</li>
              <li>Réseaux sociaux (posts, stories)</li>
            </ul>
          </div>

          <div className="text-left max-w-sm md:max-w-md">
            <h2 className="text-[50px] font-bold mb-4">
              <span className="text-mainColor text-[60px]  font-marsdenHeavy">
                (03)
              </span>{" "}
              Consulting
            </h2>
            <p className="text-[16px]">
              Vous porter vers une communication plus éthique et solidaire qui
              répond aux problématiques d'aujourd'hui.
            </p>
            <ul className="mt-4 text-left list-disc list-inside space-y-2 text-[16px] min">
              <li>Relecture inclusive</li>
              <li>
                Formation & sensibilisation aux questions LGBTQ+ & féministes
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-mainColor w-screen mt-[300px] flex items-center">
        <div className="flex flex-col w-1/2 mt-[350px]">
          <div className="mt-16 mx-10">
            <p className="text-[70px]">Get in touch</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Cursus euismod morbi
              tortor sapien vulputate in vestibulum eu faucibus. Nunc tellus
              luctus nisl placerat ornare sed malesuada elit.
            </p>
          </div>
          <div className="mt-16 mx-10">
            <p className="text-[70px]">Vous & moi</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Cursus euismod morbi
              tortor sapien vulputate in vestibulum eu faucibus. Nunc tellus
              luctus nisl placerat ornare sed malesuada elit.
            </p>
          </div>
          <div className="mt-16 mx-10">
            <p className="text-[70px]">1..2..3 : créer !</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Cursus euismod morbi
              tortor sapien vulputate in vestibulum eu faucibus. Nunc tellus
              luctus nisl placerat ornare sed malesuada elit.
            </p>
          </div>
        </div>

        <div className="flex flex-col size-full items-end">
          <p className="text-customRed text-[170px] leading-[90%] mb-10 font-marsdenHeavy text-left mr-10">
            La première<br></br>étape est<br></br>toujours d'oser.
          </p>
          <Image
            src={Images.oldGrannies}
            alt="old grannies playing"
            width={500}
            className="right-0 -mt-38"
          />
        </div>
      </div>
    </div>
  );
};
