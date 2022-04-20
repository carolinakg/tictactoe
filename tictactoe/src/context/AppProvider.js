import React, { useState } from "react";
import AppContext from "./AppContext";

function AppProvider({children}){
    const [isLogged, setIsLogged] = useState(false);
    const [player, setPlayer] = useState("O");
    const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
    const [resultText, setResultText] = useState("");
    const [score, setScore] = useState(0);

    const context = {
        isLogged,
        setIsLogged,
        player,
        setPlayer,
        squares,
        setSquares,
        resultText,
        setResultText,
        score,
        setScore
    }
    
    return(
        <AppContext.Provider value = {context}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;