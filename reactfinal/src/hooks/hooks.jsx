import { useState, useEffect } from "react";

export function usePokeList(searchTerm) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=1350`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const result = await response.json();
        const seenDex = [];
        const uniqueMons = result.results.filter((mon) => {
          if (seenDex.includes(mon.name)) {
            return false;
          }
          seenDex.push(mon.name);
          return true;
        });
        setData(uniqueMons);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  console.log(data);

  return { data, isLoading, error };
}
