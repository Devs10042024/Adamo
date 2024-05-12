import Image from "next/image";
import seta from "./assets/seta.svg";
import iconesHero from "./assets/iconesHero.svg";
import avancar from "./assets/avancar.svg";
import ownSistema from "./assets/ownSistema.svg";
import target from "./assets/target.svg";
import Dashboard from "./dashboards/dashboard";


export default function Home() {
  return (
    <main>
      <div id="gradiente-hero">
        <header className="grid grid-cols-9 items-start px-28 py-6 font-klee">
          <div className="col-span-3 grid place-items-start grid-cols-3">
            <p>Solucoes</p>
            <p>Precos</p>
            <p className="whitespace-nowrap">Servicos personalizados</p>
          </div>
          <div className="col-span-3 grid place-items-center">
            <h1 className="text-8xl font-kolker">Adamo</h1>
          </div>
          <div className="col-span-3 grid grid-cols-2  place-items-end">
            <div className="border-[1px] border-solid border-slate-700 p-2 rounded-lg">
              <p>Contate-nos</p>
            </div>
            <div>
              <div className="border-[1px] border-solid border-cyan-800 shadow-lg shadow-cyan-400 p-2 rounded-lg flex items-center gap-4">
                <p>Iniciar Sessao</p>
                <Image
                  src={seta} // Use o caminho correto para o seu arquivo SVG
                  height={20}
                  width={20}
                  alt="S"
                />
              </div>
            </div>
          </div>
        </header>
        <section className="flex flex-col items-center justify-start font-klee font-semibold">
          <div className="flex flex-col items-center justify-start gap-10 pt-10 mb-48 relative">
            <h1 className="text-7xl text-center font-delius font-normal">
              A empresa numero 1 em solucoes empresariais.
            </h1>
            <h2 className="text-3xl font-kumbh font-light">
              Do que sua empresa precisa?
            </h2>
            <Image
              className={"absolute top-[120%] px-28 xl:px-0"}
              src={iconesHero} // Use o caminho correto para o seu arquivo SVG
              height={"full"}
              width={"full"}
              alt="S"
            />
          </div>
          <div className="w-72 h-12 bg-cyan-200 rounded-3xl border-slate-900 border-solid border-[1.5px] shadow-md shadow-slate-900 mb-10">
            <p className="text-center text-2xl font-klee leading-relaxed">
              Quero comecar
            </p>
          </div>
          <h2 className="text-3xl text-center w-3/5">
            Nao sabe exatamente por onde comecar? Nosso time entrara em contato
            com voce:
          </h2>
          <div className="flex flex-col gap-10 items-center">
            <div className="grid grid-cols-2 place-items-center gap-10 pt-20 opacity-50">
              <div className=" caixasMensagem ">
                <p className="text-start leading-relaxed">Qual seu Nome?</p>
              </div>
              <div className=" caixasMensagem ">
                <p className="text-start leading-relaxed">Qual seu telefone?</p>
              </div>
              <div className="col-span-2  caixasMensagem">
                <p className="text-start leading-relaxed">Qual seu email?</p>
              </div>
            </div>
            <div className="flex w-full h-72 caixasMensagem items-start pt-4 opacity-50">
              <p>O que gostaria de saber?</p>
            </div>
            <div className="flex items-center justify-center rounded-lg gap-6 bg-cyan-900 w-1/2 h-12 text-white mb-20">
              <p>Entrem em contato comigo</p>
              <Image src={avancar} height={30} width={30} alt="Avancar" />
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col items-center pt-20 mb-52 gap-20">
        <h1 className="font-dmSerif text-5xl text-center w-[800px]">
          Tenha mais controle do que acontece na sua empresa
        </h1>
        <Dashboard></Dashboard>
      </section>
      <section className="flex flex-col items-center mb-20">
        <div className="grid grid-cols-2 place-items-center text-center px-28 gap-20 mb-20">
          <h1 className="font-dmSerif text-4xl leading-relaxed">
            Somos Versáteis! Nosso objetivo é nos adaptarmos às sua necessidades
          </h1>
          <h2 className="font-khula font-medium text-xl w-[95%] leading-relaxed">
            Nos da Adamo entendemos que atualmente existem diversas formas de se
            operar uma empresa, por isso estamos preparados para nos atentarmos
            especificamente a VOCE!
          </h2>
        </div>
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col gap-24 items-center pl-14 pt-20">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-4">
                <h1 className="font-dmSerif text-3xl">Solucoes Certeiras</h1>
                <Image
                  src={target} // Use o caminho correto para o seu arquivo SVG
                  height={40}
                  width={40}
                  alt="S"
                />
              </div>
              <h2 className="text-center text-lg w-3/4">
                - Sabe aquela tarefas que lhe da dor de cabeca? Aquele assunto
                que demora dias pra ser resolvido? Vamos conversar para chegar a
                umas solucao juntos!
              </h2>
            </div>
            <div className="flex flex-col items-center gap-3">
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
              <h2 className="text-center text-lg w-3/4">
                - Nao quer pagar uma mensalidade ou nenhum dos pacotes parece
                certo para voce? Criaremos um sistema SEU. Apos seu
                funcionamente aprovado nao tera ligacao com nos, sem pagamento
                extra, sem mensalidades.
              </h2>
            </div>
            <div className="w-52 h-12 bg-cyan-200 grid place-items-center rounded-xl mb-10">
              <p>Vamos Conversar!</p>
            </div>
          </div>
          <div className="h-full w-full shadow2 bg-slate-100 rounded-l-3xl"></div>
        </div>
      </section>
    </main>
  );
}
