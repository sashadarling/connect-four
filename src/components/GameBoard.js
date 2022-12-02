import { useState } from "react";

import { cellKey } from "../utils";

import GameRow from "./GameRow";

export default function GameBoard() {
    
    const players = ["1", "2"];

    const [cellData, setCellData] = useState({});
    const [lastPlayed, setLastPlayed] = useState({});
    const [player, setPlayer] = useState(players[0]);

    const addPiece = (col) => {
        let targetRow;
        
        for (let row=5; row>=0; row--) {
            const currentKey = cellKey(col, row);
            if (!cellData[currentKey]) {
                targetRow = row;
                break;
            }
        }
        
        const key = cellKey(col, targetRow);
        const newKey = {[key]: {player}};

        setCellData({...cellData, ...newKey});
        setLastPlayed({col});
        setPlayer(player === "1" ? "2" : "1");
    }

    const endGame = () => {
        // todo end game logic
    }
    
    const rows = [];
    for (let row=0; row<6; row++) {
        rows[row] = <GameRow
                        cellData={cellData}
                        addPiece={addPiece}
                        rowNumber={row}
                        key={row}
                    />;
    }

    return (
        <table className="GameBoard">
            <tbody>
                { rows }
            </tbody>
        </table>
    )
}