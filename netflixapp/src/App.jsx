import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import "./App.css";
import { DisplayMovies } from "./components/MovieList";

function App() {
  return (
    <>
      <h1>movies</h1>
      <SearchBar />
      <DisplayMovies />
    </>
  );
}

export default App;
