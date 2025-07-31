import React from "react";
import Table from "../../Components/Table";

function Payments() {
  const roles = [
    {
      label: "Completed Payments",
      count: "10,200",
    },
    {
      label: "Processing Payments",
      count: "200",
    },
    {
      label: "Failed",
      count: "5",
    },
  ];

  const columns = [
    "Transaction",
    "Patients Name",
    "Amount",
    "Method",
    "Status",
    "Date",
  ];

  const data = [
    {
      transaction: "Pay001",
      patientsname: "Ram",
      amount: "500",
      method: "card",
      status: "completed",
      date: "29/07/2025",
    },
    {
      transaction: "Pay001",
      patientsname: "Ram",
      amount: "500",
      method: "cash",
      status: "processing",
      date: "29/07/2025",
    },
    {
      transaction: "Pay001",
      patientsname: "Ram",
      amount: "500",
      method: "card",
      status: "completed",
      date: "29/07/2025",
    },
    {
      transaction: "Pay001",
      patientsname: "Ram",
      amount: "500",
      method: "bank transfer",
      status: "completed",
      date: "29/07/2025",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-8 bg-[#a7caba7a] rounded-xl">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            {/* Top Bar with Icon and Button */}

            <hr className="border-2 border-gray-300" />

            {/* Content */}
            <div className="flex flex-col items-center justify-center px-4 py-6 text-sm font-medium">
              <h1 className="text-lg font-semibold text-center text-gray-800 mb-2">
                {role.label}
              </h1>
              <span className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 text-base font-bold">
                {role.count}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className=" bg-[#a7caba7a] rounded-xl p-5">
          <Table title="Recent Payments" columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Payments;
