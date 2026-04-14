import React, { useMemo, useState } from "react";

export default React.memo(function Child({ label, handleButtonClick, movies }) {
  console.log("child rendered");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [movies, searchTerm]);

  console.log(filteredMovies);

  return (
    <div>
      <button onClick={handleButtonClick}>say hi</button>
      <input
        placeholder="Search movies"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
});
