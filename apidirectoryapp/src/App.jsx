import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import "./App.css";
import { useUserList } from "./hooks/hooks";
import { DisplayUsers } from "./components/UserList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { users } = useUserList();

  return (
    <>
      <h1>Directory App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DisplayUsers users={users} />
    </>
  );
}

export default App;
