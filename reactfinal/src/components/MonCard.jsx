import React, { useState } from "react";
import { getTypeColor } from "../utils/typeColor";

export function MonCard({ mon, favs, team, teamFull, favToggle, teamToggle }) {
  const typeName = mon.pokemontypes[0].type.name;
  const { bg, border, badge, text } = getTypeColor(typeName);
  const onTeam = team.includes(mon.name);
  const isFav = favs.includes(mon.name);
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
      className="relative m-2 w-50 flex flex-col items-center p-3 gap-2 border-4 border-black transition-transform duration-100 hover:-translate-y-1"
      style={{
        backgroundColor: bg,
        boxShadow: "4px 4px 0px #000",
        fontFamily: "'Press Start 2P', monospace",
      }}
    >
      {/* Type badge */}
      <span
        className="absolute top-2 left-2 text-[8px] px-1 py-0.5 border border-black uppercase font-bold"
        style={{ backgroundColor: badge, color: "#000" }}
      >
        {typeName}
      </span>

      {/* Fav star */}
      <button
        onClick={() => favToggle(mon.name)}
        className="absolute top-1 right-2 text-base leading-none transition-transform hover:scale-125"
        title={isFav ? "Unfavorite" : "Favorite"}
      >
        {isFav ? "FAV ⭐" : "☆"}
      </button>

      {/* Sprite */}
      <div className="mt-4 w-30 h-30 flex items-center justify-center bg-black/10 border-2 border-black/20">
        <img
          src={mon.pokemonsprites[0].sprites}
          className="w-45 h-45 object-contain"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      {/* Name */}
      <h3 className="text-[10px] font-bold capitalize text-black text-center leading-tight mt-1">
        {mon.name}
      </h3>

      {/* Team button */}
      <button
        onClick={handleTeamClick}
        disabled={!onTeam && teamFull}
        className={`w-full text-[8px] py-1.5 px-2 border-2 border-black font-bold uppercase tracking-wide transition-all duration-100
          ${
            onTeam
              ? "bg-red-500 text-white hover:bg-red-600 active:translate-y-px"
              : !onTeam && teamFull
                ? "bg-zinc-400 text-zinc-600 cursor-not-allowed"
                : "bg-yellow-400 text-black hover:bg-yellow-300 active:translate-y-px"
          }`}
        style={!onTeam && !teamFull ? { boxShadow: "2px 2px 0px #000" } : {}}
      >
        {onTeam ? "— Remove from team" : teamFull ? "Team Full" : "+ Add Team"}
      </button>

      {/* Team full warning */}
      {showFull && !onTeam && (
        <p className="text-[7px] text-red-800 font-bold text-center leading-tight bg-red-200 border border-red-600 w-full px-1 py-1">
          Team full!
          <br />
          Remove one first.
        </p>
      )}
    </div>
  );
}
