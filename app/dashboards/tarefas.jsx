"use client";
import { useState } from "react";
import "./app.css";
import PainelCalendario from "../assets/PainelCalendario.svg";
import Image from "next/image";

function Tarefas() {
  return (
    <div className="">
      <div>
        <Image height={"full"} width={"full"} alt="S" src={PainelCalendario} />
      </div>
    </div>
  );
}

export default Tarefas;
