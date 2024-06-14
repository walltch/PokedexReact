import getTypeColor from "./getTypeColor";
export default function PokemonCard({ pokemonData, visibleCount }) {
  return (
    <div className="container">
      <h2 className="text-4xl text-center p-6 font-bold tracking-tight text-primary-yellow">
        Tous les Pokemons
      </h2>
      <ul className="mx-10 sm:grid sm:grid-cols-5 sm:gap-4">
        {pokemonData.slice(0, visibleCount).map((pokeman) => (
          <li
            key={pokeman.id}
            style={{ backgroundColor: getTypeColor(pokeman.type) }}
            className="card my-10"
          >
            <img
              className="card-image sm:h-44 h-60 aspect-square object-cover mx-auto"
              src={pokeman.image}
              alt={pokeman.name}
            />
            <div className="card-body text-left pl-3 pb-3 ">
              <h2 className="card-title">
                {pokeman.id}. {pokeman.name}
              </h2>
              <p className="card-subtitle">Type: {pokeman.type}</p>
              <p className="card-subtitle">Height: {pokeman.height}</p>
              <p className="card-subtitle">Weight: {pokeman.weight}</p>
              <p className="card-subtitle">Abilities: {pokeman.abilities}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
