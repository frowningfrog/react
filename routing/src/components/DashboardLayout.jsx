import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>
      <NavLink to="/dashboard/settings">Settings</NavLink>
      <Outlet />
    </div>
  );
}
