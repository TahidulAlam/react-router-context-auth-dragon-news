/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/src/assets/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="font-poppins font-bold py-3">All Caterogy</h1>
      {categories?.map((category) => (
        <Link
          className="block ml-4 text-xl font-semibold mb-4 text-slate-400"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Leftbar;
