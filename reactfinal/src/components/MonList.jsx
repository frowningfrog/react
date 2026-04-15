import React, { useState } from "react";
import { MonCard } from "./MonCard";

export function DisplayMons({ mons }) {
  const listData = mons.data;
  let pokemon = [];
  if (listData && listData.pokemon) {
    pokemon = listData.pokemon;
  }
  console.log(pokemon[0]);
  return (
    <ul className="list">
      {pokemon && pokemon.map((m) => <MonCard key={m.name} mon={m} />)}
    </ul>
  );
}
