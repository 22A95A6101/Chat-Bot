import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
      Nihon Navigator
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""} onClick={() => setMenuOpen(false)}>
        <li>
          <NavLink to="/about" >About</NavLink>
        </li>
        <li>
          <NavLink to="/Recommend" >Explore by Interest</NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact" >Contact</NavLink>
        </li> */}
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" >Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
