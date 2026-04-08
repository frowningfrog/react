import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import "./App.css";
import { useUserList } from "./hooks/hooks";
import { DisplayUsers } from "./components/UserList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { users } = useUserList();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <h1>Directory App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DisplayUsers users={filteredUsers} searchTerm={searchTerm} />
    </>
  );
}

export default App;
