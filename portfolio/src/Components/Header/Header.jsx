import React, { useState } from "react";
import './Header.css'
import menuBar from '../../Assets/menuBar.svg'
import Logo from '../../Assets/Logo.png'
import { Container } from "../Container/Container";
import { Nav } from "../Nav/Nav";

 const Header = () => {

    const [exibeNavbar, setExibeNavbar] = useState(false); 

    return(
        <header className="headerpage">
            <Container>

            <div className="header-flex">
                <img
                className="header-logo"
                src={Logo}
                />

                <img
                src={menuBar}
                alt="Imagem menu de barras. Serve para exibir ou esconder o menu no smartphone."
                onClick={
                    () => { setExibeNavbar(true) }
                  }
                />

                <Nav
                  exibeNavbar={exibeNavbar}
                  setExibeNavbar={setExibeNavbar} 
                />

            </div>

            </Container>
        </header>
    )
}

export default Header;