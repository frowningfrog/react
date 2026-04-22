import React, { useState } from "react";
import { Mons } from "./pages/Mons";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Favs } from "./pages/Favs";
import { Team } from "./pages/Team";
import { PokemonLayout } from "./layouts/PokemonLayout";
import { getFavs, saveFavs } from "./utils/favs";
import { getTeam, saveTeam } from "./utils/team";

function App() {
  const [favs, setFavs] = useState(getFavs);
  const [team, setTeam] = useState(getTeam);
  const [teamFull, setTeamFull] = useState(false);

  function favToggle(name) {
    const isFav = favs.includes(name);
    const updated = isFav ? favs.filter((n) => n !== name) : [...favs, name];
    saveFavs(updated);
    setFavs(updated);
  }

  function teamToggle(name) {
    if (team.includes(name)) {
      const updated = team.filter((n) => n !== name);
      saveTeam(updated);
      setTeam(updated);
      setTeamFull(false);
    } else {
      if (team.length >= 6) {
        setTeamFull(true);
        return;
      }
      const updated = [...team, name];
      saveTeam(updated);
      setTeam(updated);
    }
  }

  const sharedProps = { favs, team, teamFull, favToggle, teamToggle };

  return (
    <BrowserRouter>
      <h1 className="text-2xl font-bold tracking-wide">Pokemon team maker</h1>
      <nav className="bg-teal-600 text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <Link to="/" className="hover:text-yellow-300 transition-colors">
          Pokemon List
        </Link>{" "}
        |{" "}
        <Link to="/favs" className="hover:text-yellow-300 transition-colors">
          My Favorites
        </Link>{" "}
        |{" "}
        <Link to="/team" className="hover:text-yellow-300 transition-colors">
          My Team
        </Link>
      </nav>
      <div>
        <Routes>
          <Route element={<PokemonLayout sharedProps={sharedProps} />}>
            <Route path="/" element={<Mons />} />
            <Route path="/team" element={<Team />} />
            <Route path="/favs" element={<Favs />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
