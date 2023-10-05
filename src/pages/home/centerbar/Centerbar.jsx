// import { useEffect, useState } from "react";
import Newscard from "./Newscard";
import { useLoaderData } from "react-router-dom";

const Centerbar = () => {
  const newsdata = useLoaderData();
  console.log(newsdata);
  return (
    <div>
      <h1 className="font-poppins font-bold py-3">Dragon News Home</h1>
      <div className="grid grid-cols-1 gap-5">
        {newsdata.map((anews) => (
          <Newscard key={anews._id} data={anews}></Newscard>
        ))}
      </div>
    </div>
  );
};

export default Centerbar;
