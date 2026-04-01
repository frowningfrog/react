import React from "react";
import { MovieList } from "../hooks/hooks";

export function DisplayMovies() {
  console.log(MovieList);
  return (
    <ul>
      {MovieList &&
        MovieList.map((item) => (
          <li key={item.imdbID}>
            {item.Title}
            <img src={item.Poster} />
          </li>
        ))}
    </ul>
  );
}
