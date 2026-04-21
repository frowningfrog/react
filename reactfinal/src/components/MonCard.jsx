import React, { useState } from "react";

export function MonCard({ mon }) {
  const type = mon.pokemontypes[0].type.name;
  let color = "";

  switch (type) {
    case "grass":
      color = "green";
      break;
    case "fire":
      color = "orange";
      break;
    case "water":
      color = "royalblue";
      break;
    case "bug":
      color = "palegreen";
      break;
    case "normal":
      color = "lightgray";
      break;
    case "poison":
      color = "plum";
      break;
    case "electric":
      color = "gold";
      break;
    case "ground":
      color = "peru";
      break;
    case "fairy":
      color = "pink";
      break;
    case "fighting":
      color = "darkred";
      break;
    case "psychic":
      color = "lightpink";
      break;
    case "rock":
      color = "tan";
      break;
    case "ghost":
      color = "rebeccapurple";
      break;
    case "ice":
      color = "lightblue";
      break;
    case "dragon":
      color = "steelblue";
      break;
  }

  const [favs, setFavs] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  function favToggle(m) {
    if (!favs) {
      setFavs([m]);
    } else {
      setFavs([...favs, m]);
      console.log(favs);
    }
    localStorage.setItem("name", JSON.stringify([...favs, m]));
  }

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img src={mon.pokemonsprites[0].sprites} />
      <p>{mon.name[0].toUpperCase() + mon.name.slice(1)}</p>
      <div className="flex">
        <button onClick={() => favToggle(mon.name)}>Favorite</button>
        {favs && favs.includes(mon.name) && <span>*</span>}
      </div>
    </div>
  );
}
