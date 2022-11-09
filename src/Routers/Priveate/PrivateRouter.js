import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const PrivateRouter = ({ children }) => {
  const { user, loder } = useContext(AuthContext);
  const location = useLocation();
  if (loder) {
    return <h1>Loding .....</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
