/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/shared/header/Navbar";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { user, loginUser } = useAuth();
  const location = useLocation();
  const handleLogInUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("create user btn worked");
    console.log(name, email, password);
    if (password.length < 6) {
      return toast.error("This didn't work.");
    }
    loginUser(email, password)
      .then(() => Navigate(location?.state ? location?.state : "/login"))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-[1330px] mx-auto font-poppins bg-[#F3F3F3]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div
        className="relative flex flex-col justify-center min-h-screen
      overflow-hidden"
      >
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-slate-700 underline">
            Sign in
          </h1>
          <form className="mt-6" onSubmit={handleLogInUser}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="#" className="text-xs text-slate-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-700 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-slate-600">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link
              to={"/registration"}
              className="font-medium text-slate-600 hover:underline"
            >
              Sign up{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
