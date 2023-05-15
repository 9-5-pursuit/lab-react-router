import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">Northwest Animal Hospital</Link>
        </h1>
      </article>
      <aside>
        <ul>
          <Link to="/staff">All Staff</Link>
          <li>
            <Link to="/pets">All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
