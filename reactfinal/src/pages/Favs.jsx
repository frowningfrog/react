import React from "react";
import { usePokeList } from "../hooks/hooks";
import { PokemonGrid } from "../layouts/PokemonLayout";
import { MonCard } from "../components/MonCard";
import { useSharedProps } from "../layouts/PokemonLayout";

export function Favs() {
  const { favs } = useSharedProps();
  const { data, isLoading } = usePokeList();
  const allPokemon = data?.data?.pokemon || [];
  const favlist = allPokemon.filter((m) => favs.includes(m.name));
  const sharedProps = useSharedProps();

  if (isLoading) return <p>Loading...</p>;

  if (favlist.length === 0)
    return <p>No pokemon on your favorite list yet! Go favorite some.</p>;

  return (
    <div>
      <h2>My Favorites ({favlist.length})</h2>
      <PokemonGrid>
        {favlist.map((m) => (
          <MonCard key={m.name} mon={m} {...sharedProps} />
        ))}
      </PokemonGrid>
    </div>
  );
}
