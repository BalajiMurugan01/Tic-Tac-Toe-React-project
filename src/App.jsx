import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import { useState } from "react"
function App() {
const [activePlayer , setActivePlayer] = useState('X'); 
const [gameTurns , setGameTurns] = useState([])
function handleSelectPlayer(rowIndex , colIndex){
  setActivePlayer(prev=>prev === 'X' ? 'O' : 'X');
  setGameTurns(prev=>{
    
    let currentPlayer = 'X';
    if(prev.length>0 && prev.player ==='X'){
      currentPlayer = 'O';
    }
    const updatedTurn = [{square:{row:rowIndex , col:colIndex},player:currentPlayer},...prev]
    return updatedTurn
  })
}
  return (
<main>
  <div id="game-container">
    <ol id="players" className="highlight-player">
    <Player initialName={"BM"} symbol={"X"} isActive={activePlayer==='X'}/>
    <Player initialName={"Luke"} symbol={"O"} isActive={activePlayer==='O'}/>
    </ol>
    <GameBoard onSelectSquare={handleSelectPlayer} playerSymbol={activePlayer}/>
  </div>
</main>  )
}

export default App
