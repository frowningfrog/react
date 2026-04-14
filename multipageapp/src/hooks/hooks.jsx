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
        const seenIds = [];
        const uniqueMovies = result.Search.filter((movie) => {
          if (seenIds.includes(movie.imdbID)) {
            return false;
          }
          seenIds.push(movie.imdbID);
          return true;
        });
        setData(uniqueMovies);
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

export const useMovieDetails = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    setLoading(true);
    setError(null);

    fetch(`https://www.omdbapi.com/?apikey=f5a49a4c&i=${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(`Something went wrong: ${err.message}`);
        setLoading(false);
      });
  }, [movieId]);

  return { movie, loading, error };
};
