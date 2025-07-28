import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jul", patients: 320 },
  { month: "Aug", patients: 350 },
  { month: "Sep", patients: 340 },
  { month: "Oct", patients: 390 },
  { month: "Nov", patients: 420 },
  { month: "Dec", patients: 450 },
];


function PatientAdmission() {
  return (
    <div className="w-full h-full">
      <div className="bg-white p-5 rounded-xl shadow-md  w-full h-full ">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Patient Admissions
        </h2>
        <p className="text-sm text-gray-500 mb-4">Last 6 months</p>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="patients"
              stroke="#3b82f6" // Tailwind blue-500
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PatientAdmission;
