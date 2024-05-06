import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';

import { MailOutlined } from '@mui/icons-material';
import { useHeaderColor } from "@/context";
import { NextPage } from "next";
import { ContactArrow } from "@assets/contact/contactArrow";
import { BigDownArrow } from "@assets/big-down-arrow";

type CloseModalFunction = () => void;

function Modal({ onClose }: { onClose: CloseModalFunction }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <p className="font-neueRegular text-xl text-center">Votre message a bien été envoyé !</p>
        <button onClick={onClose} className="block mx-auto mt-4 bg-royalBlue text-white font-bold py-2 px-4 rounded">
          Fermer
        </button>
      </div>
    </div>
  );
}

const Contact: NextPage = () => {
  const { setHeaderColor } = useHeaderColor();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    emailjs.init('IoYqcS-FyoRAsKFCH');
    setHeaderColor("mainColor")
  }, [setHeaderColor]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSendEmail = () => {
    emailjs.send("service_bws8nok", "template_xk52e9b", {
      user_name: name,
      user_lastName: lastName,
      message: message,
      user_email: email,
      user_object: subject,
    })
      .then((response: any) => {
        console.log('Email envoyé avec succès !', response);
        setShowModal(true);
        setName('');
        setLastName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error: any) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      });
  };

  return (
    <div className="!w-full">
      {showModal && <Modal onClose={handleCloseModal} />}
      <div className="flex-col flex gap-3 mx-1 md:hidden">
        <div className="mx-6 flex flex-col items-start gap-4 justify-around mb-5">
          <p className="text-royalBlue text-[45px] leading-[100%] font-neueRegular">Rencontrons<br />nous.</p>
          <ContactArrow />
        </div>
        <div className="flex justify-around gap-1.5">
          <div className="flex-col flex items-start">
            <p className="font-inter mb-2">Nom</p>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="px-2 py-1 max-w-[164px] max-h-[55px] rounded-[5px] bg-mainColor border border-black"
            />
          </div>
          <div className="flex-col flex items-start">
            <p className="font-inter mb-2">Prénom</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-2 py-1 max-w-[164px] max-h-[55px] rounded-[5px] bg-mainColor border border-black"
            />
          </div>
        </div>
        <div className="flex justify-around gap-1.5">
          <div className="flex-col flex items-start">
            <p className="font-inter mb-2">Email</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-2 py-1 max-w-[164px] max-h-[55px] rounded-[5px] bg-mainColor border border-black"
            />
          </div>
          <div className="flex-col flex items-start">
            <p className="font-inter mb-2">Objet</p>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="px-2 py-1 max-w-[164px] max-h-[55px] rounded-[5px] bg-mainColor border border-black"
            />
          </div>
        </div>
        <div className="flex-col flex items-start">
          <p className="font-inter ml-5 my-1">Votre message</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-2 py-1 min-w-[370px] rounded-[5px] bg-mainColor border border-black mx-auto min-h-[200px] "
          />
        </div>
        <div className="flex items-start mb-20 justify-around w-auto mt-5">
          <div
            className="hover:cursor-pointer border-black border rounded-3xl p-2 max-w-[130px] max-h-[45px]  mr-4"
            onClick={handleSendEmail}>
            <p className="font-footer font-bold text-[6px] text-center text-grayBlack uppercase">Hit me baby (one time)</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="font-neueCondensed text-[16px] leading-[90%] text-orange mr-8">Retrouvez moi également sur <br />Linkedin juste <a className="text-redHome" target="_blank" href="https://www.linkedin.com/in/cl%C3%A9mence-dequaire/?locale=en_US">ici</a>.</p>
            <div className="flex items-center gap-1.5">
              <MailOutlined />
              <p className="font-neueCondensed text-grayBlack text-[10px] leading-[90%]">clemence.dequaire.pro@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col w-full">
        <div className="">
          <p className="mx-20 text-orange text-[190px] leading-[100%] font-neueRegular">Créons<br />ensemble.</p>
          <div className="mx-28 mb-16">
            <BigDownArrow />
          </div>
          <div className="flex justify-start mx-28 gap-36">
            <div className="flex-col flex items-start w-1/3">
              <p className="mb-2 font-neueCondensed text-[30px] tracking-[-1px] leading-[16px]">Nom</p>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="px-5 py-3 w-full rounded-[5px] bg-mainColor border border-black"
              />
            </div>
            <div className="flex-col flex items-start w-1/3">
              <p className="mb-2 font-neueCondensed text-[30px] tracking-[-1px] leading-[16px]">Prénom</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-5 py-3 w-full rounded-[5px] bg-mainColor border border-black"
              />
            </div>
          </div>
          <div className="my-10 flex justify-start mx-28 gap-36">
            <div className="flex-col flex items-start w-1/3">
              <p className="mb-2 font-neueCondensed text-[30px] tracking-[-1px] leading-[16px]">Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-5 py-3 w-full rounded-[5px] bg-mainColor border border-black"
              />
            </div>
            <div className="flex-col flex items-start w-1/3">
              <p className="font-neueCondensed mb-2 text-[30px] tracking-[-1px] leading-[16px]">Objet</p>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="px-5 py-3 w-full rounded-[5px] bg-mainColor border border-black"
              />
            </div>
          </div>
          <div className="flex-col flex items-start ml-28 w-2/3">
            <p className="font-neueCondensed mb-2 text-[30px] tracking-[-1px] leading-[16px]">Votre message</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-5 py-3 w-full rounded-[5px] min-h-[250px] bg-mainColor border border-black"
            />
          </div>
          <div className="flex items-start my-20 justify-between w-2/3 ml-28">
            <div
              className="hover:cursor-pointer border-black border rounded-3xl max-w-[330px] max-h-[105px]  mr-4"
              onClick={handleSendEmail}
            >
              <p className="font-footer font-bold leading-[120%] p-4 text-[12px] text-center text-grayBlack uppercase">Hit me baby (one time)</p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="font-neueCondensed text-[45px] leading-[100%] text-orange mr-8">Retrouvez moi également sur <br />Linkedin juste <a className="text-redHome" target="_blank" href="https://www.linkedin.com/in/cl%C3%A9mence-dequaire/?locale=en_US">ici</a>.</p>
              <div className="flex items-center gap-1.5">
                <MailOutlined />
                <p className="font-neueCondensed text-grayBlack text-[12px] leading-[90%]">clemence.dequaire.pro@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;