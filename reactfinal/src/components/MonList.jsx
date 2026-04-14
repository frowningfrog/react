import React from "react";
import { MonCard } from "./MonCard";

export function DisplayMons({ mons }) {
  return (
    <ul className="list">
      {mons && mons.map((m) => <MonCard key={m.name} mon={m} />)}
    </ul>
  );
}
