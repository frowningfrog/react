import React from "react";

export function DisplayMovies({ movies }) {
  console.log(movies);
  return (
    <ul>
      {movies &&
        movies.map((item) => (
          <li key={item.imdbID}>
            <p>{item.Title}</p>
            <img src={item.Poster} />
            <p>{item.Year}</p>
          </li>
        ))}
    </ul>
  );
}
