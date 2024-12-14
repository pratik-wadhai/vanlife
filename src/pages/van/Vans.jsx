import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getVans } from "../../../api";
import "../../server";
const Vans = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const filteredvans = typeFilter
    ? vans.filter((van) => van.type == typeFilter)
    : vans;

  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value == null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-center">there was an error</h1>;
  }
  return (
    <div className=" w-full flex justify-center ">
      <div
        style={{ backgroundColor: "#FFF7ED" }}
        className="flex flex-col w-[548.15px] "
      >
        <nav className="flex gap-4 justify-around">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className="bg-[rgb(255,234,208)] hover:bg-[#FF8C38] hover:text-white text-black focus:ring- font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none"
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className=" bg-[#FFEAD0] hover:bg-green-800 hover:text-white text-black focus:ring- font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none"
          >
            Rugged
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className=" bg-[#FFEAD0] hover:bg-black hover:text-white text-black focus:ring- font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none"
          >
            Luxury
          </button>
          {typeFilter && (
            <button
              onClick={() => setSearchParams({})}
              className="underline mt-2"
              to="."
            >
              Clear filters
            </button>
          )}
        </nav>
        <main>
          <div className="p-4">
            <h1 className="font-bold text-3xl leading-8 ms-5">
              Explore our van options
            </h1>
          </div>

          <div className="vansContainer flex flex-wrap gap-4  justify-center">
            {filteredvans.map((van) => {
              let btnClass =
                "text-[#FFEAD0] focus:ring- font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none";
              if (van.type == "simple") {
                btnClass += " bg-[#FF8C38]";
              }
              if (van.type == "rugged") {
                btnClass += " bg-green-800";
              }
              if (van.type == "luxury") {
                btnClass += " bg-black";
              }
              return (
                <div className="van-card w-fit " key={van.id}>
                  <Link
                    to={van.id}
                    state={{
                      search: `?${searchParams.toString()}`,
                      type: typeFilter,
                    }}
                  >
                    <div className="van-img h-[229.23px] w-[229.23px] overflow-hidden">
                      <img
                        src={van.imageUrl}
                        className="w-full h-full object-cover rounded-lg"
                        alt="van img"
                      />
                    </div>
                    <div className="info">
                      <div className="flex gap-5">
                        <h2 className="font-bold text-xl leading-8">
                          {van.name}
                        </h2>
                        <p className="mt-1">
                          <span className="font-extrabold">${van.price}</span>
                          /day
                        </p>
                      </div>
                      <button type="button" className={btnClass}>
                        {van.type[0].toUpperCase() + van.type.slice(1)}
                      </button>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Vans;
