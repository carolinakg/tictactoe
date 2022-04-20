import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import Ximg from "../imgs/X.png";
import Oimg from "../imgs/O.png";
import checkWin from "../helpers/functions";
import Results from "./Results";

function Board() {
  const { squares, setSquares, player, setPlayer, setResultText, resultText, setScore } =
    useContext(AppContext);
  function autoplay(squares){
    const indexes = [];
    for(let i = 0; i < squares.length; i ++){
      if(squares[i] === ""){
        indexes.push(i)
      }
    }
    const index = indexes[Math.floor(Math.random()*indexes.length)];
   setTimeout(()=> handleAutoPlay(index), 1000);
    
  }
  useEffect(() => {
    const result = checkWin(player, squares);
    if (result === "continue") {
      if (player === "X") {
        setPlayer("O");
        autoplay(squares);
      } else {
        setPlayer("X");
      }
    } else if (result === "DRAW") {
      setResultText("Draw!");
      setScore(0)
    } else {
      setResultText(`"${player}" won`);
      if(player === "X"){
        setScore((prevScore)=> prevScore + 1)
      } else{
        setScore(0)
      } 
    }
  }, [squares]);

  function fillSquare(square) {
    if (square) {
      if (square === "X") {
        return <img src={Ximg} />;
      }
      return <img src={Oimg} />;
    }
    return "";
  }
  function handleAutoPlay(index) {
    setSquares((prevSquares) => {
      return prevSquares.map((element, i) => {
        if (i !== index) {
          return element;
        }
        return "O";
      });
    });
  }
  function handleSquare(index) {
    setSquares((prevSquares) => {
      return prevSquares.map((element, i) => {
        if (i !== index) {
          return element;
        }
        return player;
      });
    });
  }
  return (
    <div className="board">
      {squares.map((square, index) => (
        <button
          key={index}
          className="square"
          onClick={() => handleSquare(index)}
        >
          {fillSquare(square)}
        </button>
      ))}
      {resultText && <Results />}
    </div>
  );
}

export default Board;
