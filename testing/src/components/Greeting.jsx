"use no memo";
import React, { useState } from "react";

export function Greeting() {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <div>
      <button
        aria-pressed={showHeader}
        onClick={() => setShowHeader((currentShowHeader) => !currentShowHeader)}
      >
        toggle greeting
      </button>
      {showHeader && <h1>greetings programs</h1>}
    </div>
  );
}

// export function Greeting() {
//   const [showHeader, setShowHeader] = useState(false);

//   return (
//     <div>
//       <button
//         aria-pressed={showHeader}
//         onClick={() => setShowHeader((currentShowHeader) => !currentShowHeader)}
//       >
//         toggle greeting
//       </button>
//       {showHeader && <h1>greetings programs</h1>}
//     </div>
//   );
// }
