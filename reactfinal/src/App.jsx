import React, { useState } from "react";
import { Mons } from "./pages/Mons";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Favs } from "./pages/Favs";
import { Team } from "./pages/Team";
import { PokemonLayout } from "./layouts/PokemonLayout";
import { getFavs, saveFavs } from "./utils/favs";
import { getTeam, saveTeam } from "./utils/team";
import { Details } from "./pages/Details";

function NavLink({ to, children }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-4 py-2 font-bold uppercase tracking-widest text-sm transition-all duration-150 border-2 border-black
        ${
          active
            ? "bg-yellow-400 text-black shadow-[3px_3px_0px_#000]"
            : "bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-[3px_3px_0px_#000]"
        }`}
    >
      {children}
    </Link>
  );
}

function AppShell({ sharedProps }) {
  return (
    <div
      className="min-h-screen bg-zinc-950"
      style={{ fontFamily: "'Press Start 2P', monospace" }}
    >
      {/* Scanline overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* Header */}
      <header className="bg-zinc-900 border-b-4 border-yellow-400 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-yellow-400 text-2xl">💾</span>
          <h1 className="text-yellow-400 text-sm sm:text-base tracking-wider uppercase">
            Pokémon
            <br className="sm:hidden" /> Team Maker
          </h1>
        </div>
        <nav className="flex gap-2 flex-wrap justify-center">
          <NavLink to="/">Pokédex</NavLink>
          <NavLink to="/favs">Favorites</NavLink>
          <NavLink to="/team">My Team</NavLink>
        </nav>
      </header>

      {/* Page */}
      <div>
        <Routes>
          <Route element={<PokemonLayout sharedProps={sharedProps} />}>
            <Route path="/" element={<Mons />} />
            <Route path="/details/:monName" element={<Details />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/team" element={<Team />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

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
      <AppShell sharedProps={sharedProps} />
    </BrowserRouter>
  );
}

export default App;
