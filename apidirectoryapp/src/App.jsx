import { useState, useEffect } from "react";
import { UserList } from "./components/UserList";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>Directory App</h1>
      <UserList />
    </>
  );
}

export default App;
