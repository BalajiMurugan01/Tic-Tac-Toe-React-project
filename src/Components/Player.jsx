import { useState } from "react"
export default function Player({initialName , symbol , isActive , handlePlayerName}){
    const [isEditing , setIsEditing] = useState(false);
    const [playerName , setPlayerName] = useState(initialName);
    function handleClick(){
        setIsEditing(prev=>!prev);
        if(isEditing){
            handlePlayerName(symbol , playerName);

        }
    }
    function handlechange(e){
        setPlayerName(e.target.value);
    }
    let name = <span className="player-name">{playerName}</span>
    return(
    <li className={isActive?'active': undefined}>
    <span className="player">
    {isEditing ? 
    (<input type="text" required value={playerName} onChange={handlechange}/>) : (name)
    }
    <span className="player-symbol">{symbol}</span>
    </span>
    {isEditing ? 
    <button onClick={handleClick}>Save</button>: 
    <button onClick={handleClick}>Edit</button>}
    </li>
    )
}