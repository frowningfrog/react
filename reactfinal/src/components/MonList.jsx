import React, { useState } from "react";
import { MonCard } from "./MonCard";
import { PokemonGrid } from "../layouts/PokemonLayout";

export function DisplayMons({ mons }) {
  const [searchTerm, setSearchTerm] = useState("");
  const listData = mons.data;
  let pokemon = [];
  if (listData && listData.pokemon) {
    pokemon = listData.pokemon;
  }
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6 w-full max-w-sm">
        <input
          value={searchTerm}
          onChange={handleChange}
          placeholder="name or type"
          className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 w-64"
        />
        <p className="text-gray-500 text-sm w-32 shrink-0">
          {
            pokemon.filter(
              (m) =>
                m.name.includes(searchTerm) ||
                m.pokemontypes[0].type.name.includes(searchTerm),
            ).length
          }{" "}
          Pokemon found!
        </p>
      </div>
      <PokemonGrid>
        {pokemon &&
          pokemon
            .filter(
              (m) =>
                m.name.includes(searchTerm) ||
                m.pokemontypes[0].type.name.includes(searchTerm),
            )
            .map((m) => <MonCard key={m.name} mon={m} />)}
      </PokemonGrid>
    </div>
  );
}
