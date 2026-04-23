import React from "react";
import { usePokeList } from "../hooks/hooks";
import { PokemonGrid } from "../layouts/PokemonLayout";
import { MonCard } from "../components/MonCard";
import { useSharedProps } from "../layouts/PokemonLayout";

export function Team() {
  const sharedProps = useSharedProps();
  const { team } = sharedProps;
  const { data, isLoading } = usePokeList();

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

  const pokemon = data?.data?.pokemon || [];
  const teamList = pokemon.filter((m) => team.includes(m.name));

  if (teamList.length === 0)
    return (
      <div
        className="border-4 border-dashed border-zinc-700 p-10 text-center max-w-sm mx-auto mt-12"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        <p className="text-yellow-400 text-xs leading-relaxed">
          Team is empty!
        </p>
        <p className="text-zinc-500 text-[9px] mt-3 leading-relaxed">
          Add Pokémon from the Pokédex.
        </p>
      </div>
    );

  return (
    <div>
      {/* Team header with slot indicators */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h2
          className="text-yellow-400 text-xs uppercase tracking-widest flex items-center gap-2"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          ◈ My Team
        </h2>
        <div className="flex gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`w-5 h-5 border-2 border-black ${i < teamList.length ? "bg-yellow-400" : "bg-zinc-700"}`}
              style={{
                boxShadow: i < teamList.length ? "2px 2px 0 #000" : "none",
              }}
            />
          ))}
          <span
            className="text-zinc-500 text-[9px] ml-2 self-center"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            {teamList.length}/6
          </span>
        </div>
      </div>

      <PokemonGrid>
        {teamList.map((m) => (
          <MonCard key={m.name} mon={m} {...sharedProps} />
        ))}
      </PokemonGrid>
    </div>
  );
}
