import iconesHero from "../public/iconesHero.svg";
import { Delius_Swash_Caps as delius } from "next/font/google";

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
            <div>
              <p>Contate-nos</p>
            </div>
            <div>
              <div>
                <p>Iniciar Sessao</p>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </header>
        <section className="flex flex-col items-center justify-start font-klee font-semibold">
          <div className="flex flex-col items-center justify-start gap-10 pt-10 mb-48">
            <h1 className="text-7xl text-center font-delius font-normal">
              A empresa numero 1 em solucoes empresariais.
            </h1>
            <h2 className="text-3xl font-kumbh font-light">
              Do que sua empresa precisa?
            </h2>
            <img src="../public/iconesHero.svg" alt="" />
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
          <div>
            <div className="grid grid-cols-2 place-items-center gap-10 pt-20">
              <div className=" h-10  w-96 bg-slate-100 border-2 border-solid border-cyan-600 rounded-xl flex items-end pb-1 pl-4 ">
                <p className="text-start leading-relaxed">Qual seu Nome?</p>
              </div>
              <div className=" h-10  w-96 bg-slate-100 border-2 border-solid border-cyan-600 rounded-xl flex items-end pb-1 pl-4 ">
                <p className="text-start leading-relaxed">Qual seu telefone?</p>
              </div>
              <div className="col-span-2  h-10  w-96 bg-slate-100 border-2 border-solid border-cyan-600 rounded-xl flex items-end pb-1 pl-4">
                <p className="text-start leading-relaxed">Qual seu email?</p>
              </div>
            </div>
            <div></div>
            <div>
              <p></p>
              <img src="" alt="" />
            </div>
          </div>
        </section>
      </div>
      <section>
        <h1></h1>
        <div></div>
      </section>
      <section>
        <div>
          <h1></h1>
          <h2></h2>
        </div>
        <div>
          <div>
            <div>
              <div>
                <h1></h1>
                <img src="" alt="" />
              </div>
              <h2></h2>
            </div>
            <div>
              <div>
                <h1></h1>
                <img src="" alt="" />
              </div>
              <h2></h2>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
