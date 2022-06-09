import '../styles/Card.css';

export default function Card(props) {
  return (
    <div className="Card">
      <div className="Decor" style={{ backgroundColor: props.color }}></div>
      <span className="Info">{props.text}</span>
    </div>
  );
}
