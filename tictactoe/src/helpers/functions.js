function checkWin(player, squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  if(lines.some((line)=> line.every((index)=> squares[index] === player))){
      return player
  }
  if(squares.some((square)=> square === "")){
      return "continue"
  }
  return "DRAW"
}
export default checkWin;
