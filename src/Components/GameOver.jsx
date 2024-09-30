export default function GameOver({winner,handleRestart}){
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner ? <p>{winner} won!</p> : <p>Draw!</p>}
        <p><button onClick={handleRestart}>Restart</button></p>
    </div>
}