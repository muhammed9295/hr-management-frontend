import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const Layout = () => {

  // Redirecting to login page
    const isAuthenticated = () => {
      return localStorage.getItem("accessToken") !== null
    }

    const navigate = useNavigate();

    useEffect(() => {
      if (isAuthenticated){
        navigate("/dashboard")
      }else {
        navigate("/login")
      }
    }, [navigate]);
  // Redirecting to login page
  
  // Showing navbar and sidebar
    const location = useLocation();
    const excludedPaths = ['/login', '/registration'];
    const shouldShowNavbarAndSidebar = !excludedPaths.includes(location.pathname);
    // Showing navbar and sidebar

  return (
    <div className="flex flex-col h-full">
      {shouldShowNavbarAndSidebar && <Navbar />}
      <div className={`flex h-[calc(100%-60px)] ${shouldShowNavbarAndSidebar ? '' : 'flex-col'}`}>
      {shouldShowNavbarAndSidebar && <Sidebar />}
        <div className="flex-1 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
