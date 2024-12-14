import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const HostVan = () => {
  const [vans, setVanS] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVanS(data.vans));
  }, []);

  if (vans.length > 0) {
    console.log(vans[0].name);
  }
  return (
    <>
      <div className="mt-8 ms-8">
        <h1 className="font-bold text-3xl leading-8">Your listed vans</h1>
      </div>
      {vans.length > 0 ? (
        <div className="van-container mt-7">
          {vans.map((van) => {
            return (
              <Link to={van.id} key={van.id}>
                <div className="van-card mx-auto w-[494px] h-[102px] my-5 rounded-lg overflow-hidden px-10  bg-white flex">
                  <div className="img-card w-16 h-16 my-auto overflow-hidden">
                    <img
                      src={van.imageUrl}
                      className="h-full w-full object-contain rounded-lg"
                      alt=""
                    />
                  </div>
                  <div className="van-info flex ms-5 my-auto flex-col">
                    <h3 className="font-semibold text-xl leading-8">
                      {van.name}
                    </h3>
                    <p>${van.price}/day</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h1 className="text-center text-2xl py-4">Loading...</h1>
      )}
    </>
  );
};

export default HostVan;
