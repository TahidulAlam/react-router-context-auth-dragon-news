/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsBookmark } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
const Newscard = ({ data }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    _id,
    category_id,
  } = data;
  const starSet = {
    size: 30,
    value: rating.number,
    edit: false,
    color: "gray",
    activeColor: "orange",
  };
  return (
    <div>
      <div className="border p-2">
        <div className="flex justify-between items-center bg-slate-100 p-3">
          <div className="flex gap-1 ">
            <div className="avatar ">
              <div className="w-12 rounded-full">
                <img src={author.img} alt="" />
              </div>
            </div>
            <div>
              <h1>{author.name}</h1>
              <h1>{author.published_date}</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <BsBookmark></BsBookmark>
            <FiShare2></FiShare2>
          </div>
        </div>
        <div>
          <h1 className="font-bold p-3">{title}</h1>
          <div className="w-[100%]">
            <img
              style={{ height: "350px" }}
              width="100%"
              src={thumbnail_url}
              alt=""
            />
          </div>
          <div>
            <p className="p-2">{details.slice(0, 250)}...</p>
            <Link to={`/details/${_id}`} className="text-red-600 mb-2">
              Read More
            </Link>
          </div>
          <hr />
          <div className="flex justify-between items-center p-5">
            <ReactStars {...starSet} />
            <div className="flex items-center gap-2">
              <AiOutlineEye className="text-lg"></AiOutlineEye> {total_view}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
