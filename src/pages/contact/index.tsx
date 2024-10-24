import { EmailJSResponseStatus, send } from "emailjs-com";
import { NextPage } from "next";
import { useState } from "react";

import { useHeaderColor } from "@/context";
import Image from "next/image";
import { Images } from "@/common/images";
import Link from "next/link";

const Contact: NextPage = () => {
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
      setName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    });
  };

  return (
    <div className="w-screen mt-32">
      <div className="flex flex-col items-center md:flex-row">
        <p className="font-marsdenHeavy uppercase text-customRed md:text-[300px] text-[100px] leading-[100px] md:leading-[250px] z-10 ml-5 md:ml-20">
          Let's<br></br>keep<br></br>in touch
        </p>
        <Image
          src={Images.oldGranniesWithPhones}
          alt="old grannie with phone"
          className="hidden md:block absolute right-[250px] z-0"
        />
      </div>
      <div className="my-28 flex flex-col px-5 md:m-20">
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col items-start w-full md:w-1/2 mb-10 md:mr-20">
            <p className="mb-2 md:mb-5 text-darkRed text-[25px] md:text-[40px] font-helveticaNeue">
              Nom
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-black border rounded-[5px] bg-transparent shadow-gray-400 shadow-sm h-12 w-full"
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/2 mb-10">
            <p className="mb-2 md:mb-5 text-customRed text-[25px] md:text-[40px] font-helveticaNeue">
              Prénom
            </p>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-black border rounded-[5px] bg-transparent shadow-sm h-12 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-start w-full mb-10">
          <p className="mb-2 md:mb-5 text-darkRed text-[25px] md:text-[40px] font-helveticaNeue">
            Objet
          </p>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border-black border rounded-[5px] bg-transparent shadow-gray-400 shadow-sm h-12 w-full"
          />
        </div>
        <div className="flex flex-col items-start w-full mb-10">
          <p className="mb-2 md:mb-5 text-darkRed text-[25px] md:text-[40px] font-helveticaNeue">
            Message
          </p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border-black border rounded-[5px] bg-transparent shadow-gray-400 shadow-sm h-[200px] md:h-[300px] w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <Link href={"https://www.linkedin.com/in/cl%C3%A9mence-dequaire/"}>
            <Image
              src={Images.linkedinIcon}
              alt="linkedin"
              className="w-[30px] md:w-[40px] hover:cursor-pointer mb-5 md:mb-0"
            />
          </Link>
          <button
            onClick={handleSendEmail}
            className="font-footer uppercase text-white bg-customRed py-3 rounded-[50px] px-5 text-xs w-[150px] md:w-[220px] h-[50px] md:h-[60px]"
          >
            Hit me baby
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
