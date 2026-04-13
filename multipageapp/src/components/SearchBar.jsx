import React from "react";

export function SearchBar({ searchTerm, setSearchTerm }) {
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return <input value={searchTerm} onChange={handleChange} />;
}
