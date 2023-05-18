import "./Nav.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <header>
      <article>
        <h1>
          <NavLink to="/">
            Northwest <span>Animal Hospital</span>
          </NavLink>
          {/* <a href="/">
            Northwest <span>Animal Hospital</span>
          </a> */}
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <NavLink
              to="/staff"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              All Staff
            </NavLink>
            {/* <a href="/staff">All Staff</a> */}
          </li>
          <li>
            <NavLink
              to="/pets"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              All Pets
            </NavLink>
            {/* <a href="/pets">All Pets</a> */}
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
