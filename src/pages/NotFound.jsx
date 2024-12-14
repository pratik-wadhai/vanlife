import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className=" w-full flex justify-center ">
      <div
        style={{ backgroundColor: "#FFF7ED      " }}
        className="flex flex-col w-[548.15px] py-10 "
      >
        <h1 className="font-bold text-center text-3xl leading-10">
          Sorry, the page you were looking for was not found.
        </h1>
        <Link
          to="/"
          className="text-white bg-black text-center  focus:ring- font-medium rounded-lg text-sm px-5 py-2.5 mt-10 w-48 mx-auto focus:outline-none"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
