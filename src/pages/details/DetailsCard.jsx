/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsArrowLeft } from "react-icons/bs";
const DetailsCard = ({ singlenews }) => {
  console.log(singlenews);
  const { title, author, thumbnail_url, details, rating, total_view } =
    singlenews;
  return (
    <div>
      <h1 className="font-bold py-3">Dragon News</h1>
      <div className="w-[100%]">
        <img
          style={{ height: "550px" }}
          width="100%"
          src={thumbnail_url}
          alt=""
        />
        <h1 className="font-bold p-3">{title}</h1>
        <p>{details}</p>
        <button className="flex bg-red-600 p-2 rounded-sm text-white mt-4">
          <BsArrowLeft /> All news in this category
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
