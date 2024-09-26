import { EmailJSResponseStatus, send } from "emailjs-com";
import { NextPage } from "next";
import { useState } from "react";

import { useHeaderColor } from "@/context";
import Image from "next/image";
import { Images } from "@/common/images";
import Link from "next/link";

// type CloseModalFunction = () => void;

// function Modal({ onClose }: { onClose: CloseModalFunction }) {
//   return (
//     <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
//       <div className="rounded-md bg-white p-8">
//         <p className="text-center font-neueRegular text-xl">
//           Votre message a bien été envoyé !
//         </p>
//         <button
//           onClick={onClose}
//           className="mx-auto mt-4 block rounded bg-royalBlue px-4 py-2 font-bold text-white"
//         >
//           Fermer
//         </button>
//       </div>
//     </div>
//   );
// }

const Contact: NextPage = () => {
  // const [showModal, setShowModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSendEmail = () => {
    send("service_bws8nok", "template_xk52e9b", {
      user_name: name,
      user_lastName: lastName,
      message: message,
      user_email: email,
      user_object: subject,
    }).then((response: EmailJSResponseStatus) => {
      console.log(response);
      // setShowModal(true);
      setName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    });
  };

  return (
    <div className="w-screen mt-32">
      <div className="flex">
        <p className="font-marsdenHeavy uppercase text-customRed md:text-[300px] leading-[250px] z-10 ml-20">
          Let's<br></br>keep<br></br>in touch
        </p>
        <Image
          src={Images.oldGranniesWithPhones}
          alt="old grannie with phone"
          className="absolute right-[250px] z-0"
        />
      </div>
      <div className="my-28 flex flex-col m-20">
        <div className="flex w-full justify-start">
          <div className="flex flex-col items-start mr-20 w-1/2">
            <p className="mb-5 text-darkRed text-[40px] font-helveticaNeue">
              Nom
            </p>
            <input className="border-black border rounded-[5px] bg-transparent shadow-gray-400 shadow-sm h-12 md:w-full" />
          </div>
          <div className="flex flex-col items-start ml-20 w-1/2">
            <p className="mb-5 text-customRed text-[40px]  font-helveticaNeue">
              Prénom
            </p>
            <input className="border-black border rounded-[5px] bg-transparent shadow-sm h-12 md:w-full" />
          </div>
        </div>
        <div className="flex flex-col items-start mr-20 mt-10  w-1/2">
          <p className="mb-5 text-darkRed text-[40px]  font-helveticaNeue">
            Objet
          </p>
          <input className="border-black border rounded-[5px] bg-transparent shadow-gray-400 shadow-sm h-12 md:w-[560px]" />
        </div>
        <div className="flex flex-col items-start mr-20 mt-10  w-full">
          <p className="mb-5 text-darkRed text-[40px] font-helveticaNeue">
            Message
          </p>
          <textarea className="p-2 border-black border rounded-[5px] bg-transparent shadow-gray-400 shadow-sm h-[300px] md:w-full" />
        </div>
        <div className="flex items-center justify-end mt-20">
          <Link href={"https://www.linkedin.com/in/cl%C3%A9mence-dequaire/"}>
            <Image
              src={Images.linkedinIcon}
              alt="linkedin"
              className="w-[40px] hover:cursor-pointer"
            />
          </Link>
          <button
            onClick={handleSendEmail}
            className="font-footer uppercase text-white bg-customRed py-3 rounded-[50px] px-5 text-xs w-[220px] h-[60px] ml-10"
          >
            Hit me baby
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
