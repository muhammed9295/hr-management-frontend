import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  
  const location = useLocation();
  const isAuth = isAuthenticated();

  function isAuthenticated() {
    return localStorage.getItem("accessToken")!== null;
  }
  
    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default ProtectedRoute;
