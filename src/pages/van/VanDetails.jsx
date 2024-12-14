import React from "react";
import { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
// import "../server";
import { useState } from "react";
const VanDetails = () => {
  const [van, setVan] = useState(null);
  const params = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  let btnClass =
    "text-[#FFEAD0] focus:ring- font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-10 ms-8  focus:outline-none";
  if (van) {
    if (van.type == "simple") {
      btnClass += " bg-[#FF8C38]";
    }
    if (van.type == "rugged") {
      btnClass += " bg-green-800";
    }
    if (van.type == "luxury") {
      btnClass += " bg-black";
    }
  }
  const search = location.state?.search || "";
  const type = location.state?.type || " all";
  return (
    <div className=" w-full flex justify-center ">
      <div
        style={{ backgroundColor: "#FFF7ED      " }}
        className="flex flex-col w-[548.15px] "
      >
        <main>
          <div className="flex">
            <FaArrowLeft className="mt-1 me-1 text-sm text-[#858585]" />
            <p>
              <Link
                to={`..${search}`}
                relative="path"
                className="underline text-sm leading-5 font-semibold"
              >
                Back to {type + " "}
                vans
              </Link>
            </p>
          </div>
          {van && (
            <div className="van-card">
              <div className="card-img w-[497.32px] h-[490.35px] overflow-hidden mx-auto mt-10">
                <img
                  src={van.imageUrl}
                  alt=""
                  className="h-full w-full object-contain rounded-xl"
                />
              </div>

              <div className="info max-w-[497.32px] ">
                <button type="button" className={btnClass}>
                  {van.type[0].toUpperCase() + van.type.slice(1)}
                </button>
                <h2 className="font-bold ms-8 mt-5 text-3xl leading-8">
                  {van.name}
                </h2>
                <p className="text-2xl ms-8 mt-5">
                  <span className="font-black">${van.price}</span>/day
                </p>
                <p className="ms-8 mt-5 font-medium leading-6 text-xl">
                  The Modest Explorer is a van designed to get you out of the
                  house and into nature. This beauty is equipped with solar
                  panels, a composting toilet, a water tank and kitchenette. The
                  idea is that you can pack up your home and escape for a
                  weekend or even longer!
                </p>
                <button
                  type="button"
                  className="text-white font-semibold bg-[#FF8C38]  rounded-lg text-sm px-5 py-2.5 mt-10 ms-8 mb-2 w-full  focus:outline-none"
                >
                  Rent this van
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default VanDetails;
