import React from "react";

import { GoHome } from "react-icons/go";
import { LuUsers2, LuUserPlus2 } from "react-icons/lu";
import { BiBuildings, BiCoinStack } from "react-icons/bi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate(); //redirect to login

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        {},
        { withCredentials: true }
      );

      // if (response.data.statusCode === 200) {
      //   toast.success("Logout success");
      //   localStorage.removeItem("accessToken");
      //   localStorage.removeItem("refreshToken");
      //   navigate("/login");
      // } else {
      //   toast.error("Logout failed. Please try again.");
      // }
      console.log(response.data);

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    } catch (error) {
      console.log("Failed to log out");
      toast.error("An error occurred during logout. Please try again.");
    }
  };

  return (
    <div className="p-4 sticky top-[40] border-e-[#E8E8E8] bg-white h-dvh">
      <div className="flex items-center gap-5 mb-5">
        <img
          src="/noavatar.png"
          alt=""
          className="rounded-full w-[50px] bg-cover"
        />
        <div className="flex flex-col">
          <span className="font-bold text-lg">Muhammed Sheikh</span>
          <span className="text-sm font-normal">Project Manager</span>
        </div>
      </div>

      <ul className="list-none mt-3">
        {/* {links.map((link) => (
          <li key={link.title}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `flex gap-3 items-center my-3 ${
                  isActive ? "bg-black text-white font-bold" : "text-black"
                } hover:bg-black hover:text-white hover:cursor-pointer py-4 pl-2 rounded-[10px]`
              }
            >
              <span className="text-[28px]">{link.icon}</span>
              <span className="text-[18px] font-normal">{link.title}</span>
            </NavLink>
          </li>
        ))} */}
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex gap-3 items-center my-3 ${
                isActive ? "bg-black text-white font-bold" : "text-black"
              } hover:bg-black hover:text-white hover:cursor-pointer py-4 pl-2 rounded-[10px]`
            }
          >
            <span className="text-[28px]">
              <GoHome />
            </span>
            <span className="text-[18px] font-normal">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/employes"
            className={({ isActive }) =>
              `flex gap-3 items-center my-3 ${
                isActive ? "bg-black text-white font-bold" : "text-black"
              } hover:bg-black hover:text-white hover:cursor-pointer py-4 pl-2 rounded-[10px]`
            }
          >
            <span className="text-[28px]">
              <LuUsers2 />
            </span>
            <span className="text-[18px] font-normal">Employees</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-employee"
            className={({ isActive }) =>
              `flex gap-3 items-center my-3 ${
                isActive ? "bg-black text-white font-bold" : "text-black"
              } hover:bg-black hover:text-white hover:cursor-pointer py-4 pl-2 rounded-[10px]`
            }
          >
            <span className="text-[28px]">
              <LuUserPlus2 />
            </span>
            <span className="text-[18px] font-normal">Add Employee</span>
          </NavLink>
        </li>
        <li>
          <Link
            to="#"
            className="flex gap-3 items-center my-3 hover:bg-black hover:text-white hover:cursor-pointer py-4 pl-2 rounded-[10px]"
          >
            <span className="text-[28px]">
              <BiBuildings />
            </span>
            <span className="text-[18px] font-normal">Company</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex gap-3 items-center my-3 hover:bg-black hover:text-white hover:cursor-pointer py-4 pl-2 rounded-[10px]"
          >
            <span className="text-[28px]">
              <HiOutlinePencilAlt />
            </span>
            <span className="text-[18px] font-normal">Recruitment</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex gap-3 items-center my-3 hover:bg-black hover:text-white hover:cursor-pointer py-4 pl-2 rounded-[10px]"
          >
            <span className="text-[28px]">
              <BiCoinStack />
            </span>
            <span className="text-[18px] font-normal">Finance</span>
          </Link>
        </li>
      </ul>

      <Button
        onClick={handleLogout}
        className="p-5 w-full my-2 text-white text-md bg-black"
      >
        Logout
      </Button>
      <Toaster />
    </div>
  );
};

export default Sidebar;
