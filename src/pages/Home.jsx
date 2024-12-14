import React from "react";
import { Link, useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  return (
    <div className="h-screen w-full flex justify-center ">
      <div
        style={{ backgroundColor: "#FFF7ED" }}
        className="flex flex-col w-[548.15px] "
      >
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
              <Link to="/vans">Find your van</Link>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
