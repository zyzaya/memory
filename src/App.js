import './styles/App.css';
import Game from './components/Game';
import Score from './components/Score';
import Please from 'pleasejs';
import { faker } from '@faker-js/faker';
import uniqid from 'uniqid';
import { useState } from 'react';

function App() {
  let cards = [];

  function generateCards() {
    for (let i = 0; i < 12; i++) {
      cards.push({
        color: Please.make_color(),
        text: faker.name.firstName(),
        key: uniqid(),
      });
    }
  }

  const [score, setScore] = useState(0);

  function handleSuccess() {
    setScore(score + 1);
  }

  function handleLoss() {
    setScore(0);
    generateCards();
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

      <Game cards={cards} onsuccess={handleSuccess} onlose={handleLoss} />
    </div>
  );
}

export default App;
