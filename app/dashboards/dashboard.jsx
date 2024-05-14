"use client";
import { useState } from "react";
import "../globals.css";
import Clientes from "./clientes";
import Estoque from "./estoque";
import Projetos from "./tarefas";
import Chat from "./chat";

function Dashboard() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="w-5/6 flex flex-col items-center gap-20">
      <div className="w-full grid grid-cols-4 place-items-center">
        <div
          onClick={() => toggleTab(1)}
          className="flex flex-col cursor-pointer w-full text-center gap-2"
        >
          <p className="">Estoque</p>
          <div
            id="barra"
            className={
              toggleState === 1
                ? "h-[1.5px] w-full bg-cyan-400 rounded-l-2xl transition-300 transition-colors"
                : "h-[1.5px] w-full bg-slate-200 rounded-l-2xl"
            }
          ></div>
        </div>
        <div
          onClick={() => toggleTab(2)}
          className="flex flex-col cursor-pointer w-full text-center gap-2"
        >
          <p className="">Controle de Tarefas</p>
          <div
            id="barra"
            className={
              toggleState === 2
                ? "h-[1.5px] w-full bg-cyan-400 transition-300 transition-colors"
                : "h-[1.5px] w-full bg-slate-200"
            }
          ></div>
        </div>
        <div
          onClick={() => toggleTab(3)}
          className="flex flex-col cursor-pointer w-full text-center gap-2"
        >
          <p className="">Gestao de Clientes</p>
          <div
            id="barra"
            className={
              toggleState === 3
                ? "h-[1.5px] w-full bg-cyan-400 transition-300 transition-colors"
                : "h-[1.5px] w-full bg-slate-200"
            }
          ></div>
        </div>
        <div
          onClick={() => toggleTab(4)}
          className="flex flex-col cursor-pointer w-full text-center gap-2"
        >
          <p className="">Chat</p>
          <div
            id="barra"
            className={
              toggleState === 4
                ? "h-[1.5px] w-full bg-cyan-400 rounded-r-2xl transition-800 transition-colors"
                : "h-[1.5px] w-full bg-slate-200 rounded-r-2xl"
            }
          ></div>
        </div>
      </div>

      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <Estoque />
      </div>
      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <Clientes />
      </div>
      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <Projetos />
      </div>
      <div
        className={toggleState === 4 ? "content  active-content" : "content"}
      >
        <Chat />
      </div>
    </div>
  );
}

export default Dashboard;
