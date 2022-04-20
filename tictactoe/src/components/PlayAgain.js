import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function PlayAgain(){
    const {setSquares, setPlayer, setResultText} = useContext(AppContext);
    function handleClick(){
        setSquares(["", "", "", "", "", "", "", "", ""]);
        setResultText("");
        setPlayer("O");
    }
    return(
        <div>
            <button onClick={handleClick}>Play Again</button>
        </div>
    )
}

export default PlayAgain;