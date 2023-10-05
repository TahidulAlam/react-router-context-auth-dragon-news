import Header from "../../components/shared/header/Header";
import Centerbar from "./centerbar/Centerbar";
import Leftbar from "./leftbar/Leftbar";
import Rightbar from "./rightbar/Rightbar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-4 mt-3">
        <div className="">
          <Leftbar></Leftbar>
        </div>
        <div className="col-span-2 ">
          <Centerbar></Centerbar>
        </div>
        <div className="">
          <Rightbar></Rightbar>
        </div>
      </div>
    </div>
  );
};

export default Home;
