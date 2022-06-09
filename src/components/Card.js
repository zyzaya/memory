export default function Card(props) {
  return (
    <div className="card">
      <div className="Decor" style={{ backgroundColor: props.color }}></div>
      <span className="Info">{props.text}</span>
    </div>
  );
}
