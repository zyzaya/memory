import './styles/App.css';
import Game from './components/Game';
import Score from './components/Score';

function App() {
  return (
    <div className="App">
      <header>
        <div className="GameInfo">
          <h1>Colour Memory Game</h1>
          <span>Click the colour but don't click the same one twice!</span>
        </div>
        <Score />
      </header>

      <Game />
    </div>
  );
}

export default App;
