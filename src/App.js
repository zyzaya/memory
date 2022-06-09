import './styles/App.css';
import Game from './components/Game';
import Score from './components/Score';
import Please from 'pleasejs';
import { faker } from '@faker-js/faker';
import uniqid from 'uniqid';

function App() {
  let cards = [];

  for (let i = 0; i < 12; i++) {
    cards.push({
      color: Please.make_color(),
      text: faker.name.firstName(),
      key: uniqid(),
    });
  }

  return (
    <div className="App">
      <header>
        <div className="GameInfo">
          <h1>Colour Memory Game</h1>
          <span>Click the colour but don't click the same one twice!</span>
        </div>
        <Score />
      </header>

      <Game cards={cards} />
    </div>
  );
}

export default App;
