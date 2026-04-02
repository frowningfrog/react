import { useState, useEffect } from "react";

export function useMovieList(searchTerm) {
  // keyword use makes it a hook [not a component which is uppercase]
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=f5a49a4c&s=${searchTerm}`, // get user input
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const result = await response.json();
        setData(result.Search);
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

  return { data, isLoading, error }; // goes to app not a component
}
