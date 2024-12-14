import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const HostLayout = () => {
  const navStyles = {
    textDecoration: "underline",
    fontWeight: "bold",
  };
  return (
    <>
      <div className="w-full flex justify-center ">
        <div
          style={{ backgroundColor: "#FFF7ED" }}
          className="flex flex-col w-[548.15px]"
        >
          <header>
            <nav>
              <ul className="flex gap-10 justify-start ms-10 mt-5">
                <li>
                  <NavLink
                    to="/host"
                    className="hover:underline hover:font-black"
                    style={({ isActive }) => (isActive ? navStyles : null)}
                    end
                  >
                    DashBoard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/host/income"
                    style={({ isActive }) => (isActive ? navStyles : null)}
                    className="hover:underline hover:font-black"
                  >
                    Income
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/host/vans"
                    style={({ isActive }) => (isActive ? navStyles : null)}
                    className="hover:underline hover:font-black"
                  >
                    Vans
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    style={({ isActive }) => (isActive ? navStyles : null)}
                    to="/host/reviews"
                    className="hover:underline hover:font-black"
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Outlet />
          </header>
        </div>
      </div>
    </>
  );
};

export default HostLayout;
