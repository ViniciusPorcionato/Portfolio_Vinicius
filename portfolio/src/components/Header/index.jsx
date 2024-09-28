"use client";
import React from "react";
import logo from "@/Assets/logo.png"
import { ModalMenu } from "../ModalMenu";
import Image from "next/image";

export const Header = () => {
    return(
        <header className="py-[20px] w-[100%]">
            <div className="flex justify-between items-center">
                <Image className="w-[15%]" src={logo}/>
                <ModalMenu/>
            </div>
        </header>
    )
}