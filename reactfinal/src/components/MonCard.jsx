import React, { useState } from "react";
import { getTypeColor } from "../utils/typeColor";
import { getTeam, saveTeam } from "../utils/team";

const getFavs = () => JSON.parse(localStorage.getItem("pokefavs") || "[]");
const saveFavs = (favs) =>
  localStorage.setItem("pokefavs", JSON.stringify(favs));

export function MonCard({ mon }) {
  const [favs, setFavs] = useState(getFavs); // pass fn reference, not call
  const [team, setTeam] = useState(getTeam);
  const [teamFull, setTeamFull] = useState(false);

  function favToggle(name) {
    const current = getFavs(); // read fresh from storage
    const isFav = current.includes(name);

    const updated = isFav
      ? current.filter((n) => n !== name) // remove if already fav'd
      : [...current, name]; // add if not
    saveFavs(updated);
    setFavs(updated);
  }

  function teamToggle(name) {
    const current = getTeam();
    if (current.includes(name)) {
      const updated = current.filter((n) => n !== name);
      saveTeam(updated);
      setTeam(updated);
      setTeamFull(false);
    } else {
      if (current.length >= 6) {
        setTeamFull(true);
        return;
      }
      const updated = [...current, name];
      saveTeam(updated);
      setTeam(updated);
    }
  }

  const color = getTypeColor(mon.pokemontypes[0].type.name);
  const onTeam = team.includes(mon.name);

  return (
    <div
      className={`${color} rounded-2xl border border-black/20 shadow-md m-3 w-52 flex flex-col items-center p-3 gap-1`}
      style={{ backgroundColor: color }}
    >
      <img
        src={mon.pokemonsprites[0].sprites}
        className="w-33 h-33 object-contain"
      />

      <h3 className="font-bold text-lg capitalize">{mon.name}</h3>

      <div className="flex gap-2">
        <button onClick={() => favToggle(mon.name)}>
          {favs.includes(mon.name) ? "⭐ Unfav" : "Favorite"}
        </button>
        <button
          onClick={() => teamToggle(mon.name)}
          disabled={!onTeam && teamFull}
        >
          {onTeam ? "Remove Team" : teamFull ? "Team Full" : "Add Team"}
        </button>
      </div>
      {teamFull && !onTeam && (
        <p className="text-red-700 text-xs font-semibold mt-1">
          Team is full! Remove a pokemon first.
        </p>
      )}
    </div>
  );
}
