const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard({onSelectSquare ,playerSymbol}) {
    // const [board, setBoard] = useState(intialGameBoard);
    // function handleSymbolChange(rowIndex, colIndex) {
    //     setBoard((board) => {
    //         const updatedBoard = [...board.map((innerarray) => [...innerarray])];
    //         updatedBoard[rowIndex][colIndex] = playerSymbol;
    //         return updatedBoard;
    //     })
    //     onSelectSquare();
    // }
    return (
        <ol id='game-board'>
            {board.map(
                (row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                            <button onClick={() => handleSymbolChange(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>)}
                    </ol>
                </li>)}
        </ol>

    )
}
