import React from "react";
import './Text.css';


export const Title = (props) => {
    return(
        <h1 className="tile">{props.children}</h1>
    )
}

export const Paragraph = (props) => {
    return(
        <p className="paragraph">{props.children}</p>
    )
}