import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <NavLink to="/">
            Northwest <span>Animal Hospital</span>
          </NavLink>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <NavLink
              className={({ isPending, isActive }) =>
                isPending ? "pending" : isActive ? "active-link" : ""
              }
              to="/staff"
            >
              All Staff
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isPending, isActive }) =>
                isPending ? "pending" : isActive ? "active-link" : ""
              }
              to="/pets"
            >
              All Pets
            </NavLink>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
