"use client";
import Image from "next/image";
import seta from "./assets/seta.svg";
import setaCruzada from "./assets/setaCruzada.svg";
import Nuvens from "./assets/Nuvens.svg";
import relogio from "./assets/relogio.svg";
import telefone from "./assets/telefone.svg";
import FundoPredios from "./assets/FundoPredios.svg";
import Linkedin from "./assets/Linkedin.svg";
import WhatsApp from "./assets/WhatsApp.svg";
import GitHub from "./assets/GitHub.svg";
import Instagram from "./assets/Instagram.svg";
import OndasTopDireita from "./assets/OndasTopDireita.svg";
import OndasTopEsquerda from "./assets/OndasTopEsquerda.svg";
import iconesHero from "./assets/iconesHero.svg";
import avancar from "./assets/avancar.svg";
import ownSistema from "./assets/ownSistema.svg";
import target from "./assets/target.svg";
import Dashboard from "./dashboards/dashboard";
import Chat from "./assets/Chat.svg";
import Progresso from "./assets/Progresso.svg";
import Gerenciamento from "./assets/Gerenciamento.svg";
import Metas from "./assets/Metas.svg";
import Clientes from "./assets/Clientes.svg";

import { useState } from "react";
import axios from "axios";
import ModalConteudo from "./cardContato/modalConteudo";
import Modal from "./cardContato/modal";
import { ShiftingDropDown } from "./header";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const [emailData, setEmailData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  //----------------------
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <main>
      <div className="bg-slate-100">
        <header className="grid grid-cols-9 items-start px-24 py-3 font-livic  bg-sky-400 fixed z-50 w-full">
          <div className="col-span-3 flex items-center justify-start gap-8 h-full w-full">
            <h1 className="text-4xl font-gilda font-bold col-span-1">Adamo</h1>
            <div className="">
              <button
                onClick={handleOpenModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:scale-105 transition transition-300 cursor-pointer"
              >
                Contate-nos
              </button>

              <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
                <ModalConteudo onClose={handleCloseModal}></ModalConteudo>
              </Modal>
            </div>
          </div>
          <ShiftingDropDown></ShiftingDropDown>
          <div className="col-span-3 grid place-items-end">
            <button
              onClick={handleOpenModal}
              className="hover:scale-110 transition transition-300 cursor-pointer 
             shadow-lg p-2 rounded-lg flex items-center justify-center gap-2
             bg-white w-48"
            >
              Comecar
              <Image
                src={seta} // Use o caminho correto para o seu arquivo SVG
                height={20}
                width={20}
                alt="S"
              />
            </button>

            <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
              <ModalConteudo onClose={handleCloseModal}></ModalConteudo>
            </Modal>
          </div>
        </header>
        <section className="flex flex-col items-center justify-start font-semibold">
          <div className="flex flex-col items-center justify-start gap-10 pt-40 w-full">
            <h1 className="text-7xl text-center font-gilda w-3/4">
              A empresa número 1 em soluções empresariais
            </h1>
            <h2 className="text-3xl font-livic font-light">
              Do que sua empresa precisa?
            </h2>
          </div>
          <div className="flex w-full px-20 justify-around">
            <Image
              className="pt-48"
              src={Clientes} // Use o caminho correto para o seu arquivo SVG
              height={"100%"}
              width={"100%"}
              alt="S"
            ></Image>
            <Image
              className="pt-20"
              src={Chat} // Use o caminho correto para o seu arquivo SVG
              height={"100%"}
              width={"100%"}
              alt="S"
            ></Image>
            <Image
              src={Progresso} // Use o caminho correto para o seu arquivo SVG
              height={"100%"}
              width={"100%"}
              alt="S"
            ></Image>
            <Image
              className="pt-20"
              src={Metas} // Use o caminho correto para o seu arquivo SVG
              height={"100%"}
              width={"100%"}
              alt="S"
            ></Image>
            <Image
              className="pt-48"
              src={Gerenciamento} // Use o caminho correto para o seu arquivo SVG
              height={"100%"}
              width={"100%"}
              alt="S"
            ></Image>
          </div>
          <button
            onClick={handleOpenModal}
            className="hover:scale-105 transition transition-300 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded mb-28 w-60 h-12 font-livic"
          >
            Estou Interessado
          </button>

          <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
            <ModalConteudo onClose={handleCloseModal}></ModalConteudo>
          </Modal>
        </section>
      </div>
      <section>Copiar do outro codigo.</section>
      <section>
        <div></div>
        <div></div>
        <div>
          <span></span>
          <span></span>
          <h1></h1>
          <p></p>
          <div></div>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <h1></h1>
          <p></p>
          <div></div>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <h1></h1>
          <p></p>
          <div></div>
        </div>
      </section>
      <section>
        <div>
          <div></div>
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div>
          <div></div>
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <h1></h1>
          <p></p>
          <div>
            <p></p>
            <div></div>
            <Image></Image>
            <div></div>
          </div>
        </div>
      </section>
      <section>
        <h1></h1>
        <div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <p></p>
            <h1></h1>
          </div>
          <div>
            <p></p>
            <h2></h2>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <p></p>
            <Image></Image>
          </div>
          <div>
            <p></p>
            <Image></Image>
          </div>
          <div>
            <p></p>
            <Image></Image>
          </div>
          <div>
            <p></p>
            <Image></Image>
          </div>
        </div>
      </section>
      <section>
        <h1></h1>
        <div></div>
        <div></div>
      </section>
      <section>
        <Image></Image>
        <div>
          <div>
            <h1></h1>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div>
            <h1></h1>
            <form action=""></form>
          </div>
          <div>
            <h1></h1>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div>
          <div>
            <div></div>
            <p></p>
          </div>
          <div></div>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <Image></Image>
      </section>
    </main>
  );
}
