import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function Results(){
    const {resultText, score} = useContext(AppContext);
    return(
        <div className="result">
        <h1>
        {resultText}
        
        </h1>
        <h2>
          Your Score: {score}  
        </h2>
        
        </div>
       
   
    )
}

export default Results;