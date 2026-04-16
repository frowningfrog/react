import React from "react";
import { MonCard } from "./MonCard";

export function DisplayMons({ mons }) {
  const listData = mons.data;
  let pokemon = [];
  if (listData && listData.pokemon) {
    pokemon = listData.pokemon;
  }
  return (
    <div className="list">
      {pokemon && pokemon.map((m) => <MonCard key={m.name} mon={m} />)}
    </div>
  );
}
