import React, { useState } from "react";

export function SearchBar({ searchTerm, setSearchTerm }) {
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  console.log(searchTerm);

  return <input value={searchTerm} onChange={handleChange} />;
}
