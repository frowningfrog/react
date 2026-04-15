import { useState, useEffect } from "react";

const getstuff = `
query samplePokeAPIquery {
  pokemon(limit: 151) {
    name
    pokemontypes {
      type {
        name
      }
    }
    pokemonsprites {
      sprites(path: "front_default")
    }
  }
}`;

export function usePokeList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://graphql.pokeapi.co/v1beta2`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: getstuff,
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}
