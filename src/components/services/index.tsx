import { Images } from "@/common/images";
import { BigArrow } from "@assets/big-arrow";
import Image from "next/image";

export const ServiceComponent = () => {
  return (
    <div className="size-full my-auto">
      <div className="h-screen flex items-center justify-between">
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
        <div className="my-auto mr-28 mt-[280px] flex-col flex">
          <p className="text-customBlack text-[30px]">
            se rapprocher de l'avenir<br></br> radieux de votre projet
          </p>
          <div className="flex flex-col items-center gap-3 mt-[500px]">
            <BigArrow />
            <p className="font-bold uppercase leading-[20px]">SCROLL & ROLL</p>
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
