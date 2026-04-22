import React from "react";
import { usePokeList } from "../hooks/hooks";
import { PokemonGrid } from "../layouts/PokemonLayout";
import { MonCard } from "../components/MonCard";
import { useSharedProps } from "../layouts/PokemonLayout";

export function Team() {
  const { team } = useSharedProps();
  const { data, isLoading } = usePokeList();
  const sharedProps = useSharedProps();

  if (isLoading) return <p>Loading...</p>;

  const allPokemon = data?.data?.pokemon || [];
  const teamList = allPokemon.filter((m) => team.includes(m.name));

  if (teamList.length === 0)
    return <p>No pokemon on your team yet! Add some from the browse page.</p>;

  return (
    <>
      <h2>My Team ({teamList.length}/6)</h2>
      <PokemonGrid>
        {teamList.map((m) => (
          <MonCard key={m.name} mon={m} {...sharedProps} />
        ))}
      </PokemonGrid>
    </>
  );
}
