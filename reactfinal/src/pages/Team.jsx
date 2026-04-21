import React from "react";
import { usePokeList } from "../hooks/hooks";
import { getTypeColor } from "../utils/typeColor";
import { getTeam, saveTeam } from "../utils/team";
import { PokemonGrid } from "../layouts/PokemonLayout";
import { MonCard } from "../components/MonCard";

export function Team() {
  const { data, isLoading } = usePokeList();

  if (isLoading) return <p>Loading...</p>;

  const allPokemon = data?.data?.pokemon || [];
  const team = allPokemon.filter((m) => getTeam().includes(m.name));

  if (team.length === 0)
    return <p>No pokemon on your team yet! Add some from the browse page.</p>;

  return (
    <>
      <h2>My Team ({team.length}/6)</h2>
      <PokemonGrid>
        {team.map((m) => (
          <MonCard key={m.name} mon={m} />
        ))}
      </PokemonGrid>
    </>
  );
}
