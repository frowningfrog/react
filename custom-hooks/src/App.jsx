//https://blog.logrocket.com/using-localstorage-react-hooks/

import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(false);

  function handleClick() {
    setUser((user) => (user = !user));
  }

  return (
    <>
      <h1>greetings {user ? "users" : "programs"}</h1>
      <button onClick={handleClick}>change greeting</button>
    </>
  );
}

export default App;
