import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Sales',
      uv: 4000,
      pv: 2400,
      amt: 2400,
      color: "#000000",
    },
    {
      name: 'Projects',
      uv: 3000,
      pv: 1398,
      amt: 2210,
      color: "#0088FE",
    },
    {
      name: 'Operations',
      uv: 2000,
      pv: 9800,
      amt: 2290,
      color: "#00C49F",
    },
    {
      name: 'HR',
      uv: 2780,
      pv: 3908,
      amt: 2000,
      color: "#FFBB28",
    },
    {
      name: 'Others',
      uv: 1890,
      pv: 4800,
      amt: 2181,
      color: "#FF8042",
    },
    
  ];

  const COLORS = ['#000000', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function DashPieChart() {
  return (
    <div className="bg-white rounded-[6px] p-5 w-2/5 flex flex-col">
       <h3 className="text-[20px] font-bold">Employee Composition</h3>
       {/* Pie Chart */}
       
       <ResponsiveContainer width="100%" height="100%" className="pt-4" >
        <BarChart width={150} height={40} data={data}>
        <Tooltip
            
          />
          <XAxis dataKey="name" />
          <Bar dataKey="uv" fill="#000000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashPieChart;
