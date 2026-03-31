import React from "react";

export default function Header() {
    return (
        <header className="hero">
          <div>
            <p className="eyebrow">Version 2</p>
            <h1>Lesson Planner with Component Architecture</h1>
            <p className="hero-copy">
              The behavior is the same, but responsibilities are split into smaller
          components that are easier to reason about and change.
            </p>
          </div>

          <aside className="success-box">
            <h2>Why this scales better</h2>
            <ul>
              <li>`App` owns the shared state.</li>
              <li>Each child component focuses on one job.</li>
              <li>Repeated lesson card markup is extracted.</li>
              <li>Features can grow without one giant file.</li>
            </ul>
          </aside>
        </header>
    )
}