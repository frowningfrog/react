import React, { useCallback, useState } from "react";
import Child from "./Child";

let defaultMovies = [
  {
    title: "intersellar",
  },
  {
    title: "tenet",
  },
  {
    title: "tron: legacy",
  },
  {
    title: "spiderverse",
  },
  {
    title: "the lego movie",
  },
];

export function Parent() {
  const [count, setCount] = useState(0);
  const [childLabel, setChildLabel] = useState("");
  const [movies, setMovies] = useState(defaultMovies);

  const handleButtonClick = () => {
    setCount(count + 1);
    if ((count + 1) % 5 === 0) {
      setChildLabel(`${count + 1} is divisible by 5!`);
    }
  };

  const sayHi = useCallback(() => {
    console.log("greetings programs");
  }, []);

  console.log("parent rendered");

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleButtonClick}>+1</button>
      <Child label={childLabel} handleButtonClick={sayHi} movies={movies} />
    </div>
  );
}
