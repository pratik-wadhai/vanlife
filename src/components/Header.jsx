import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const navStyles = {
    textDecoration: "underline",
    fontWeight: "bold",
  };

  return (
    <header
      className="flex rounded-t-lg justify-center mx-auto gap-64 py-8  w-[548.15px] px-6 h-[111.62px]"
      style={{ backgroundColor: "#FFF7ED" }}
    >
      <div className="logo">
        <Link to="/">
          <h1 className="font-black text-2xl">#VANLIFE</h1>
        </Link>
      </div>
      <nav className="">
        <ul className="flex gap-5">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? navStyles : null)}
              to="/host"
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? navStyles : null)}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? navStyles : null)}
              to="/vans"
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
