import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import Image from "next/image";

import Chat from "../assets/Chat.svg";
import Clientes from "../assets/Clientes.svg";
import Metas from "../assets/Metas.svg";
import Progresso from "../assets/Progresso.svg";
import Gerenciamento from "../assets/Gerenciamento.svg";

const CardContato = ({ nome, noite }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      <Button
        onClick={() => setOpenModal(!openModal)}
        className={
          nome == "Quero Comecar"
            ? "z-20 w-72 h-12 bg-sky-400 rounded-3xl shadow-md mb-40 hover:scale-110 transition transition-300 cursor-pointer"
            : nome == "Vamos Conversar!"
            ? "w-full grid place-items-center hover:scale-110 transition transition-300 cursor-pointer border-0"
            : nome == "Comecar" && noite == "nao"
            ? "w-72 h-16 grid place-items-center rounded-xl bg-orange-200 mb-12 shadowYellow hover:scale-110 transition transition-300 cursor-pointer"
            : nome == "Comecar" && noite == "sim"
            ? "w-72 h-16 grid place-items-center rounded-xl bg-sky-300 mt-12 shadow-xl border-0 hover:scale-110 transition transition-300 cursor-pointer"
            : nome == "Quero uma automacao!" ||
              nome == "Preciso de uma integracao!"
            ? "w-72 h-16 bg-blue-500 grid place-items-center rounded-2xl hover:scale-110 transition transition-300 cursor-pointer"
            : "border-black text-black col-span-2 w-32 h-10"
        }
      >
        <p
          className={
            nome == "Quero Comecar"
              ? "text-center font-light text-xl font-kumbh text-black"
              : nome == "Vamos Conversar!"
              ? "w-52 h-12 bg-cyan-200 grid place-items-center rounded-xl mb-10 text-black"
              : nome == "Comecar"
              ? "font-dmSerif text-2xl"
              : nome == "Quero uma automacao!" ||
                nome == "Preciso de uma integracao!"
              ? "font-paytone text-lg text-white"
              : ""
          }
        >
          {nome}
        </p>
      </Button>
      {openModal ? (
        <>
          <div
            className={
              noite == "sim"
                ? "absolute top-0 w-1/2 bg-white h-[400px] rounded-2xl z-50"
                : noite == "nao"
                ? "absolute bottom-10 right-1/4 w-1/2 bg-white h-[400px] rounded-2xl z-50"
                : nome == "Quero Comecar"
                ? "absolute top-72 right-1/4 w-1/2 bg-white h-[400px] rounded-2xl z-50"
                : "absolute top-3/4 right-1/4 w-1/2 bg-white h-[400px] rounded-2xl z-50"
            }
          >
            <div className="p-4 flex flex-col gap-5">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                Entraremos em contato com Voce!
              </h3>
              <div>
                <div className="mb-2">
                  <Label htmlFor="email" value="Seu email" />
                </div>
                <TextInput
                  type="email"
                  id="email"
                  name="email"
                  value={emailData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Seu celular" />
                </div>
                <TextInput
                  type="tel"
                  id="number"
                  name="phone"
                  value={emailData.phone}
                  onChange={handleChange}
                  placeholder="(ddd) xxxxx-xxxx"
                  required
                />
              </div>
              <p className="text-center">
                Qual dos servicos voce mais tem interesse?
              </p>
              <div className="flex justify-between px-10">
                <Button
                  className={clickedButton === 1 ? "clicked" : ""}
                  onClick={() => handleChoice(1)}
                >
                  <Image
                    className={""}
                    src={Chat} // Use o caminho correto para o seu arquivo SVG
                    height={"60"}
                    width={"60"}
                    alt="S"
                  ></Image>
                </Button>
                <Button
                  className={clickedButton === 2 ? "clicked" : ""}
                  onClick={() => handleChoice(2)}
                >
                  <Image
                    className={""}
                    src={Metas} // Use o caminho correto para o seu arquivo SVG
                    height={"72"}
                    width={"72"}
                    alt="S"
                  ></Image>
                </Button>
                <Button
                  className={clickedButton === 3 ? "clicked" : ""}
                  onClick={() => handleChoice(3)}
                >
                  <Image
                    className={""}
                    src={Gerenciamento} // Use o caminho correto para o seu arquivo SVG
                    height={"72"}
                    width={"72"}
                    alt="S"
                  ></Image>
                </Button>
                <Button
                  className={clickedButton === 4 ? "clicked" : ""}
                  onClick={() => handleChoice(4)}
                >
                  <Image
                    className={""}
                    src={Clientes} // Use o caminho correto para o seu arquivo SVG
                    height={"72"}
                    width={"72"}
                    alt="S"
                  ></Image>
                </Button>
                <Button
                  className={clickedButton === 5 ? "clicked" : ""}
                  onClick={() => handleChoice(5)}
                >
                  <Image
                    className={""}
                    src={Progresso} // Use o caminho correto para o seu arquivo SVG
                    height={"72"}
                    width={"72"}
                    alt="S"
                  ></Image>
                </Button>
              </div>
              <div className="flex justify-between px-40">
                <Button
                  onClick={() => setOpenModal(!openModal)}
                  className="bg-red-600"
                >
                  Fechar
                </Button>
                <Button
                  onSubmit={handleSubmit}
                  onClick={handleSubmit}
                  className="bg-blue-600"
                >
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CardContato;
