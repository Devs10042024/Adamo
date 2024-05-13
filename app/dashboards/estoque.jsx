"use client";
import { useState } from "react";
import "./app.css";
import PainelEstoque from "../assets/PainelEstoque.svg";
import Image from "next/image";

function Estoque() {
  return (
    <div>
      <Image height={"full"} width={"full"} alt="S" src={PainelEstoque} />
    </div>
  );
}

export default Estoque;
