import DashCards from "@/components/DashCards";
import DashPieChart from "@/components/DashPieChart";
import DashTable from "@/components/DashTable";
import Statistics from "@/components/Statistics";
import React from "react";

function Dashboard() {
  return (
    <div className="flex gap-5 py-5 px-8">
      <div className="flex-3 flex flex-col gap-5 w-full">
        {/* Your main content goes here */}
        <h2 className="text-[25px] font-semibold">Dashboard</h2>
        <div className="flex gap-8 ">
          <DashCards />
          <DashCards />
          <DashCards />
          <DashCards />
          <DashCards />
        </div>

        {/* Graph Section */}
        <Statistics />
        {/* Graph Section */}

        {/* Table and pie graph content */}
        <div className="flex gap-2">
        <DashTable />
        <DashPieChart />
        </div>
        {/* Table and pie graph content */}
        
      </div>
    </div>
  );
}

export default Dashboard;
