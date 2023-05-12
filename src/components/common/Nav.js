import "./Nav.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            Northwest <span>Animal Hospital</span>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">All Staff</Link>
          </li>
          <li>
            <Link to="/pets">All Pets</Link>
          </li>
          {/* Add a redirect from /pets to /pets/cats */}
          <Routes>
            <Route path="/pets" element={<Navigate to="/pets/cats" />} />
          </Routes>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
