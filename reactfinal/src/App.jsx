import React from "react";
import { Mons } from "./pages/Mons";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Favs } from "./pages/Favs";
import { Team } from "./pages/Team";
import { PokemonLayout } from "./layouts/PokemonLayout";

function App() {
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
          <Route element={<PokemonLayout />}>
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
