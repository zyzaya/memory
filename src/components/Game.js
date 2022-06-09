import Card from './Card';
import Please from 'pleasejs';
import { faker } from '@faker-js/faker';
import '../styles/Game.css';

export default function Game() {
  let colors = [];
  for (let i = 0; i < 12; i++) colors.push(Please.make_color());

  return (
    <div className="Game">
      {colors.map((color) => (
        <Card color={color} text={faker.name.findName()} />
      ))}
    </div>
  );
}
