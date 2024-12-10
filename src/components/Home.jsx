import React from "react";
import { Link, useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  return (
    <div className="h-screen w-full flex justify-center ">
      <div
        style={{ backgroundColor: "#FFF7ED" }}
        className="flex flex-col w-[548.15px] h-[1035px]"
      >
        <header className="flex content-end gap-72 py-8 px-6 h-[111.62px]">
          <div className="logo">
            <Link to="/">
              <h1 className="font-black text-2xl">#VANLIFE</h1>
            </Link>
          </div>
          <nav className="">
            <ul className="flex gap-5">
              <li>
                <Link
                  to="/about"
                  className={`${
                    location.pathname === "/about" ? "underline" : ""
                  } hover:underline`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link>Vans</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="h-[386.7px] homeMain text-white text-center bg-center bg-contain">
          <div className="py-20">
            <h1 className="font-extrabold text-4xl leading-10 px-8">
              You got the travel plans, we got the travel vans.
            </h1>
            <p className="text-sm leading-6 px-14 my-5">
              Add adventure to your life by joining the #vanlife movement. Rent
              the perfect van to make your perfect road trip.
            </p>
            <button
              type="button"
              className="focus:outline-none text-white font-bold bg-[#FF8C38]  rounded-lg text-sm px-40 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 "
            >
              Find your van
            </button>
          </div>
        </main>
        <footer className="bg-[#252525] py-5 text-center ">
          <p className="text-[#AAAAAA] font-semibold"> &#169; 2022 #VANLIFE</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
