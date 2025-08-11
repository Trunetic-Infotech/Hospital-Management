import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Package, AlertTriangle, XCircle, ClipboardList } from "lucide-react";

function InventoryDashboard() {
  const data1 = [
    { month: "Jan", Consumption: 420000, Procurement: 390000, Wastage: 15000 },
    { month: "Feb", Consumption: 440000, Procurement: 420000, Wastage: 18000 },
    { month: "Mar", Consumption: 495000, Procurement: 460000, Wastage: 12000 },
    { month: "Apr", Consumption: 520000, Procurement: 520000, Wastage: 20000 },
    { month: "May", Consumption: 480000, Procurement: 480000, Wastage: 16000 },
    { month: "Jun", Consumption: 530000, Procurement: 510000, Wastage: 14000 },
  ];

  const roles = [
    {
      icon: Package, // 📦 Total items
      label: "Total Items",
      count: "10",
    },
    {
      icon: AlertTriangle, // ⚠️ Low stock warning
      label: "Low Stock Items",
      count: "200",
    },
    {
      icon: XCircle, // ❌ Out of stock
      label: "Out Of Stock",
      count: "5",
    },
    {
      icon: ClipboardList, // 📋 Pending orders
      label: "Pending Order",
      count: "10",
    },
  ];

  const alerts = [
    {
      type: "Out of Stock",
      description: "Antibiotics - Amoxicillin 500mg",
      color: "bg-red-50 border-red-300 text-red-600",
      iconColor: "text-red-500",
    },
    {
      type: "Low Stock",
      description: "Disposable Syringes 10ml",
      color: "bg-yellow-50 border-yellow-300 text-yellow-700",
      iconColor: "text-yellow-500",
    },
    {
      type: "Low Stock",
      description: "Surgical Gloves (Latex)",
      color: "bg-yellow-50 border-yellow-300 text-yellow-700",
      iconColor: "text-yellow-500",
    },
  ];

  return (
    <div className="p-4 flex flex-col gap-8">
      {/* Top Cards Section */}
      <div className="p-4 flex flex-col gap-8">
        {/* Top Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-8 bg-[#a7caba7a] rounded-xl">
          {roles.map((role, index) => {
            const IconComponent = role.icon; // ✅ store the icon component
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                {/* Card Content */}
                <div className="flex flex-col items-center justify-center px-4 py-6 text-sm gap-2 font-medium">
                  <IconComponent className="w-10 h-10 text-blue-600" />{" "}
                  {/* ✅ render */}
                  <h1 className="text-lg font-semibold text-center text-gray-800 mb-2">
                    {role.label}
                  </h1>
                  <span className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 text-base font-bold">
                    {role.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Charts & Table Section */}
      <div className="flex flex-col xl:flex-row gap-6 bg-[#a7caba7a] rounded-xl w-full p-4">
        {/* Bar Chart */}
        <div className="flex-1">
          <div className="w-full h-[300px] md:h-[400px] bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Orders with status</h2>
            <ResponsiveContainer width="100%"  height={350}>
              <BarChart
                data={data1}
                margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
                barGap={8}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  formatter={(value) => `$${(value / 1000).toFixed(1)}k`}
                />
                <Legend />
                <Bar dataKey="Consumption" fill="#3b82f6" name="Consumption" />
                <Bar dataKey="Procurement" fill="#22c55e" name="Procurement" />
                <Bar dataKey="Wastage" fill="#ef4444" name="Wastage" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 xl:max-w-sm">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Critical Alerts</h2>
            <div className="flex flex-col gap-3">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-4 border rounded-lg ${alert.color}`}
                >
                  <AlertTriangle
                    className={`w-5 h-5 mt-1 ${alert.iconColor}`}
                  />
                  <div>
                    <p className="font-semibold">{alert.type}</p>
                    <p className="text-sm">{alert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryDashboard;
