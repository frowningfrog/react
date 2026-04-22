import React, { useState } from "react";
import { getTypeColor } from "../utils/typeColor";

export function MonCard({ mon, favs, team, teamFull, favToggle, teamToggle }) {
  const color = getTypeColor(mon.pokemontypes[0].type.name);
  const onTeam = team.includes(mon.name);
  const [showFull, setShowFull] = useState(false);

  function handleTeamClick() {
    if (!onTeam && teamFull) {
      setShowFull(true);
    } else {
      setShowFull(false);
      teamToggle(mon.name);
    }
  }

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
        <button onClick={handleTeamClick} disabled={!onTeam && teamFull}>
          {onTeam ? "Remove Team" : teamFull ? "Team Full" : "Add Team"}
        </button>
      </div>
      {showFull && !onTeam && (
        <p className="text-red-700 text-xs font-semibold mt-1">
          Team is full! Remove a pokemon first.
        </p>
      )}
    </div>
  );
}
