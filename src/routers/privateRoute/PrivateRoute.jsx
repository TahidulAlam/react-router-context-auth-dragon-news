/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { Audio } from "react-loader-spinner";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const loaction = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
  if (!user?.email) {
    return <Navigate state={loaction.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
