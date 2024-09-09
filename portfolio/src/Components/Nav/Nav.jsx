import React from "react";
import CloseIcon from '../../Assets/closeIcon.png'
import './Nav.css'

export const Nav = ( { setExibeNavbar, exibeNavBar }) => {
    return(
        <nav className={`navbar ${exibeNavBar ? "exibeNavbar" : ""}`}>
            <img
            className="navbar__close"
            src={CloseIcon}
            onClick={() => setExibeNavbar(false)}
            />

        </nav>
    )
}