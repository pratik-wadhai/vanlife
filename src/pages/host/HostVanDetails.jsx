import { Link, useParams, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
const HostVanDetails = () => {
  const [van, setVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, []);

  let btnClass =
    "text-[#FFEAD0] focus:ring- font-medium rounded-lg text-sm px-5 py-2.5   focus:outline-none";
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
  const navStyles = {
    textDecoration: "underline",
    fontWeight: "bold",
  };
  return (
    <>
      <div className=" p-5 mt-8 ">
        <p className="flex">
          <FaArrowLeftLong className="me-2 mt-1 " />
          <Link to="/host/vans" className="font-semibold  underline">
            Back to all vans
          </Link>
        </p>
      </div>

      {van && (
        <div className="vanContainer">
          <div className="van-card mx-auto flex flex-col w-[496px] h-[499px] overflow-hidden bg-white">
            <div className="van-info flex p-4 ">
              <div className="img-card w-[160px] h-[157.9px] overflow-hidden">
                <img
                  src={van.imageUrl}
                  className="h-full w-full object-contain rounded-lg"
                  alt=""
                />
              </div>
              <div className="me-2 mb-2 mt-5 ms-8 ">
                <button type="button" className={btnClass}>
                  {van.type[0].toUpperCase() + van.type.slice(1)}
                </button>
                <h2 className="font-bold text-2xl leading-7 mt-3">
                  {van.name}
                </h2>
                <p className="mt-2">
                  <span className="font-bold text-xl">${van.price}</span>
                  <span className="font-medium text-lg">/day</span>
                </p>
              </div>
            </div>
            <div className="van-links p-4">
              <ul className="flex gap-6">
                <li>
                  <NavLink
                    style={({ isActive }) => (isActive ? navStyles : null)}
                    className={"hover:underline"}
                    end
                    to={`/host/vans/${params.id}`}
                  >
                    Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => (isActive ? navStyles : null)}
                    className={"hover:underline"}
                    to={`/host/vans/${params.id}/pricing`}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => (isActive ? navStyles : null)}
                    className={"hover:underline"}
                    to={`/host/vans/${params.id}/photos`}
                  >
                    Photos
                  </NavLink>
                </li>
              </ul>
            </div>
            <Outlet context={{ van }} />
          </div>
        </div>
      )}
    </>
  );
};

export default HostVanDetails;
