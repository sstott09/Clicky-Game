import React from  "react";
import "./style.css"

function Nav(props){
    return(
        <nav className="navbar">
            <ul>
                <h1 className="brand">Clicky Game</h1>

                <li>Score: {props.score} | TopScore: {props.topScore}</li>
            </ul>
        </nav>
    )
}
export default Nav;