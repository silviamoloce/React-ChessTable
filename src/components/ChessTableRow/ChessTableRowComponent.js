import ChessTableSquareComponent from '../ChessTableSquare/ChessTableSquareComponent';
import './ChessTableRowComponent.css';


function ChessTableRow (props) {
    if(props.reversed==='true'){
        return( 
            <div className="rand-reversed">
                <ChessTableSquareComponent boxColor='black'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='white'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='black'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='white'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='black'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='white'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='black'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='white'></ChessTableSquareComponent>
            </div>)
    }
    else{
        return(
            <div className="rand">
                <ChessTableSquareComponent boxColor='black'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='white'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='black'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='white'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='black'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='white'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='black'></ChessTableSquareComponent>
                <ChessTableSquareComponent boxColor='white'></ChessTableSquareComponent>
            </div>)
    }
}

export default ChessTableRow;