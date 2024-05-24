import getTypeColor from "./getTypeColor";
export default function PokemonCard( {pokemonData, visibleCount}) {
    return(
        <ul style={{ listStyle: "none", padding: 0 }}>
        {pokemonData.slice(0, visibleCount).map((pokeman) => (
          <li
            key={pokeman.id}
            className="card"
            style={{
              width: "15rem",
              padding: "10px",
              margin: "20px",
              backgroundColor: getTypeColor(pokeman.type),
            }}
          >
            <img
              className="card-image"
              src={pokeman.image}
              alt={pokeman.name}
            />
            <h2 className="card-title">
              {pokeman.id}. {pokeman.name}
            </h2>
            <p className="card-subtitle">Type: {pokeman.type}</p>
            <p className="card-subtitle">Height: {pokeman.height}</p>
            <p className="card-subtitle">Weight: {pokeman.weight}</p>
            <p className="card-subtitle">Abilities: {pokeman.abilities}</p>
          </li>
        ))}
      </ul>
    )
}