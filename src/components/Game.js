import Card from './Card';
import '../styles/Game.css';

export default function Game() {
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  return (
    <div className="Game">
      {colors.map((color) => (
        <Card color={color} text={color} />
      ))}
    </div>
  );
}
