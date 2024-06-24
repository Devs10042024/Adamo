"use client";
import Image from "next/image";
import seta from "./assets/seta.svg";
import Dashboard from "./dashboards/dashboard";
import Chat from "./assets/Chat.svg";
import Progresso from "./assets/Progresso.svg";
import Gerenciamento from "./assets/Gerenciamento.svg";
import Metas from "./assets/Metas.svg";
import linhaPreta from "./assets/linhaPreta.svg";
import engrenagem from "./assets/engrenagem.svg";
import linhaRoxa from "./assets/linhaRoxa.svg";
import Clientes from "./assets/Clientes.svg";
import hand from "./assets/hand.svg";
import word from "./assets/word.svg";
import pdf from "./assets/pdf.svg";
import sombra from "./assets/sombra.svg";
import email from "./assets/email.svg";
import chart from "./assets/chart.svg";
import rosto1 from "./assets/rosto1.svg";
import rosto2 from "./assets/rosto2.svg";
import rosto3 from "./assets/rosto3.svg";
import rosto4 from "./assets/rosto4.svg";
import rosto5 from "./assets/rosto5.svg";
import comodos from "./assets/comodos.svg";
import balde from "./assets/balde.svg";
import renova from "./assets/renova.svg";
import mobilias from "./assets/mobilias.svg";
import financeiro from "./assets/financeiro.svg";
import viagem from "./assets/viagem.svg";
import react from "./assets/react.svg";
import bootstrap from "./assets/bootstrap.svg";
import angular from "./assets/angular.svg";
import vue from "./assets/vue.svg";
import javascript from "./assets/javascript.svg";
import automatize from "./assets/automatize.svg";
import simplifique from "./assets/simplifique.svg";
import site from "./assets/site.svg";
import entenda from "./assets/entenda.svg";
import organize from "./assets/organize.svg";
import acompanhe from "./assets/acompanhe.svg";
import front from "./assets/front.svg";

import { useState } from "react";
import axios from "axios";
import ModalConteudo from "./cardContato/modalConteudo";
import Modal from "./cardContato/modal";
import { ShiftingDropDown } from "./header";
import { FaChevronDown } from "react-icons/fa";
import FAQ from "./components/faq";

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

  //-------------------------------
  const questions = [
    {
      question: "Como funcionam os precos?",
      answer:
        "React é uma biblioteca JavaScript para construir interfaces de usuário.",
    },
    {
      question: "Como vou ter acesso aos servicos?",
      answer:
        "Tailwind CSS é um framework CSS utilitário para criar layouts rapidamente.",
    },
    {
      question: "Voces oferecem garantia?",
      answer:
        "Tailwind CSS é um framework CSS utilitário para criar layouts rapidamente.",
    },
    {
      question: "Quanto tempo leva para eu ter acesso aos servicos?",
      answer:
        "Tailwind CSS é um framework CSS utilitário para criar layouts rapidamente.",
    },
    // Adicione mais perguntas conforme necessário
  ];

  return (
    <main>
      <div className="bg-slate-800 bgHero">
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
        <section className="flex flex-col items-center justify-start relative py-32">
          <h1 className="text-7xl text-white text-center font-gilda w-3/4 ">
            A empresa número 1 em soluções empresariais
          </h1>
          <Image src={front} className="mb-"></Image>
          <button
            onClick={handleOpenModal}
            className="
              absolute bottom-14 right-40
              hover:scale-105 transition transition-300 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-full mb-28 w-72 h-12 font-livic"
          >
            Quero Comecar
          </button>
          <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
            <ModalConteudo onClose={handleCloseModal}></ModalConteudo>
          </Modal>
        </section>
      </div>
      <section className="flex flex-col items-center pt-20 gap-20">
        <h1 className="font-dmSerif text-5xl text-center w-[800px]">
          Tenha mais controle do que acontece na sua empresa
        </h1>
        <Dashboard></Dashboard>
      </section>
      <section className="flex flex-col items-center pt-20 gap-20 pb-20">
        <div className="text-center grid place-items-center gap-8 w-1/2">
          <h1 className="text-4xl font-dmSerif">
            Aumente sua produtividade e cresca seu negócio
          </h1>
          <h2 className="text-lg font-livic w-2/3">
            Seja voce uma start-up, uma empresa grande ou pequena nossos
            servicos sao certos para você
          </h2>
        </div>

        <div
          className="relative w-1/2 h-80 bg-indigo-200 rounded-2xl
        p-5 flex"
        >
          <span className="bg-white h-full w-10 absolute top-0 right-32"></span>
          <div className="w-3/5 flex flex-col gap-2 pt-10">
            <h1 className="font-livic font-bold text-xl">
              Automatize seus servicos
            </h1>
            <p className="font-livic text-sm">
              Na Adamo nosso time de especialistas é capaz de criar solucoes
              criativas para as mais diversas atividades.
            </p>
            <p className="font-livic text-sm pt-8">
              Voce nos mostra o que nao gosta de fazer, e nós pensamos em uma
              forma de voce nao faze-lo
            </p>
          </div>
          <div className="w-full h-full grid place-items-center">
            <div className="relative w-4/5 h-48 bg-white rounded-2xl shadowLinear grid place-items-center grid-cols-4 p-6">
              <Image
                className="rounded-full size-12 absolute -top-4 -left-4"
                src={engrenagem}
              ></Image>
              <span className="w-14 h-[1.5px] bg-gray-300 rounded-full absolute left-16 -rotate-45"></span>
              <span className="w-14 h-[1.5px] bg-gray-300 rounded-full absolute right-[120px] -rotate-45"></span>
              <span className="w-14 h-[1.5px] bg-gray-300 rounded-full absolute left-[120px] rotate-45"></span>
              <span className="w-14 h-[1.5px] bg-gray-300 rounded-full absolute right-16 rotate-45"></span>

              <div className="z-20 grid place-items-center ml-8 col-span-2 size-12 rounded-full bg-white shadow-md">
                <Image src={chart}></Image>
              </div>
              <div className="z-20 grid place-items-center mr-8 col-span-2 size-12 rounded-full bg-white shadow-md">
                <Image src={hand}></Image>
              </div>
              <div className="z-20 grid place-items-center col-span-1 size-12 rounded-full bg-white shadow-md">
                <Image src={word}></Image>
              </div>
              <div className="z-20 grid place-items-center col-span-2 size-12 rounded-full bg-white shadow-md">
                <Image src={pdf}></Image>
              </div>
              <div className="z-20 grid place-items-center col-span-1 size-12 rounded-full bg-white shadow-md">
                <Image src={email}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-10">
          <div
            className="relative w-2/5 bg-blue-200 text-center py-5 flex flex-col items-center
          h-[600px] rounded-2xl font-livic"
          >
            <span className="w-full h-12 absolute  bg-white top-60"></span>
            <div
              className="w-44 h-12 bg-neutral-200 absolute z-30 top-40 left-20 rounded-3xl
            flex gap-2 items-center px-4"
            >
              <Image className="size-8 rounded-full" src={rosto3}></Image>
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-[10px] text-neutral-500">
                  Joao Guilherme
                </h1>
                <p className="text-xs text-green-400 font-black">
                  Tarefa Concluida
                </p>
              </div>
            </div>
            <span></span>
            <h1 className="font-black text-xl text-gray-600">
              Juntos somos mais Fortes!
            </h1>
            <p className="text-gray-500 p-5 pt-5">
              Colabore com seus colegas de forma eficiente, boa comunicacao e a
              chave para o sucesso
            </p>
            <div
              className="w-1/2 h-[390px] bg-white rounded-2xl mt-8 shadowCustom1
            flex flex-col items-center gap-6 p-5 z-20"
            >
              <h1 className="font-bold">Progresso</h1>
              <div className="flex gap-4">
                <Image
                  className="size-8 rounded-full bg-black"
                  src={rosto1}
                ></Image>
                <Image
                  className="size-8 rounded-full bg-black"
                  src={rosto2}
                ></Image>
                <Image
                  className="size-8 rounded-full bg-black"
                  src={rosto3}
                ></Image>
                <Image
                  className="size-8 rounded-full bg-black"
                  src={rosto4}
                ></Image>
                <Image
                  className="size-8 rounded-full bg-black"
                  src={rosto5}
                ></Image>
              </div>
              <div>
                <div className="flex justify-center gap-8">
                  <div className="w-[15px] h-[63px] relative bg-zinc-100 rounded-xl">
                    <div className="w-[15px] h-[29px] left-0 top-[34px] absolute bg-yellow-300 rounded-bl-lg rounded-br-lg" />
                  </div>
                  <div className="w-[15px] h-[63px] relative bg-zinc-100 rounded-xl">
                    <div className="w-[15px] h-11 left-0 top-[19px] absolute bg-lime-400 rounded-bl-lg rounded-br-lg" />
                  </div>
                  <div className="w-[15px] h-[63px] relative bg-zinc-100 rounded-xl">
                    <div className="w-[15px] h-[63px] left-0 top-0 absolute bg-emerald-500 rounded-lg" />
                  </div>
                  <div className="w-[15px] h-[63px] relative bg-zinc-100 rounded-xl">
                    <div className="w-[15px] h-[33px] left-0 top-[30px] absolute bg-yellow-300 rounded-bl-lg rounded-br-lg" />
                  </div>
                  <div className="w-[15px] h-[63px] relative bg-zinc-100 rounded-xl">
                    <div className="w-[15px] h-3 left-0 top-[51px] absolute bg-red-500 rounded-bl-lg rounded-br-lg" />
                  </div>
                </div>
                <div className="flex gap-[30px] justify-center">
                  <p className="font-black text-[8px]">45%</p>
                  <p className="font-black text-[8px]">75%</p>
                  <p className="font-black text-[8px]">100%</p>
                  <p className="font-black text-[8px]">50%</p>
                  <p className="font-black text-[8px]">15%</p>
                </div>
              </div>
              <div className="w-60 h-40 rounded-xl border border-zinc-100 flex flex-col items-center gap-2">
                <h1 className="font-semibold text-xs pt-2">Desempenho Anual</h1>
                <div className="flex gap-2 items-end">
                  <div className="w-2 h-[73.07px]  bg-blue-400 rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="w-2 h-[58.54px]  bg-teal-300 rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="w-2 h-[73.07px] bg-sky-300 rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="w-2 h-[80.78px] bg-blue-400 rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="w-2 h-[68.07px] bg-teal-300 rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="w-2 h-[73.07px] bg-blue-400 rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="w-2 h-[58.54px] bg-sky-300 rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="w-2 h-[68.07px]  bg-sky-300 rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="w-2 h-[80.78px]  bg-blue-400 rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="w-2 h-[58.54px] bg-teal-300 rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="w-2 h-[58.54px]  bg-teal-300 rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="w-2 h-[73.07px] bg-sky-300 rounded-tl-[5px] rounded-tr-[5px]" />
                </div>
                <div className="flex gap-[11px] items-center font-bold text-[8px]">
                  <p>J</p>
                  <p>F</p>
                  <p>M</p>
                  <p>A</p>
                  <p>M</p>
                  <p>J</p>
                  <p>J</p>
                  <p>A</p>
                  <p>S</p>
                  <p>O</p>
                  <p>N</p>
                  <p>D</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative w-2/5 bg-sky-200 text-center py-5 flex flex-col items-center
          h-[600px] rounded-2xl font-livic z-30"
          >
            <span className="w-full h-12 absolute  bg-white bottom-36"></span>
            <span className="size-8 rounded-full bg-sky-300 absolute top-60 right-24"></span>
            <span className="size-16 rounded-full bg-sky-300 absolute bottom-6 left-32 "></span>

            <h1 className="font-black text-xl text-gray-600">
              Tome decisões com base nos Fatos!
            </h1>
            <p className="text-gray-500 p-5 pt-5">
              Com nosso sistema de gerenciamento é mais simples entender o que
              esta acontecendo. Novos pontos de vista, novas abordagens.
            </p>
            <div className="z-30 w-1/2 h-[390px] bg-white rounded-2xl mt-8 shadowCustom1 flex flex-col items-center py-8 gap-5">
              <div className="relative w-60 h-44 rounded-xl border border-zinc-100 flex flex-col items-center gap-2">
                <div className="flex w-full justify-between px-5 pt-4">
                  <h1 className="font-bold text-neutral-600 text-xs">
                    Estatísticas
                  </h1>
                  <div className="flex items-center gap-1">
                    <p className="text-[8px]">Essa semana</p>
                    <FaChevronDown className="size-2 text-gray-400"></FaChevronDown>
                  </div>
                </div>
                <Image
                  className="z-20 absolute top-16"
                  src={linhaPreta}
                ></Image>
                <Image className="z-20 absolute top-16" src={linhaRoxa}></Image>
                <span className="w-5/6 h-[1.5px] bg-zinc-100 rounded-full absolute top-16"></span>
                <span className="w-5/6 h-[1.5px] bg-zinc-100 rounded-full absolute top-28"></span>
              </div>
              <div className="relative w-60 h-40 rounded-xl border border-zinc-100 flex flex-col items-start p-5 gap-2">
                <h1 className="text-xs font-bold">Estoque</h1>
                <div className="flex w-full justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] text-sky-400 text-start">
                      Produtos para Venda
                    </p>
                    <p className="text-[8px] text-gray-400 text-start">
                      600 Unidades
                    </p>
                  </div>
                  <p className="text-xs text-green-400">+20</p>
                </div>
                <div className="flex w-full justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] text-sky-400 text-start">
                      Produtos para Uso
                    </p>
                    <p className="text-[8px] text-gray-400 text-start">
                      727 Unidades
                    </p>
                  </div>
                  <p className="text-xs text-green-400">+32</p>
                </div>
                <div className="flex w-full justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] text-sky-400 text-start">
                      Despesas
                    </p>
                    <p className="text-[8px] text-gray-400 text-start">
                      322 Unidades
                    </p>
                  </div>
                  <p className="text-xs text-red-400">-12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20 flex flex-col items-center font-livic text-center">
        <h1 className="font-dmSerif text-5xl">Precisa de um site novo?</h1>
        <div className="grid grid-cols-3 pt-40 place-items-center">
          <Image src={financeiro}></Image>
          <Image src={viagem}></Image>
          <Image src={mobilias}></Image>
          <div className="col-span-3">
            <h1 className="font-bold text-4xl">Renove sua aparencia</h1>
            <h1 className="font-bold text-4xl">Melhore sua convergencia!</h1>
            <div className="flex gap-20 items-center pt-5">
              <div className="flex flex-col items-center gap-2">
                <div className="grid place-items-center size-20 rounded-full bg-gray-200">
                  <Image src={javascript}></Image>
                </div>
                <Image src={sombra}></Image>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="grid place-items-center size-20 rounded-full bg-gray-200">
                  <Image src={bootstrap}></Image>
                </div>
                <Image src={sombra}></Image>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="grid place-items-center size-20 rounded-full bg-gray-200">
                  <Image src={angular}></Image>
                </div>
                <Image src={sombra}></Image>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="grid place-items-center size-20 rounded-full bg-gray-200">
                  <Image src={react}></Image>
                </div>
                <Image src={sombra}></Image>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="grid place-items-center size-20 rounded-full bg-gray-200">
                  <Image src={vue}></Image>
                </div>
                <Image src={sombra}></Image>
              </div>
            </div>
          </div>
          <Image src={balde}></Image>
          <Image src={renova}></Image>
          <Image src={comodos}></Image>
        </div>
      </section>
      <section className="bg-sky-300 pt-20 pb-32 font-livic">
        <div className="flex items-center justify-between w-full">
          <div className="flex w-1/3 items-center">
            <span className="w-full h-[1px] bg-white"></span>
            <span className="size-1 rounded-full bg-white"></span>
          </div>
          <h1 className="font-dmSerif text-5xl text-white">Casos de Uso</h1>
          <div className="flex w-1/3 items-center">
            <span className="size-1 rounded-full bg-white"></span>
            <span className="w-full h-[1px] bg-white"></span>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center pt-40">
          <div className="flex w-full gap-5 px-20 justify-center">
            <div className="w-1/3 h-52 bg-white rounded-2xl flex flex-col gap-2 items-start text-start p-8">
              <Image src={organize}></Image>
              <h1 className="font-bold text-xl text-sky-300">
                Organize suas equipes
              </h1>
              <p className="text-sm text-gray-500">
                Usando nosso sistema de tarefas é facil destribuir e acompanhar
                o trabalho da sua equipe. Nao é mais necessario ficar no escuro
                com o que acontece.
              </p>
            </div>
            <div className="w-1/3 h-52 bg-white rounded-2xl flex flex-col gap-2 items-start text-start p-8">
              <Image src={entenda}></Image>
              <h1 className="font-bold text-xl text-sky-300">
                Entenda seu estoque
              </h1>
              <p className="text-sm text-gray-500">
                Saiba com facilidade o que entra e sai da sua empresa, com nosso
                programa de estoque para empresas fica simples acompanhar suas
                compras e vendas.
              </p>
            </div>
            <div className="w-1/3 h-52 bg-white rounded-2xl flex flex-col gap-2 items-start text-start p-8">
              <Image src={simplifique}></Image>
              <h1 className="font-bold text-xl text-sky-300">
                Simplifique suas tarefas
              </h1>
              <p className="text-sm text-gray-500">
                Um controle facil e intuitivo das etapas para voce concluir suas
                tarefas. Saiba o que é mais urgente e haja de forma mais
                produtiva
              </p>
            </div>
          </div>
          <div className="flex w-full px-20 gap-5 justify-center">
            <div className="w-1/3 h-52 bg-white rounded-2xl flex flex-col gap-2 items-start text-start p-8">
              <Image src={site}></Image>
              <h1 className="font-bold text-xl text-sky-300">
                Tenha um site novo
              </h1>
              <p className="text-sm text-gray-500">
                Quer ficar de cara nova? Faremos isso para voce! Renovaremos seu
                site de acordo VOCE . Todos gostamos de renovar o guarda roupa
                de vez em quando.
              </p>
            </div>
            <div className="w-1/3 h-52 bg-white rounded-2xl flex flex-col gap-2 items-start text-start p-8">
              <Image src={acompanhe}></Image>
              <h1 className="font-bold text-xl text-sky-300">
                Acompanhe a comunicacao da sua equipe
              </h1>
              <p className="text-sm text-gray-500">
                Com nosso sistema de chat para equipes voce pode ver toda a
                comunicacao de seus funcionarios na empresa
              </p>
            </div>
          </div>
          <div className="flex w-full px-20 gap-5 justify-center">
            <div className="w-1/3 h-60 bg-white rounded-2xl flex flex-col gap-2 items-start text-start p-8">
              <Image src={automatize}></Image>
              <h1 className="font-bold text-xl text-sky-300">
                Automatize seus servicos
              </h1>
              <p className="text-sm text-gray-500">
                Tem uma tarefa chata que odeia fazer? Que tal nós automatizarmos
                ela para voce? Com nossa equipe de profissionais tudo se torna
                possivel
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex px-32 justify-between items-center pb-40 pt-60 font-dmSerif">
        <div className="flex flex-col items-start text-start gap-10 min-w-[600px]">
          <div>
            <p className="text-sky-400 text-lg">Questionamentos</p>
            <h1 className="text-4xl ">
              Esta com alguma duvida?<br></br> Veja algumas perguntas
              frequentes.
            </h1>
          </div>
          <div className="pt-10">
            <p className="text-sky-400 text-lg">Algo mais?</p>
            <h2 className="text-gray-600 text-xl">
              Nao tirou sua duvida com as perguntas ao lado? Nos envie<br></br>
              uma mensagem que entraremos em contato
            </h2>
          </div>
          <div>
            <button
              onClick={handleOpenModal}
              className="px-4 py-2 bg-blue-500 text-white rounded-full w-52 h-12 shadow-lg hover:scale-105 transition transition-300 cursor-pointer"
            >
              Contate-nos
            </button>

            <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
              <ModalConteudo onClose={handleCloseModal}></ModalConteudo>
            </Modal>
          </div>
        </div>
        <div className="flex flex-col w-full items-end text-start gap-10 font-livic">
          <FAQ questions={questions} />
        </div>
      </section>
      <section className="flex justify-around items-center py-5 bg-sky-300 font-dmSerif text-white text-2xl">
        <h1 className="max-w-96">
          Seja de manha ou de noite, comece seu proximo trabalho com a Adamo
        </h1>

        <div>
          <button
            onClick={handleOpenModal}
            className="px-4 py-2 bg-sky-500 text-white rounded-xl w-60 h-12 hover:scale-105 transition transition-300 cursor-pointer"
          >
            Vamos nessa!
          </button>

          <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
            <ModalConteudo onClose={handleCloseModal}></ModalConteudo>
          </Modal>
        </div>
      </section>
      <section className="pt-40">
        <Image></Image>
      </section>
    </main>
  );
}
/*
<form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 text-white w-5/6"
          >
            <div className="">
              <textarea
                id="message"
                type="text"
                name="message"
                value={emailData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-2xl bg-transparent border"
                rows="6"
                placeholder="Diga-nos o que esta buscando..."
              />
            </div>
            <div className="">
              <input
                type="text"
                id="name"
                name="name"
                value={emailData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-2xl bg-transparent border"
                placeholder="Seu Nome"
              />
            </div>
            <div className="">
              <input
                type="tel"
                id="number"
                name="phone"
                value={emailData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-2xl bg-transparent border"
                placeholder="Seu telefone"
              />
            </div>
            <div className="">
              <input
                type="text"
                id="email"
                name="email"
                value={emailData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-2xl bg-transparent border"
                placeholder="Seu Email"
              />
            </div>
            <div className="grid place-items-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-200 w-72  text-white font-kodchasan py-2 px-4 rounded-2xl"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
          */
