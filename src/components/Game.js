import React, { useState } from 'react';
import Card from './Card';
import '../styles/Game.css';

// move card creation to app
export default function Game(props) {
  const [clicked, setClicked] = useState([]);

  function handleClick(key) {
    if (!clicked.includes(key)) {
      setClicked(clicked.concat(key));
      props.onsuccess();
    } else {
      props.onlose();
    }
  }

  return (
    <div className="Game">
      {props.cards.map((c) => (
        <Card
          color={c.color}
          text={c.text}
          onclick={() => handleClick(c.key)}
          key={c.key}
        />
      ))}
    </div>
  );
}
