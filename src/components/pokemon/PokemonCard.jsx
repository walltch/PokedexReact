import getTypeColor from "./getTypeColor";
export default function PokemonCard( {pokemonData, visibleCount}) {
    return(
      <>
        <h2 className="text-4xl text-center p-6 font-bold tracking-tight text-primary-yellow">Tous les Pokemons</h2>
        <ul 
          className="grid grid-cols-5 gap-4 mt-10">
          {pokemonData.slice(0, visibleCount).map((pokeman) => (
            <li
              key={pokeman.id}
              style={{backgroundColor: getTypeColor(pokeman.type),}}
              className= "card relative aspect-square	w-full my-8">
              <img
                className="card-image h-44 aspect-square object-cover mx-auto absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
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
      </>
    )
}