import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 150 },
  { month: "Feb", sales: 180 },
  { month: "Mar", sales: 240 },
  { month: "Apr", sales: 280 },
  { month: "May", sales: 360 },
  { month: "Jul", sales: 450 },
  { month: "Aug", sales: 600 },
];

function MedicinesSold() {
  return (
    <div className="w-full h-full">
      <div className="bg-white p-6 rounded-xl shadow-md w-full h-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Medicines Sold (Monthly)
        </h2>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="sales"
              fill="#3b82f6" // Tailwind's blue-500
              radius={[4, 4, 0, 0]} // Rounded top corners
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MedicinesSold;
