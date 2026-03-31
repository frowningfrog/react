import React from "react";

export default function Header() {
    return (
        <header className="hero">
          <div>
            <p className="eyebrow">Version 1</p>
            <h1>Lesson Planner in One File</h1>
            <p className="hero-copy">
              This app works, but everything lives in one component: state,
              filters, form logic, stats, repeated lesson cards, and UI layout.
            </p>
          </div>

          <aside className="warning-box">
            <h2>Why this gets painful</h2>
            <ul>
              <li>One file owns every concern.</li>
              <li>Repeated card UI cannot be reused elsewhere.</li>
              <li>Small changes force you to scan a large component.</li>
              <li>More features means more state and more tangled JSX.</li>
            </ul>
          </aside>
        </header>
    )
}