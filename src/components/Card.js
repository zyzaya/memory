import '../styles/Card.css';

export default function Card(props) {
  return (
    <button className="Card" onClick={props.onclick}>
      <div className="Decor" style={{ backgroundColor: props.color }}></div>
      <div className="Info">{props.text}</div>
    </button>
  );
}
