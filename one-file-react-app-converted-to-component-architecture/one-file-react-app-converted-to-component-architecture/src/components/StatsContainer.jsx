import React from "react";
import StatsCard from "./StatsCard";

export default function StatsContainer({stats}) {

    return (
        <section className="grid grid-three">
          {
            stats.map((stat) => (
                <StatsCard key={stat.label} stat={stat} />
            ))
          }
        </section>
    )
}