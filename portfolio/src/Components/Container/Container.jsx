import React from "react";
import './Container.css'

export const MainContainer = (props) => {
    return(
        <div className="MainContainer">{props.children}</div>
    )
}

export const Container = (props) => {
    return(
        <div className="Container">{props.children}</div>
    )
}