import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
const Details = () => {
  const { van } = useOutletContext();
  return (
    <div className="van-details flex flex-col gap-4 p-4 text-sm leading-5">
      <p>
        <span className="font-bold">Name: </span>
        {van.name}
      </p>
      <p>
        <span className="font-bold">Category: </span>
        {van.type[0].toUpperCase() + van.type.slice(1)}
      </p>
      <p>
        <span className="font-bold">Description: </span>
        {van.description}
      </p>
      <p>
        <span className="font-bold">Visibility: </span>
        Public
      </p>
    </div>
  );
};

export default Details;
