import React from "react";

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Available", value: 35 },
  { name: "Occupied", value: 65 },
];

const COLORS = ["#22c55e", "#ef4444"];

function BedAvailability() {
  return (
    <div className="w-full h-full">
      <div className="bg-white p-6 rounded-xl shadow-md  w-full h-full ">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Bed Availability
        </h2>
        <p className="text-sm text-gray-500 mb-4">Current status (%)</p>

        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              verticalAlign="bottom"
              iconType="circle"
              formatter={(value) => (
                <span className="text-sm text-gray-700">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BedAvailability;
