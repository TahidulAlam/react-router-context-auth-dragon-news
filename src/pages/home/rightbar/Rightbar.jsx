import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import rtImg1 from "../../../assets/qZone1.png";
import rtImg2 from "../../../assets/qZone2.png";
import rtImg3 from "../../../assets/qZone3.png";
import bgImg from "../../../assets/bg.png";
import SocialAuth from "../../../components/SocialAuth";
import useAuth from "../../../hooks/useAuth";

const Rightbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <div className="max-w-[1330px] mx-auto">
        {user?.email ? (
          <div className="p-5 bg-slate-200 rounded-md mt-10">
            {user?.displayName} <hr />
            {user?.email} <hr /> <hr />
            <button
              onClick={logOut}
              className="bg-slate-900 p-2 px-8 text-white rounded-sm"
            >
              Log out
            </button>
          </div>
        ) : (
          <div>
            <h1 className="font-poppins font-bold py-3">Login with</h1>
            <SocialAuth></SocialAuth>
          </div>
        )}

        <div className="mt-5">
          <h1 className="font-poppins font-bold py-3">Finds us on</h1>
          <div className="border p-7 flex items-center gap-3 font-normal text-xl">
            <AiFillFacebook className="text-2xl" /> <h1>Facebook</h1>
          </div>
          <div className="border p-7 flex items-center gap-3 font-normal text-xl">
            <AiFillTwitterCircle className="text-2xl" /> <h1>Twitter</h1>
          </div>
          <div className="border p-7 flex items-center gap-3 font-normal text-xl">
            <AiFillInstagram className="text-2xl" /> <h1>Instagram</h1>
          </div>
        </div>
        <div className="mt-5 bg-slate-100 ">
          <h1 className="font-medium font-poppins p-5">Q-Zone</h1>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src={rtImg1} alt="" />
            </div>
            <div>
              <img src={rtImg2} alt="" />
            </div>
            <div>
              <img src={rtImg3} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="relative mt-5 ">
            <img src={bgImg} alt="" width="320px" />
            <div className="absolute top-0 content-center w-full p-5 flex flex-col items-center justify-center">
              <h1 className="font-bold text-white text-4xl text-center pt-16">
                Create an <br /> Amazing <br /> Newspaper
              </h1>
              <p className="text-white text-center pt-5">
                Discover thousands of <br /> options, easy to <br /> customize
                layouts, one- <br /> click to import demo <br /> and much more.
              </p>
              <button className="btn btn-error text-center mt-5">
                learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
