import React, { useEffect, useState } from "react";

export function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // ensure no memory leaks when use effect ends
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <p>Window Width: {width}px</p>;
}
