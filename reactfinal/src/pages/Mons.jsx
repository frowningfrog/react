import { DisplayMons } from "../components/MonList";
import { usePokeList } from "../hooks/hooks";
import { useSharedProps } from "../layouts/PokemonLayout";

export function Mons() {
  const sharedProps = useSharedProps();
  const { data } = usePokeList();

  return <DisplayMons mons={data} sharedProps={sharedProps} />;
}
