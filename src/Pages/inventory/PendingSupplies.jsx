import React from "react";
import { Package, AlertTriangle, XCircle, ClipboardList } from "lucide-react";
import Table from "../../Components/Table";

function PendingSupplies() {
  const columns = ["Item", "Department", "Quantity", "Actions"];
  const columns1 = ["Item", "Order", "Supplier"];

  const data = [
    {
      item: "Catheters",
      department: "Cardiology",
      quantity: "200",
      actions: "ok",
    },
    {
      item: "Sutures",
      department: "ER",
      quantity: "200",
      actions: "Cancel",
    },
    {
      item: "Syringe",
      department: "ICU",
      quantity: "200",
      actions: "ok",
    },
    {
      item: "Syringe",
      department: "ICU",
      quantity: "200",
      actions: "ok",
    },
  ];

  const data1 = [
    {
      item: "Gloves",
      order: "100",
      supplier: "Medico",
    },
    {
      item: "Gloves",
      order: "100",
      supplier: "Medico",
    },
    {
      item: "Gloves",
      order: "100",
      supplier: "Medico",
    },
  ];

  const roles = [
    {
      label: "Total Medical Supplies",
      count: "10",
    },
    {
      label: "Low Stock Alert",
      count: "200",
    },
    {
      label: "Out Of Stock",
      count: "5",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {/* Cards Section */}
      <div className="p-4 flex flex-col gap-8 w-full sm:w-[50%] md:w-[30%] lg:w-[20%]">
        <div className="flex flex-col gap-8 p-4 sm:p-6 md:p-8 bg-[#a7caba7a] rounded-xl">
          <h1 className="px-6 py-2 bg-[#0F766E] rounded-md font-bold text-white">
            Pending Supplies
          </h1>
          {roles.map((role, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center px-4 py-6 text-sm gap-1 font-medium">
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

      {/* Table Section */}
      <div className="flex flex-col p-5 bg-[#a7caba7a] w-full sm:w-[50%] md:w-[70%] lg:w-[80%] rounded-xl gap-5">
        <Table title="Pending Requests" columns={columns} data={data} />
        <Table title="Backordered Items" columns={columns1} data={data1} />
      </div>
    </div>
  );
}

export default PendingSupplies;
