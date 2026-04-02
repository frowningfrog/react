import { useState } from "react";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { DashboardLayout } from "./components/DashboardLayout";
import { Dashboard } from "./components/Dashboard";
import { Settings } from "./components/Settings";
import { PageNotFound } from "./components/PageNotFound";

function App() {
  const [isPayingUser, setIsPayingUsing] = useState(false);

  return (
    <div>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        {isPayingUser && <NavLink to="/dashboard">Dashboard</NavLink>}
      </div>
      <button onClick={() => setIsPayingUsing(true)}>i am paying</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {isPayingUser && (
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Route>
        )}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
