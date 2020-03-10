import React from "react";
import "./style.css"

function Nav(props) {
    return (<nav className="navbar">

        <ul>
            <h1 className="brand">Puppy Dog Clicky Game</h1>
            <h2 className="instructions">Click on a puppy image below to earn points. If you click on the same puppy twice > GAME OVER!</h2>

            <li>Score: {
                props.score
            }
                | TopScore: {
                props.topScore
            }</li>
        </ul>
    </nav>
    )
        }
        export default Nav;
