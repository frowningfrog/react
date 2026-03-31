import React from "react";

export default function StatsCard({stat}) {
    return (
        <article className="panel stat-panel">
            <span className="stat-value">{stat.stat}</span>
            <span className="stat-label">{stat.label}</span>
        </article>
    )
}