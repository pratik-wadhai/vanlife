import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
const Photos = () => {
  const { van } = useOutletContext();

  return (
    <div className="p-5">
      <div className="img-card h-28 w-28 overflow-hidden">
        <img
          src={van.imageUrl}
          className="h-full w-full rounded-lg object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Photos;
