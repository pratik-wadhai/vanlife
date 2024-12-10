import React from "react";
import aboutBg from "../assets/aboutBg.png";
import { Link, useLocation } from "react-router-dom";
const About = () => {
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
        <main>
          <div className="w-[548px] h-[233px] overflow-hidden">
            <img
              src={aboutBg}
              alt="About Page Img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="content px-8 mt-10 ">
            <h1 className="font-bold text-3xl">
              Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p className="text-sm my-5 leading-6 font-semibold">
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p className="text-sm my-5 leading-6 font-semibold">
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="bg-[#FFCC8D] p-10 mx-auto  my-10 w-[494px] h-[198px]  flex flex-col justify-center rounded-lg">
            <h2 className="text-2xl font-bold">
              Your destination is waiting. Your van is ready.
            </h2>
            <button
              type="button"
              className="text-white mt-3 bg-gray-800 w-fit hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Explore Our vans
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
