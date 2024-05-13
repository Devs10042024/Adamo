"use client";
import { useState } from 'react'
import './app.css'
import PainelClientes from "../assets/PainelClientes.svg"
import Image from 'next/image';

function Clientes() {

  return (
    <div className="">
      <div>
        <Image height={"full"} width={"full"} alt="S" src={PainelClientes} />
      </div>
    </div>
  );
}

export default Clientes