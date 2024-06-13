import React, { useState, useEffect } from "react";
import CircularIndeterminate from "../components/common/Progress";
import handleSeeMore from "../components/common/handleSeeMore";
import PokemonCard from "../components/pokemon/PokemonCard";
import fetchPokemon from "../components/pokemon/FetchPokemon";

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  useEffect(() => {
    fetchPokemon(setLoading, setPokemonData, setError, offset, limit);
  }, [offset]);
  if (loading && pokemonData.length === 0) {
    return <CircularIndeterminate />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto text-center">
      <PokemonCard pokemonData={pokemonData} visibleCount={visibleCount} />
      {visibleCount < 1025 && (
        <button
            className="bg-primary-yellow text-primary-black font-bold py-2 px-4 rounded my-4"
            onClick={handleSeeMore(setLoading, setOffset, limit, setVisibleCount)}
        >
            {loading ? <CircularIndeterminate /> : "Voir Plus"}
        </button>
      )}
    </div>
  );
};
export default Pokemon;
