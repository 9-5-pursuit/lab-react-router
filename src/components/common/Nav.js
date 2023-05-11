import "./Nav.css";
import React from "react";

//link tag is called from rreact router dom
import { Link } from "react-router-dom";

//a tags need to be switched with link tags
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
          <Link to="/staff-list">
            All Staff
          </Link>
          </li>
          <li>
          <Link to="/pet-list">
            All Pets
          </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
