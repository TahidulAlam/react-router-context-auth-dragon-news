import { Link, NavLink } from "react-router-dom";
// import imglog from "../../../assets/user.png";
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/career"}>Career</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/career"}>Career</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          {user?.email ? (
            ""
          ) : (
            <Link
              to={"/login"}
              className="bg-slate-900 p-2 px-8 text-white rounded-sm"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
