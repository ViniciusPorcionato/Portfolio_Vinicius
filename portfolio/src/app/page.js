"use client";
import { Header } from "@/components/Header";
import imageProfile from "@/Assets/profileImage.jpg"
import Image from "next/image";
import { SocialMedia } from "@/components/SocialMedia";


export default function Home() {
  return (
    <div className="h-screen w-screen bg-primary-gray flex justify-center">
      <div className="h-screen w-[85%] ">
        <Header/>
        <section className="w-[100%] mt-[100px]">
          <div className="w-[100%] flex items-center justify-between">

            <Image
            className="w-[20%] rounded-[170px]"
            src={imageProfile}
            />

            <div className="w-[60%]">
              <h1 className="text-[50px] text-primary-blue font-comfortaa">Olá mundo, meu nome é Vinicius Porcionato</h1>
              <p className="text-[30px] text-primary-blue font-open-sans mt-[20px]">Sou um Desenvolvedor FullStack e tenho uma verdadeira paixão por Back-End. Adoro criar e otimizar a lógica por trás das aplicações, garantindo que tudo funcione de forma fluida e eficiente. </p>
            </div>

          </div>
          <div className="flex justify-end mt-[100px]">
            <SocialMedia/>
          </div>
        </section>
      </div>
    </div>
  );
}
