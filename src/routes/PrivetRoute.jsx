import React from "react";
import { useContext } from "react";
import { MyContext } from "../AuthProvidor/AuthProvidor";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(MyContext);
  if (loading) {
    return (
      <div className="radial-progress text-primary" style={{ "--value": 70 }}>
        70%
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/form/login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivetRoute;
