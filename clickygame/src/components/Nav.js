import React from  "react";
function Nav(props){
    return(
        <nav className="navbar">
            <ul>
                <li className="brand">Clicky Game</li>

                <li>Score: {props.score} | TopScore: {props.topScore}</li>
            </ul>
        </nav>
    )
}
export default Nav;