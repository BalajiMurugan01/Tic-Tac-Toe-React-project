import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import { useState } from "react"
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/Winning-Combinations.js";
import GameOver from "./Components/GameOver.jsx";
//Handler function
// function derivedActivePlayer(gameTurns){
//   let currentPlayer = gameTurns;
//   if(gameTurns.length>0 && gameTurns[0].player ==='X'){
//     currentPlayer = 'O';
//   }
//   return currentPlayer;
// }
const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
function deriveWinner({board , playerName}){
  let winner = null;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquare = board[combination[0].row][combination[0].column];
    const secondSquare = board[combination[1].row][combination[1].column];
    const thirdSquare = board[combination[2].row][combination[2].column];
    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare){
      winner = playerName[firstSquare];
      console.log(winner);
      break;
    }  
  }
  return winner;
}
function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O' ; // X starts if no moves, or if O was the last player
  }
  return currentPlayer;  // Otherwise, it's O's turn
}


function App() {
// const [activePlayer , setActivePlayer] = useState('X');
const [playerName , setPlayerName] = useState({
  X : 'Player 1',
  O : 'Player 2'

}) 
const [gameTurns , setGameTurns] = useState([])
const activePlayer = derivedActivePlayer(gameTurns);
let board = [...intialGameBoard.map(array=>[...array])];
for(const turn of gameTurns){
    const{square , player} = turn;
    const{row , col} = square;
    board[row][col] = player;
}
const winner = deriveWinner({board , playerName})
const hasDraw = gameTurns.length === 9;
function handleRestart(){
  setGameTurns([]);
}
function handleSelectPlayer(rowIndex , colIndex){
  // setActivePlayer((prev)=>(prev === 'X' ? 'O' : 'X'));
  setGameTurns((prev)=>{
   const currentPlayer = derivedActivePlayer(prev);
   const updatedTurn = [{square:{row:rowIndex , col:colIndex},player:currentPlayer},...prev]
    return updatedTurn
  })
}
function handlePlayerNameChange(symbol,playerName){
  setPlayerName(prev =>{
    return{...prev,
      [symbol] : playerName
    }
  })
}
  return (
<main>
  <div id="game-container">
    <ol id="players" className="highlight-player">
    <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer ==='X' } handlePlayerName={handlePlayerNameChange}/>
    <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer ==='O'}handlePlayerName={handlePlayerNameChange}/>
    </ol>
    {(winner || hasDraw ) && <GameOver winner={winner} handleRestart={handleRestart}/>}
    <GameBoard onSelectSquare={handleSelectPlayer} playerSymbol={activePlayer}
     board={board}
    />
  </div>
  <Log turns={gameTurns}/>
</main>  )
}


export default App
