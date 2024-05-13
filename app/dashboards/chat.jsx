"use client";
import { useState } from "react";
import "./app.css";
import PainelChat from "../assets/PainelChat.svg";
import Image from "next/image";

function Chat() {
  return (
    <div className="">
      <div>
        <Image height={"full"} width={"full"} alt="S" src={PainelChat} />
      </div>
    </div>
  );
}

export default Chat;
