import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import Clientes from "../assets/Clientes.svg";
import Progresso from "../assets/Progresso.svg";
import Chat from "../assets/Chat.svg";
import Gerenciamento from "../assets/Gerenciamento.svg";
import Metas from "../assets/Metas.svg";
import Image from "next/image";
import axios from "axios";

const ModalConteudo = ({ onClose }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (emailData.email && emailData.phone) {
      try {
        await axios.post(
          "https://us-central1-a1b2c3kkk98.cloudfunctions.net/emailHandler/sendEmail",
          emailData
        );
        alert("E-mail enviado com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        alert("Erro ao enviar e-mail.");
      }
    } else {
      alert("Voce precisa preencher todos os campos!");
    }
  };

  const [emailData, setEmailData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const handleChoice = (escolha) => {
    setClickedButton(escolha);
    setEmailData({
      ...emailData,
      name: escolha,
    });
  };

  const [clickedButton, setClickedButton] = useState(null);

  return (
    <>
      <div className="flex flex-col bg-white rounded-2xl items-center justify-around p-8 h-full z-20 relative">
        <p className="font-livic text-lg">Entraremos em contato com você !</p>
        <form className="w-full flex flex-col items-center gap-10">
          <input
            type="tel"
            id="number"
            name="phone"
            value={emailData.phone}
            onChange={handleChange}
            className="p-2 w-3/4 h-10 bg-sky-300 border-solid border-neutral-200 rounded-2xl hover:bg-neutral-200 cursor-pointer"
            placeholder="Seu telefone"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={emailData.email}
            onChange={handleChange}
            className="p-2 w-3/4 h-10 bg-sky-300 border-solid border-neutral-200 rounded-2xl hover:bg-neutral-200 cursor-pointer"
            placeholder="Seu Email"
          />
        </form>
        <p className="font-livic text-lg">Quais servicos voce tem interesse?</p>
        <div className="flex w-full justify-around items-center">
          <Button
            onClick={handleChoice}
            className="grid place-items-center size-24 hover:scale-105 transition transition-300"
          >
            <Image src={Chat} width={"100%"} heigh={"100%"} alt="opcao"></Image>
          </Button>
          <Button
            onClick={handleChoice}
            className="grid place-items-center size-24 hover:scale-105 transition transition-300"
          >
            <Image
              src={Gerenciamento}
              width={"100%"}
              heigh={"100%"}
              alt="opcao"
            ></Image>
          </Button>
          <Button
            onClick={handleChoice}
            className="grid place-items-center size-24 hover:scale-105 transition transition-300"
          >
            <Image
              src={Metas}
              width={"100%"}
              heigh={"100%"}
              alt="opcao"
            ></Image>
          </Button>
          <Button
            onClick={handleChoice}
            className="grid place-items-center size-24 hover:scale-105 transition transition-300"
          >
            <Image
              src={Progresso}
              width={"100%"}
              heigh={"100%"}
              alt="opcao"
            ></Image>
          </Button>
          <Button
            onClick={handleChoice}
            className="grid place-items-center size-24 hover:scale-105 transition transition-300"
          >
            <Image
              src={Clientes}
              width={"100%"}
              heigh={"100%"}
              alt="opcao"
            ></Image>
          </Button>
        </div>
        <div className="flex w-full items-center justify-around">
          <Button
            onClick={onClose}
            className="w-36 h-10 bg-red-600 rounded-lg grid place-items-center font-livic font-semibold hover:scale-105 hover:bg-red-500 transition transition-300"
          >
            Fechar
          </Button>
          <Button
            onClick={handleSubmit}
            className="w-36 h-10 bg-blue-500 rounded-lg grid place-items-center font-livic font-semibold hover:scale-105 hover:bg-sky-400 transition transition-300"
          >
            Enviar
          </Button>
        </div>
      </div>
    </>
  );
};

export default ModalConteudo;
