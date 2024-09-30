"use client";
import React from "react";
import { Github01Icon } from "hugeicons-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export const SocialMedia = () => {

    return(
        <div className="gap-5 flex justify-between">

            <button onClick={() => window.open('https://github.com/ViniciusPorcionato')}>
                <FaGithub size={50} color={"#011126"}/>
            </button>

            <button onClick={() => window.open('https://www.linkedin.com/in/vinicius-porcionato/')}>
                <FaLinkedin size={50} color={"#011126"}/>
            </button>

            <button onClick={() => window.open('https://www.instagram.com/vn.porci_/')}>
                <FaInstagram size={50} color={"#011126"}/>
            </button>

        </div>
    )
}
export const SocialMediaModal = () => {
    return(
        <div className="w-[100%] flex gap-[30px]">
            <button onClick={() => window.open('https://github.com/ViniciusPorcionato')}>
                <FaGithub size={30} color={"#011126"}/>
            </button>
            <button onClick={() => window.open('https://www.linkedin.com/in/vinicius-porcionato/')}>
                <FaLinkedin size={30} color={"#011126"}/>
            </button>
            <button onClick={() => window.open('https://www.instagram.com/vn.porci_/')}>
                <FaInstagram size={30} color={"#011126"}/>
            </button>

        </div>
    )
}