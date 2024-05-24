export default function fetchPokemon(setLoading, setPokemonData, setError, offset, limit) {
    setLoading(true);
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then(data => {
          const promises = data.results.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
          );
          return Promise.all(promises);
        })
        .then(results => {
          const newPokemon = results.map((result) => ({
            name: result.name,
            abilities: result.abilities
              .map((ability) => ability.ability.name)
              .join(", "),
            image: result.sprites.front_default,
            type: result.types.map((type) => type.type.name).join(", "),
            weight: result.weight,
            height: result.height,
            id: result.id,
          }));
  
          setPokemonData((prev) => {
            const filteredNewPokemon = newPokemon.filter(
              (newPoke) =>
                !prev.some((existingPoke) => existingPoke.id === newPoke.id)
            );
            return [...prev, ...filteredNewPokemon];
          });
  
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }