import React from "react";
import { MovieCard } from "./MovieCard";

export function DisplayMovies({ movies }) {
  return (
    <ul className="list">
      {movies && movies.map((item) => <MovieCard item={item} />)}
    </ul>
  );
}
