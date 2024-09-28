"use client";
import React from "react";
import { Github01Icon } from "hugeicons-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export const SocialMedia = () => {
    return(
        <div className="w-[20%] flex justify-between">
            <button>
                <FaGithub size={50} color={"#011126"}>
                    <link rel="stylesheet" href="" />
                </FaGithub>
            </button>
            <button>
                <FaLinkedin size={50} color={"#011126"}>
                    <link rel="stylesheet" href="" />
                </FaLinkedin>
            </button>
            <button>
                <FaInstagram size={50} color={"#011126"}>
                    <link rel="stylesheet" href="" />
                </FaInstagram>
            </button>

        </div>
    )
}
export const SocialMediaModal = () => {
    return(
        <div className="w-[100%] flex gap-[30px]">
            <button>
                <FaGithub size={30} color={"#011126"}>
                    <link rel="stylesheet" href="" />
                </FaGithub>
            </button>
            <button>
                <FaLinkedin size={30} color={"#011126"}>
                    <link rel="stylesheet" href="" />
                </FaLinkedin>
            </button>
            <button>
                <FaInstagram size={30} color={"#011126"}>
                    <link rel="stylesheet" href="" />
                </FaInstagram>
            </button>

        </div>
    )
}