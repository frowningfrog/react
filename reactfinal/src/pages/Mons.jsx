import { DisplayMons } from "../components/MonList";
import { usePokeList } from "../hooks/hooks";

export function Mons() {
  const { data } = usePokeList();

  return <DisplayMons mons={data} />;
}
