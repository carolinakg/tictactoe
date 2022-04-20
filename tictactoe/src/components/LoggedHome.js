import React from "react";
import { Link } from "react-router-dom";

function LoggedHome(){
    const nickname = "NAME"
    return(
        <div>
            <h2>Welcome {nickname}! </h2>
            <h3>
                 Your last score was APISCORE
                Your highest score was APISCORE
            </h3>
            <button className="startBtn">
                <Link to = "/game">Start Game</Link>
            </button>
            
               
        </div>
    )
}

export default LoggedHome;