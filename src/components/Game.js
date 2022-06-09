import React, { useState } from 'react';
import Card from './Card';
import Please from 'pleasejs';
import { faker } from '@faker-js/faker';
import uniqid from 'uniqid';
import '../styles/Game.css';

export default function Game(props) {
  for (let i = 0; i < 12; i++) {
    props.cards.push({
      color: Please.make_color(),
      text: faker.name.firstName(),
      key: uniqid(),
    });
  }

  const [clicked, setClicked] = useState([]);

  function handleClick(key) {
    if (!clicked.includes(key)) setClicked(clicked.concat(key));
    console.log(clicked);
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
