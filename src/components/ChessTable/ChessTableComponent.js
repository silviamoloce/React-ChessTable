import ChessTableRow from '../ChessTableRow/ChessTableRowComponent';
import './ChessTableComponent.css';

function ChessTableComponent() {
    return (<div className="tabla">
        <ChessTableRow reversed="true"></ChessTableRow>
        <ChessTableRow reversed="false"></ChessTableRow>
        <ChessTableRow reversed="true"></ChessTableRow>
        <ChessTableRow reversed="false"></ChessTableRow>
        <ChessTableRow reversed="true"></ChessTableRow>
        <ChessTableRow reversed="false"></ChessTableRow>
        <ChessTableRow reversed="true"></ChessTableRow>
        <ChessTableRow reversed="false"></ChessTableRow>
    </div>)
}

export default ChessTableComponent;