import React from "react";
import { usePokeList } from "../hooks/hooks";
import { getTypeColor } from "../utils/typeColor";
import { PokemonGrid } from "../layouts/PokemonLayout";

const getFavs = () => JSON.parse(localStorage.getItem("pokefavs") || "[]");

export function Favs() {
  const { data, isLoading } = usePokeList();
  const favs = getFavs();

  if (isLoading) return <p>Loading...</p>;

  const listData = data?.data;
  const allPokemon = listData?.pokemon || [];
  const favlist = allPokemon.filter((m) => favs.includes(m.name));

  if (favlist.length === 0) {
    return <p>No pokemon on your favorite list yet! Go favorite some.</p>;
  }

  return (
    <div>
      <h2>My Favorites ({favlist.length})</h2>
      <PokemonGrid>
        {favlist.map((m) => {
          const color = getTypeColor(m.pokemontypes[0].type.name);

          return (
            <div
              key={m.name}
              className="card"
              style={{ backgroundColor: color }}
            >
              <img src={m.pokemonsprites[0].sprites} />
              <h3>{m.name[0].toUpperCase() + m.name.slice(1)}</h3>
            </div>
          );
        })}
      </PokemonGrid>
    </div>
  );
}
