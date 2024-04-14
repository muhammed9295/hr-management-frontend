import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];

function Statistics() {
  return (
    <div className="bg-white rounded-[6px] p-5 w-full min-h-[360px] flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-[22px] font-bold">Job Statistics</h3>
        <div className="flex w-1/6 justify-center">
          <div className="flex w-full gap-2 items-center justify-center">
            <span className="bg-[#EEEEEE] rounded-sm w-4 h-4"></span>
            <p className="text-[14px] font-bold">Job View</p>
          </div>
          <div className="flex w-full gap-2 items-center justify-center">
            <span className="bg-[#16C098] rounded-sm w-4 h-4"></span>
            <p className="text-[14px] font-bold">Job Applied</p>
          </div>
        </div>
      </div>
      {/* Recharts */}

      <ResponsiveContainer width="100%" height="80%" className="mt-6">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#EEEEEE", border: "6px" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#000000"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#16C098"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Recharts */}
    </div>
  );
}

export default Statistics;
