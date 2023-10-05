/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/shared/header/Navbar";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Registration = () => {
  const { user, createUser } = useAuth();
  const loaction = useLocation();
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validEmail = (email) => {
    return emailRegex.test(email);
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("create user btn worked");
    console.log(name, email, password);
    if (password.length < 6) {
      return toast.error("This didn't work.");
    }
    if (validEmail(email)) {
      console.log("valid mail");
    } else {
      return console.log("not a valid mail");
    }
    createUser(email, password)
      .then(() => Navigate(location?.state ? location?.state : "/registration"))
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
            Sign Up
          </h1>
          <form className="mt-6" onSubmit={handleCreateUser}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="name"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-salte-400 focus:ring-salte-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-salte-400 focus:ring-salte-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-salte-400 focus:ring-salte-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-700 rounded-md hover:bg-salte-600 focus:outline-none focus:bg-salte-600">
                Sign Up{" "}
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already Have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-salte-600 hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
