import './App.css';
import ChessTableComponent from './components/ChessTable/ChessTableComponent';
import ChessTableSquareComponent from './components/ChessTableSquare/ChessTableSquareComponent';
import PieceControlComponent from './components/PieceControlComponent/PieceControlComponent';

function App() {
  return (
 
      <div className='App-header'>

        <PieceControlComponent/>

        <ChessTableSquareComponent piece="knight"></ChessTableSquareComponent>

        <ChessTableComponent/>
        
      </div>
  );
}


export default App;
