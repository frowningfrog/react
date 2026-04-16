import React from "react";

export function MonCard({ mon }) {
  return (
    <div className="card">
      <img src={mon.pokemonsprites[0].sprites} />
      <p>{mon.name[0].toUpperCase() + mon.name.slice(1)}</p>
    </div>
  );
}
