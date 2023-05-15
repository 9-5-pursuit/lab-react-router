//link tag is called from rreact router dom
//Navlink allows you to know which link you are currently on. On css the .active-link allows to costomize 
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import React from "react";




//a tags need to be switched with link tags
function Nav() {
  return (
    <header>
      <article>
        <h1>
          {/* page looks better when the logo isn't highlighted black when on the home page
          so ypu leave the logo as a link bc there will be no changes when clicked on */}
        <Link to="/">
         Northwest <span>Animal Hospital</span>
        </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
          <NavLink to="/staff-list" className={({ isActive }) => (isActive ? "active-link" : "")}>
            All Staff
          </NavLink>
          </li>
          <li>
          <NavLink to="/pets" className={({ isActive }) => (isActive ? "active-link" : "")}> 
            All Pets
          </NavLink>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
