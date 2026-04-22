import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

export function PokemonLayout({ sharedProps }) {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Outlet context={sharedProps} />
    </div>
  );
}

export function PokemonGrid({ children }) {
  return <div className="flex flex-wrap justify-center">{children}</div>;
}

export function useSharedProps() {
  return useOutletContext();
}
