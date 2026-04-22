import React from "react";
import { usePokeList } from "../hooks/hooks";
import { PokemonGrid } from "../layouts/PokemonLayout";
import { MonCard } from "../components/MonCard";
import { useSharedProps } from "../layouts/PokemonLayout";

export function Favs() {
  const sharedProps = useSharedProps();
  const { favs } = sharedProps;
  const { data, isLoading } = usePokeList();
  const allPokemon = data?.data?.pokemon || [];
  const favlist = allPokemon.filter((m) => favs.includes(m.name));

  if (isLoading)
    return (
      <div
        className="flex items-center gap-3 text-yellow-400"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        <span className="animate-pulse text-xl">◉</span>
        <p className="text-xs">Loading...</p>
      </div>
    );

  if (favlist.length === 0)
    return (
      <div
        className="border-4 border-dashed border-zinc-700 p-10 text-center max-w-sm mx-auto mt-12"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        <p className="text-yellow-400 text-xs leading-relaxed">
          No favorites yet!
        </p>
        <p className="text-zinc-500 text-[9px] mt-3 leading-relaxed">
          Head to the Pokédex and star some Pokémon.
        </p>
      </div>
    );

  return (
    <div>
      <h2
        className="text-yellow-400 text-xs uppercase tracking-widest mb-6 flex items-center gap-2"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        <span>⭐</span> Favorites
        <span className="text-zinc-500">({favlist.length})</span>
      </h2>
      <PokemonGrid>
        {favlist.map((m) => (
          <MonCard key={m.name} mon={m} {...sharedProps} />
        ))}
      </PokemonGrid>
    </div>
  );
}
