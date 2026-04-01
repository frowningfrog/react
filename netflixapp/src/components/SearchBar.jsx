import React, { useState } from "react";

export function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return <input value={inputValue} onChange={handleChange} />;
}
