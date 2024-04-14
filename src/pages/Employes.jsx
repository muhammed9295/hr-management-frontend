import AllEmployees from "@/components/AllEmployees";
import React from "react";

const Employes = () => {
  return (
    <div className="flex gap-5 py-5 px-8">
      <div className="flex-3 flex flex-col gap-5 w-full">
        {/* Your main content goes here */}
        <h2 className="text-[25px] font-semibold">All Employees</h2>

        {/* All Employees Section */}
        <AllEmployees />
        {/* All Employees Section */}
      </div>
    </div>
  );
};

export default Employes;
