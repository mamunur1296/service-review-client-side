import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const PrivateRouter = ({ children }) => {
  const { user, loder } = useContext(AuthContext);
  const location = useLocation();
  if (loder) {
    return (
      <div className="w-16 h-16 mx-auto   border-4 border-dashed rounded-full animate-spin border-green-500"></div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
