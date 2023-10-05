import { Outlet } from "react-router-dom";
// import Home from "../pages/home/Home";

const Main = () => {
  return (
    <div className="max-w-[1330px] mx-auto font-poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
