import { NavLink } from "react-router-dom";

function NavBar({ savedCount }) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/saved">Saved ({savedCount})</NavLink>
    </nav>
  );
}

export default NavBar;