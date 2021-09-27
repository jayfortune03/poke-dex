export default function Card() {
  return (
    <div className="card shadow-lg bg-accent text-accent-content">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" alt="pokemon" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Accent color</h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="card-actions">
          <button className="btn btn-secondary">More info</button>
        </div>
      </div>
    </div>
  );
}
