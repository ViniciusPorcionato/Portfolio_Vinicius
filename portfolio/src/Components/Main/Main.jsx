import React from "react";
import { Container } from "../Container/Container";
import { Paragraph, Title } from "../Texts/texts";

export const Main = () => {
    return(
        <div className="main">
            <Container>
                <Title>Olá mundo, meu nome é Vinicius Porcionato</Title>
                <Paragraph>Sou um Desenvolvedor FullStack e tenho uma verdadeira paixão por Back-End. Adoro criar e otimizar a lógica por trás das aplicações, garantindo que tudo funcione de forma fluida e eficiente. </Paragraph>
            </Container>
        </div>
    )
}