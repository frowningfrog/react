import { NavLink, Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="nav">
      <NavLink className="btn" to="/">
        Home
      </NavLink>
      <NavLink className="btn" to="/movies">
        Movies
      </NavLink>
      <NavLink className="btn" to="/add-review">
        Add Review
      </NavLink>
      <NavLink className="btn" to="/about">
        About
      </NavLink>
      <Outlet />
    </div>
  );
}
