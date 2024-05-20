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
import CardContato from "./cardContato/cardContato";

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

  return (
    <main>
      <div className="bg-slate-100">
        <header className="grid grid-cols-9 items-start px-24 py-3 font-livic  bg-sky-400 fixed z-50 w-full">
          <div className="col-span-3 flex items-center justify-start gap-8 h-full w-full">
            <h1 className="text-4xl font-gilda font-bold col-span-1">Adamo</h1>
            <CardContato nome="Contate-nos"></CardContato>
          </div>
          <div className="col-span-3 flex items-center justify-around h-full w-full">
            <p className="hover:scale-110 transition transition-300 cursor-pointer">
              Solucoes
            </p>
            <p className="whitespace-nowrap hover:scale-110 transition transition-300 cursor-pointer">
              Servicos personalizados
            </p>
            <p className="hover:scale-110 transition transition-300 cursor-pointer">
              Casos de Uso
            </p>
          </div>
          <div className="col-span-3 grid place-items-end">
            <div
              className="hover:scale-110 transition transition-300 cursor-pointer 
             shadow-lg p-2 rounded-lg flex items-center justify-center gap-2
             bg-white w-48"
            >
              <p className="text-center">Comecar</p>
              <Image
                src={seta} // Use o caminho correto para o seu arquivo SVG
                height={20}
                width={20}
                alt="S"
              />
            </div>
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
          <CardContato nome="Quero Comecar"></CardContato>
        </section>
      </div>
      <section className="flex flex-col items-center pt-20 mb-52 gap-20">
        <h1 className="font-dmSerif text-5xl text-center w-[800px]">
          Tenha mais controle do que acontece na sua empresa
        </h1>
        <Dashboard></Dashboard>
      </section>
      <section className="relative flex flex-col items-center mb-20">
        <div className="grid grid-cols-2 place-items-center text-center px-28 gap-20 mb-20">
          <h1 className="font-dmSerif text-4xl leading-relaxed">
            Precisa de algo específico? Somos especializados nisso!
          </h1>
          <h2 className="font-kumbh text-xl w-[95%] leading-relaxed text-slate-400">
            Somos Versáteis! Nosso objetivo é nos adaptarmos às sua necessidades
          </h2>
        </div>
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col gap-24 pl-14 pt-20">
            <div className="flex flex-col pl-20 gap-6">
              <div className="flex items-center gap-4">
                <h1 className="font-dmSerif text-3xl">Solucoes Certeiras</h1>
                <Image
                  src={target} // Use o caminho correto para o seu arquivo SVG
                  height={40}
                  width={40}
                  alt="S"
                />
              </div>
              <div className="flex flex-col gap-5 font-kumbh">
                <h2 className="text-lg text-slate-500">
                  Sabe aquela tarefas que lhe da dor de cabeca?
                  <br /> Aquele assunto que demora dias pra ser resolvido?
                </h2>
                <h2 className="text-lg font-medium text-cyan-400">
                  Vamos conversar para chegar a umas solucao juntos!
                </h2>
              </div>
            </div>
            <div className="flex flex-col pl-20 gap-6">
              <div className="flex items-center gap-4">
                <h1 className="font-dmSerif text-3xl">
                  Tenha o SEU proprio sistema
                </h1>
                <Image
                  src={ownSistema} // Use o caminho correto para o seu arquivo SVG
                  height={48}
                  width={48}
                  alt="S"
                />
              </div>
              <div className="flex flex-col gap-5 font-kumbh">
                <h2 className="text-lg text-slate-500">
                  Nao quer pagar uma mensalidade?
                  <br />
                  Nenhum dos pacotes parece certo para voce?
                </h2>
                <h2 className="text-lg w-5/6 font-medium text-cyan-400">
                  Criaremos um sistema SEU e após VOCE aprova-lo, não haverá
                  nenhum pagamento extra ou mensalidades.
                </h2>
              </div>
            </div>
            <CardContato nome="Vamos Conversar!" noite="nao"></CardContato>
          </div>
          <div className="h-full w-full shadow2 bg-slate-100 rounded-l-3xl"></div>
        </div>
      </section>
      <section className="relative flex items-center justify-center gap-10 pt-80 bgBrancoAzul">
        <div className="w-1/3 h-[950px] bg-white flex flex-col items-center gap-10 rounded-2xl">
          <Image
            src={OndasTopEsquerda} // Use o caminho correto para o seu arquivo SVG
            height={"full"}
            width={"full"}
            alt="S"
            className=""
          />
          <h1 className="font-paytone text-4xl text-blue-500 pt-10">
            Automacoes
          </h1>
          <p className="font-paytone text-gray-500 text-lg p-10 h-72">
            Agilize suas tarefas diárias
            <br />
            <br />
            Simplifique suas tarefas manuais
            <br />
            <br />
            Melhore a forma de lidar com suas planilhas
          </p>
          <h2 className="font-paytone text-lg text-slate-900">
            Foque nos trabalhos mais importantes!
          </h2>

          <CardContato nome="Quero uma automacao!" noite="nao"></CardContato>
        </div>
        <Image
          src={setaCruzada} // Use o caminho correto para o seu arquivo SVG
          height={"full"}
          width={"full"}
          alt="S"
        />
        <div className="w-1/3 h-[950px] bg-white flex flex-col items-center gap-10  rounded-2xl">
          <Image
            src={OndasTopDireita} // Use o caminho correto para o seu arquivo SVG
            height={"full"}
            width={"full"}
            alt="S"
            className=""
          />
          <h1 className="font-paytone text-4xl text-blue-500 pt-10">
            Integracoes
          </h1>
          <p className="font-paytone text-gray-500 text-lg p-10 h-72">
            Precisa se comunicar com algum serviço do Google? Microsoft? Amazon?
            <br />
            <br />
            Amplie o que voce pode realizar na sua empresa
            <br />
            <br />
            Aumente a variedade de trabalho da sua empresa
          </p>
          <h2 className="font-paytone text-lg text-slate-900">
            Realize mais usando mais
          </h2>
          <CardContato
            nome="Preciso de uma integracao!"
            noite="nao"
          ></CardContato>
        </div>
      </section>
      <section className="flex flex-col items-center justify-end bgAzulAmarelo h-screen relative">
        <Image
          src={Nuvens} // Use o caminho correto para o seu arquivo SVG
          height={"full"}
          width={"full"}
          alt="S"
          className="absolute"
        />

        <CardContato nome="Comecar" noite="nao"></CardContato>
        <p className="font-dmSerif text-3xl text-black text-opacity-50 mb-4">
          Seja de <span className="text-cyan-700">manha</span> ou de{" "}
          <span className="text-yellow-600">noite</span>, estamos sempre aqui.
        </p>
      </section>
      <section className="flex flex-col items-center bgNoite relative">
        <Image
          src={FundoPredios} // Use o caminho correto para o seu arquivo SVG
          height={"full"}
          width={"full"}
          alt="S"
          className="absolute top-0"
        />
        <p className="font-dmSerif text-3xl text-zinc-400 mt-4">
          <span className="text-white">Não importa a hora!</span> Comece seu
          próximo trabalho com a Adamo
        </p>
        <p className="font-dmSerif text-xl text-white">
          Satisfação total ou seu dinheiro de volta
        </p>
        <CardContato nome="Comecar" noite="sim"></CardContato>
        <div className="flex px-20 justify-between items-center pt-[500px] text-center text-white font-kumbh text-xl">
          <div className="grid grid-cols-1 place-items-center w-1/2 gap-10">
            <div className="flex items-center justify-center gap-10">
              <Image
                src={telefone} // Use o caminho correto para o seu arquivo SVG
                height={"full"}
                width={"full"}
                alt="S"
              />
              <h1 className="text-2xl font-medium textShadow">
                Canal exclusivo para emergências
              </h1>
            </div>
            <h2>
              Disponibilizamos para nossos clientes um canal exclusivo para
              emergencias, atendemos ele 24 horas por dia.
            </h2>
          </div>
          <div className="grid grid-cols-1 place-items-center w-1/2 gap-10">
            <div className="flex items-center justify-center gap-10">
              <Image
                src={relogio} // Use o caminho correto para o seu arquivo SVG
                height={"full"}
                width={"full"}
                alt="S"
              />
              <h1 className="text-2xl font-medium textShadow">
                Respondemos dentro de 3 horas
              </h1>
            </div>
            <h2>
              Nossa equipe esta sempre ativa e atenta as mensagens de nossos
              clientes
            </h2>
          </div>
        </div>
        <h1 className="text-4xl font-dmSerif pt-28 text-white">
          Entre em contato conosco:
        </h1>
        <div className="flex px-20 pt-20 gap-10 items-start w-full">
          <div className="flex flex-col text-white font-kumbh gap-40 text-center w-96">
            <h1 className="text-2xl">Automações</h1>
            <p>Confira as automações que já realizamos para outras empresas</p>
            <p className="hover:scale-110 transition transition-300 cursor-pointer">
              Peca aqui sua automação!
            </p>
          </div>
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
                type="email"
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
          <div className="flex flex-col text-white font-kumbh gap-40 text-center w-96">
            <h1 className="text-2xl">Integrações</h1>
            <p>Confira o que podemos fazer por voce!</p>
            <p className="hover:scale-110 transition transition-300 cursor-pointer">
              Peça aqui sua integração.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between px-10 pt-12">
          <div className="flex items-center gap-4 text-white">
            <div className="w-6 h-6 rounded-full border pt-[1px] pl-1 leading-none font-kolker text-xl">
              C
            </div>
            <p>Todos os direitos reservados para Adamo</p>
          </div>
          <div className="flex items-center gap-10 pr-10">
            <Image
              src={Instagram} // Use o caminho correto para o seu arquivo SVG
              height={"full"}
              width={"full"}
              alt="S"
              className="hover:scale-110 transition transition-300 cursor-pointer"
            />
            <Image
              src={Linkedin} // Use o caminho correto para o seu arquivo SVG
              height={"full"}
              width={"full"}
              alt="S"
              className="hover:scale-110 transition transition-300 cursor-pointer"
            />
            <Image
              src={GitHub} // Use o caminho correto para o seu arquivo SVG
              height={"full"}
              width={"full"}
              alt="S"
              className="hover:scale-110 transition transition-300 cursor-pointer"
            />
            <Image
              src={WhatsApp} // Use o caminho correto para o seu arquivo SVG
              height={"full"}
              width={"full"}
              alt="S"
              className="hover:scale-110 transition transition-300 cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-10 text-white font-dmSerif">
            <p className="hover:scale-110 transition transition-300 cursor-pointer">
              Seguranca
            </p>
            <p className="hover:scale-110 transition transition-300 cursor-pointer">
              Privacidade
            </p>
            <p className="hover:scale-110 transition transition-300 cursor-pointer">
              Termos
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
