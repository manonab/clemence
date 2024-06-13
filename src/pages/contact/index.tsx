import { MailOutlined } from "@mui/icons-material";
import { EmailJSResponseStatus, send, init } from "emailjs-com";
import { NextPage } from "next";
import { useEffect, useState } from "react";

import { useHeaderColor } from "@/context";
import { BigDownArrow } from "@assets/big-down-arrow";
import { ContactArrow } from "@assets/contact/contactArrow";

type CloseModalFunction = () => void;

function Modal({ onClose }: { onClose: CloseModalFunction }) {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-md bg-white p-8">
        <p className="text-center font-neueRegular text-xl">
          Votre message a bien été envoyé !
        </p>
        <button
          onClick={onClose}
          className="mx-auto mt-4 block rounded bg-royalBlue px-4 py-2 font-bold text-white"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

const Contact: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    init("IoYqcS-FyoRAsKFCH");
    setHeaderColor("mainColor");
  }, [setHeaderColor]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSendEmail = () => {
    send("service_bws8nok", "template_xk52e9b", {
      user_name: name,
      user_lastName: lastName,
      message: message,
      user_email: email,
      user_object: subject,
    }).then((response: EmailJSResponseStatus) => {
      console.log(response);
      setShowModal(true);
      setName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    });
  };

  return (
    <div className="!w-full">
      {showModal && <Modal onClose={handleCloseModal} />}
      <div className="mx-1 flex flex-col gap-3 md:hidden">
        <div className="mx-6 mb-5 flex flex-col items-start justify-around gap-4">
          <p className="font-neueRegular text-[45px] leading-[100%] text-royalBlue">
            Rencontrons
            <br />
            nous.
          </p>
          <ContactArrow />
        </div>
        <div className="flex justify-around gap-1.5">
          <div className="flex flex-col items-start">
            <p className="mb-2 font-inter">Nom</p>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="max-h-[55px] max-w-[164px] rounded-[5px] border border-black bg-mainColor px-2 py-1"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-2 font-inter">Prénom</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="max-h-[55px] max-w-[164px] rounded-[5px] border border-black bg-mainColor px-2 py-1"
            />
          </div>
        </div>
        <div className="flex justify-around gap-1.5">
          <div className="flex flex-col items-start">
            <p className="mb-2 font-inter">Email</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-h-[55px] max-w-[164px] rounded-[5px] border border-black bg-mainColor px-2 py-1"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-2 font-inter">Objet</p>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="max-h-[55px] max-w-[164px] rounded-[5px] border border-black bg-mainColor px-2 py-1"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="my-1 font-inter">Votre message</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mx-auto min-h-[200px] min-w-[350px] rounded-[5px] border border-black bg-mainColor px-2 py-1 "
          />
        </div>
        <div className="mb-20 mt-5 flex w-auto items-start justify-around">
          <div
            className="mr-4 max-h-[45px] max-w-[130px] rounded-3xl border border-black p-2  hover:cursor-pointer"
            onClick={handleSendEmail}
          >
            <p className="text-center font-footer text-[7px] font-bold uppercase text-grayBlack">
              Hit me baby (one time)
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="mr-8 font-neueCondensed text-[16px] leading-[90%] text-orange">
              Retrouvez moi également sur <br />
              Linkedin juste{" "}
              <a
                className="text-redHome"
                target="_blank"
                href="https://www.linkedin.com/in/cl%C3%A9mence-dequaire/?locale=en_US"
                rel="noreferrer"
              >
                ici
              </a>
              .
            </p>
            <div className="flex items-center gap-1.5">
              <MailOutlined />
              <p className="font-neueCondensed text-[10px] leading-[90%] text-grayBlack">
                clemence.dequaire.pro@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-full flex-col md:flex">
        <p className="ml-20 font-neueRegular text-[200px] leading-tight text-orange">
          Créons
          <br />
          ensemble.
        </p>
        <div className="mx-28 mb-16">
          <BigDownArrow />
        </div>
        <div className="flex w-full  justify-start">
          <div className="flex w-1/2 flex-col items-start px-16">
            <p className="mb-2 font-neueCondensed text-2xl leading-snug -tracking-wide">
              Nom
            </p>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-[5px] border border-black bg-mainColor px-5 py-3"
            />
          </div>
          <div className="flex w-1/2 flex-col items-start px-16">
            <p className="mb-2 font-neueCondensed text-2xl leading-snug tracking-wide">
              Prénom
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-[5px] border border-black bg-mainColor px-5 py-3"
            />
          </div>
        </div>
        <div className="mt-10 flex w-full justify-start">
          <div className="flex w-1/2 flex-col items-start px-16">
            <p className="mb-2 font-neueCondensed text-2xl leading-snug -tracking-wide">
              Email
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-[5px] border border-black bg-mainColor px-5 py-3"
            />
          </div>
          <div className="flex w-1/2 flex-col items-start px-16">
            <p className="mb-2 font-neueCondensed text-2xl leading-snug -tracking-wide">
              Objet
            </p>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-[5px] border border-black bg-mainColor px-5 py-3"
            />
          </div>
        </div>
        <div className="mt-10 flex w-auto flex-col items-start px-16">
          <p className="mb-2 font-neueCondensed text-2xl leading-snug -tracking-wide">
            Votre message
          </p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[250px] w-full rounded-[5px] border border-black bg-mainColor px-5 py-3"
          />
        </div>
        <div className="my-20 ml-28 flex w-3/4 items-start justify-between">
          <div
            className="mr-4 max-h-[105px] max-w-[330px] rounded-3xl border border-black  hover:cursor-pointer"
            onClick={handleSendEmail}
          >
            <p className="p-4 text-center font-footer text-[12px] font-bold uppercase leading-[120%] text-grayBlack">
              Hit me baby (one time)
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="mr-8 font-neueCondensed text-[45px] leading-[100%] text-orange">
              Retrouvez moi également sur <br />
              Linkedin juste
              <a
                className="pl-2 text-redHome"
                target="_blank"
                href="https://www.linkedin.com/in/cl%C3%A9mence-dequaire/?locale=en_US"
                rel="noreferrer"
              >
                ici
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
