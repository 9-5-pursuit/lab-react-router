import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <article>
        <Link to='/'>
          <h1>
            Northwest <span>Animal Hospital</span>
          </h1>

        </Link>

      </article>
      <aside>
        <ul>
          <Link to='/staff'>
            <li>
              All Staff
            </li>

          </Link>

          <li>
            <Link to='/pets/'>
              All Pets
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
