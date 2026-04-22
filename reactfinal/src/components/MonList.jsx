import React, { useState } from "react";
import { MonCard } from "./MonCard";
import { PokemonGrid } from "../layouts/PokemonLayout";

export function DisplayMons({ mons, sharedProps }) {
  const [searchTerm, setSearchTerm] = useState("");
  const pokemon = mons?.data?.pokemon || [];

  const filtered = pokemon.filter(
    (m) =>
      m.name.includes(searchTerm.toLowerCase()) ||
      m.pokemontypes[0].type.name.includes(searchTerm.toLowerCase()),
  );

  return (
    <div style={{ fontFamily: "'Press Start 2P', monospace" }}>
      {/* Search bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">
            ▶
          </span>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="name or type..."
            className="pl-8 pr-4 py-2 bg-zinc-800 text-yellow-400 text-[10px] border-2 border-yellow-400 focus:outline-none focus:border-yellow-300 w-64 placeholder-zinc-500"
            style={{ caretColor: "#facc15" }}
          />
        </div>
        <p className="text-zinc-500 text-[9px] uppercase tracking-widest">
          {filtered.length} found
        </p>
      </div>

      <PokemonGrid>
        {filtered.map((m) => (
          <MonCard key={m.name} mon={m} {...sharedProps} />
        ))}
      </PokemonGrid>
    </div>
  );
}
