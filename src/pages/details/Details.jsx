/* eslint-disable react/prop-types */
// import Centerbar from "../home/centerbar/Centerbar";
import { useLoaderData, useParams } from "react-router-dom";
import Rightbar from "../home/rightbar/Rightbar";
import { useState } from "react";
import { useEffect } from "react";
import DetailsCard from "./DetailsCard";

const Details = () => {
  const [singlenews, setSinglenews] = useState({});
  const paramsId = useParams();
  console.log(paramsId);
  const allNewsdata = useLoaderData();
  useEffect(() => {
    const singlenewsdata = allNewsdata?.find((sn) => sn._id === paramsId._id);
    setSinglenews(singlenewsdata);
  }, [paramsId, allNewsdata]);
  return (
    <div>
      <div className="max-w-[1330px] mx-auto font-poppins">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3">
            <DetailsCard singlenews={singlenews}></DetailsCard>
          </div>
          <div className="col-span-1">
            <Rightbar></Rightbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
