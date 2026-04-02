import React from "react";

export function MovieCard({ item }) {
  return (
    <li key={item.imdbID}>
      <img src={item.Poster} />
      <p>{item.Title}</p>
      <p>{item.Year}</p>
    </li>
  );
}
