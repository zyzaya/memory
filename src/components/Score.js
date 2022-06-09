import { useState } from 'react';
import '../styles/Score.css';

export default function Score(props) {
  const [best, setBest] = useState(0);

  if (props.score > best) setBest(props.score);
  return (
    <div className="Score">
      <div>
        <span>Score:</span>
        <span>{props.score}</span>
      </div>
      <div>
        <span>Best Score:</span>
        <span>{best}</span>
      </div>
    </div>
  );
}
