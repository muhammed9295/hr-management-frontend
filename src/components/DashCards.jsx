import React from "react";
import { BiTrendingUp } from "react-icons/bi";


function DashCards({props}) {
  return (
    <div className="cursor-pointer">
     <div className="w-[280px] h-full bg-white rounded-md border flex flex-col gap-2 px-8 py-4">
        <div className="flex justify-between">
          <h3 className="text-[16px] font-bold">Total Employees</h3>
          <span className="bg-[#DEF6DA] rounded-[50px] text-[#0B8A00] px-3 py-[2px] text-[14px] flex items-center gap-1"><BiTrendingUp /> 23%</span>
        </div>
        <h2 className="font-bold text-[28px]">1,124</h2>
        <p className="font-normal text-[14px] text-[#949494]">Active</p>
     </div>
    </div>
  );
}

export default DashCards;
