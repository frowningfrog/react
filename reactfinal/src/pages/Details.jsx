import React from "react";
import { usePokeList } from "../hooks/hooks";
import { useSharedProps } from "../layouts/PokemonLayout";
import { useParams } from "react-router-dom";

export function Details() {
  const sharedProps = useSharedProps();
  const { data, isLoading } = usePokeList();
  const pokemon = data?.data?.pokemon || [];
  const { monName } = useParams();

  const mon = pokemon.filter((m) => m.name === monName);

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

  return (
    <div>
      <h2
        className="text-yellow-400 justify-center text-xs uppercase tracking-widest mb-6 flex items-center gap-2"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        {monName}
      </h2>
      <div className="flex justify-center">
        {mon.map((m) => (
          <div key={m.name} className="text-yellow-400">
            <img
              src={m.pokemonsprites[0].sprites}
              alt={m.name}
              className="w-60 h-60 object-contain"
              style={{ imageRendering: "pixelated" }}
            />
            <p>Height: {Math.round(m.height * 0.1 * 100) / 100}m</p>
            <p>Weight: {Math.round(m.weight * 0.1 * 100) / 100}kg</p>
            {console.log(m.pokemonstats[0])}
            {m.pokemonstats.map((s) => (
              <p key={s.stat.name}>
                {s.stat.name}: {s.base_stat}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
