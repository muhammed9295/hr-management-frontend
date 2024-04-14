import React from 'react'
import { MdNotifications } from "react-icons/md";

function Navbar() {
  return (
    <div className="h-[60px] w-screen bg-white flex justify-between items-center px-8 border">
        <h3 className="text-base font-bold">MDSHK.</h3>
        <div className="text-lg text-black">
        <MdNotifications />
        </div>
    </div>
  )
}

export default Navbar