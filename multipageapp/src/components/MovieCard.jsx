import React, { useState } from "react";
import { Link } from "react-router-dom";

export function MovieCard({ item }) {
  const [src, setSrc] = useState(item.Poster);
  return (
    <li>
      <img
        onError={() => {
          setSrc(
            "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png",
          );
        }}
        src={src}
      />
      <p>{item.Title}</p>
      <p>{item.Year}</p>
      <Link to={`/add-review?movieid=${item.imdbID}`}>Add review</Link>
    </li>
  );
}
