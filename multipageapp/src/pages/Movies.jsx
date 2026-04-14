import { useState } from "react";
import { DisplayMovies } from "../components/MovieList";
import { SearchBar } from "../components/SearchBar";
import { useMovieList } from "../hooks/hooks";
import { MainLayout } from "../layouts/MainLayout";

export function Movies() {
  const [searchTerm, setSearchTerm] = useState("tron");
  const { data } = useMovieList(searchTerm); // get the api hook
  return (
    <div>
      <MainLayout />
      <h1>Movies database</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DisplayMovies movies={data} />
    </div>
  );
}
