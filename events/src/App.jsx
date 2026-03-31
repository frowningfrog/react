import React, { useState } from "react";
import "./App.css";
import { LearnUseEffect } from "./Components/LearnUseEffects";
import { WindowWidth } from "./Components/WindowWidth";

const emptyYou = {
  color: "",
  fname: "",
  lname: "",
};

function App() {
  const [count, setCount] = useState(0);
  const [headerWasHovered, setHeaderWasHovered] = useState(false);
  const [you, setYou] = useState(emptyYou);
  const [showUseEffect, setShowUseEffect] = useState(false);

  function handleCountIncrease() {
    setCount(count + 1);
  }

  function handleUserHoverOverHeader() {
    setHeaderWasHovered(!headerWasHovered);
  }

  function toggleShowUseEffect() {
    setShowUseEffect(!showUseEffect);
  }

  function handleParrot(event) {
    const { value, name } = event.target;

    setYou((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1
        onMouseEnter={handleUserHoverOverHeader}
        onMouseLeave={handleUserHoverOverHeader}
      >
        press to increase count
      </h1>
      <button onClick={handleCountIncrease}>Increase count</button>
      <p>{count}</p>
      {headerWasHovered ? (
        <p>you are hovering...</p>
      ) : (
        <p>...you gonna hover?</p>
      )}
      <input
        type="text"
        name="color"
        value={you.color}
        onChange={handleParrot}
        placeholder="Please type color"
        style={{ margin: "1em" }}
      />
      <input
        type="text"
        name="fname"
        value={you.fname}
        onChange={handleParrot}
        placeholder="Please type first name"
        style={{ margin: "1em" }}
      />
      <input
        type="text"
        name="lname"
        value={you.lname}
        onChange={handleParrot}
        placeholder="Please type last name"
        style={{ margin: "1em" }}
      />
      <p>{you.color}</p>
      <p>{you.fname}</p>
      <p>{you.lname}</p>

      <button onClick={toggleShowUseEffect}>Toggle use effect component</button>

      {showUseEffect && (
        <>
          <LearnUseEffect />
          <WindowWidth />
        </>
      )}
    </div>
  );
}

export default App;
