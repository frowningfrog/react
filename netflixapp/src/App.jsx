import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import "./App.css";
import { useMovieList } from "./hooks/hooks";
import { DisplayMovies } from "./components/MovieList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useMovieList(searchTerm); // get the api hook
  return (
    <>
      <h1>movies</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DisplayMovies movies={data} />
    </>
  );
}

export default App;
