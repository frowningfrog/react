//https://blog.logrocket.com/using-localstorage-react-hooks/
import "./App.css";
import React from "react";
import TogglePanel from "./components/TogglePanel";
import CounterCard from "./components/CounterCard";
import Header from "./components/Header";
import SavedNote from "./components/SavedNote";

function App() {
  return (
    <div>
      <Header />
      <TogglePanel />
      <CounterCard />
      <SavedNote />
    </div>
  );
}

export default App;
