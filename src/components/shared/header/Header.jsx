import moment from "moment/moment";
import logo from "../../../assets/logo.png";
import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";
const Header = () => {
  const date = moment().format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="" className="mt-3" />
        <h1 className="font-poppins p-3">Journalism Without Fear or Favour</h1>
        <h1 className="p-2">{date}</h1>
        <div className="flex">
          <button className="btn btn-warning">Latest</button>
          <Marquee play={true} pauseOnHover={true}>
            <h1>
              I can be a React component, multiple React components, or just
              some text.
            </h1>
          </Marquee>
        </div>
        <div className="w-[1330px] mx-auto">
          <Navbar></Navbar>
        </div>
      </div>
    </div>
  );
};
export default Header;
