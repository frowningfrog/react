import React from "react";

export function MonCard({ mon }) {
  return (
    <div className="card">
      <img src={mon.pokemonsprites[0].sprites} />
      <p>{mon.name}</p>
    </div>
  );
}
