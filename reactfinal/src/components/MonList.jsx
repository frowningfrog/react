import React, { useState } from "react";
import { MonCard } from "./MonCard";

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
      <div className="flex">
        <input value={searchTerm} onChange={handleChange} />
        <p>
          {
            pokemon.filter(
              (m) =>
                m.name.includes(searchTerm) ||
                m.pokemontypes[0].type.name.includes(searchTerm),
            ).length
          }
        </p>
      </div>
      <div className="list">
        {pokemon &&
          pokemon
            .filter(
              (m) =>
                m.name.includes(searchTerm) ||
                m.pokemontypes[0].type.name.includes(searchTerm),
            )
            .map((m) => <MonCard key={m.name} mon={m} />)}
      </div>
    </div>
  );
}
