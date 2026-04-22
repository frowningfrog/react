import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

export function PokemonLayout({ sharedProps }) {
  return (
    <div className="p-4 sm:p-8">
      <Outlet context={sharedProps} />
    </div>
  );
}

export function PokemonGrid({ children }) {
  return <div className="flex flex-wrap justify-center gap-1">{children}</div>;
}

export function useSharedProps() {
  return useOutletContext();
}
