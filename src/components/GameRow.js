import GameSquare from './GameSquare';

export default function GameRow({cellData, addPiece, rowNumber}) {

    const cells = [];

    for (let col=0; col<7; col++) {
        cells.push(
            <GameSquare
                colNumber={col}
                cellData={cellData}
                addPiece={addPiece}
                rowNumber={rowNumber}
                key={col}
            />)
    }

    return (
        <tr key={`row-${rowNumber}`}>
            {cells}
        </tr>
    )
} 