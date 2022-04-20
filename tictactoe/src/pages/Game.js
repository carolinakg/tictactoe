import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import Header from "../components/Header";
import Board from "../components/Board";
import PlayAgain from "../components/PlayAgain";

function Game(){
    const {isLogged} = useContext(AppContext);
    return(
        <div>
            {isLogged?(
                <div>
                    <Header/>
                    <Board/>
                    <PlayAgain/>
                </div>
            )
            :<Link to = "/">Login</Link>
            }
        </div>
    )
}

export default Game;