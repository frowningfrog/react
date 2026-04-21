import React from "react";
import { Outlet } from "react-router-dom";

export function PokemonLayout() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Outlet />
    </div>
  );
}

export function PokemonGrid({ children }) {
  return <div className="flex flex-wrap justify-center">{children}</div>;
}
