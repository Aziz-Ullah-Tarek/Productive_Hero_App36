import React from "react";
import download from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { Link } from "react-router";
const AppCard = ({ data }) => {
  const {
    title,
    id,
    image,
    downloads,
    ratingAvg,

  } = data;
  return (
    <Link to={`/AppDetails/${id}`} state={data}>
      <div className="bg-white h-full shadow-md rounded-xl flex flex-col justify-between">
        <figure className="w-full mx-auto p-6">
          <img src={image} alt="App Icon" className="rounded-xl mx-auto" />
        </figure>
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex justify-between">
            <p className="btn text-green-700 border-0 rounded-2xl">
              <img src={download} width={"14px"} alt="" /> {downloads}
            </p>
            <p className="btn text-orange-400 border-0 rounded-2xl">
              <img src={ratingImg} width={"14px"} alt="" /> {ratingAvg}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;

