import React, { useEffect, useState } from "react";

export function LearnUseEffect() {
  const [stateChanged, setStateChanged] = useState(false);
  const [timerInSeconds, setTimerInSeconds] = useState(0);

  useEffect(() => {
    console.log("use effect ran!");
    const intervalId = setInterval(() => {
      setTimerInSeconds((prevState) => prevState + 1);
    }, 1000);

    return () => {
      console.log("component has unmounted");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div onClick={() => setStateChanged(!stateChanged)}>
      <div>Timer: {timerInSeconds}</div>
    </div>
  );
}
