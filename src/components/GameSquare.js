import {cellKey} from '../utils'

export default function GameSquare({colNumber, cellData, addPiece, rowNumber}) {
    const key = cellKey(colNumber, rowNumber);

    const handleClick = (event) => {
        event.preventDefault();

        addPiece(colNumber, rowNumber);
    }

    const cellRender = cellData[key]?.player ? cellData[key]?.player : ' ';

    return (<td onClick={handleClick}>{cellRender}</td>)
}