import React from "react";
import { Package, AlertTriangle, XCircle, ClipboardList } from "lucide-react";
import Table from "../../Components/Table";

function MedicalSupplies() {
  const columns = ["Item", "Category", "Quantity", "Status"];

  const data = [
    {
      item: "Gloves",
      category: "Syringes",
      quantity: "200",
      status: "ok",
    },
    {
      item: "Masks",
      category: "PPE",
      quantity: "200",
      status: "Low",
    },
    {
      item: "Gloves",
      category: "Syringes",
      quantity: "200",
      status: "Out Of Stock",
    },
    {
      item: "Gloves",
      category: "Syringes",
      quantity: "200",
      status: "ok",
    },
  ];

  const roles = [
    {
      icon: Package, // 📦 Total items
      label: "Total Medical Supplies",
      count: "10",
    },
    {
      icon: AlertTriangle, // ⚠️ Low stock warning
      label: "Low Stock Alert",
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

  return (
    <div>
      {" "}
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
      {/* Table */}
        <div className="p-5 bg-[#a7caba7a]">
      <Table title="Ambulance Tracking" columns={columns} data={data} />
    </div>
    </div>
  );
}

export default MedicalSupplies;
