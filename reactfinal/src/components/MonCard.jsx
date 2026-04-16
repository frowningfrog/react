import React from "react";

export function MonCard({ mon }) {
  const type = mon.pokemontypes[0].type.name;
  let color = "";
  switch (type) {
    case "grass":
      color = "lightgreen";
      break;
    case "fire":
      color = "red";
      break;
  }
  console.log(type);
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img src={mon.pokemonsprites[0].sprites} />
      <p>{mon.name[0].toUpperCase() + mon.name.slice(1)}</p>
    </div>
  );
}
