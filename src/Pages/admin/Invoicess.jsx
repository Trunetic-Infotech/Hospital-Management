import React from "react";
import Table from "../../Components/Table";

function Invoicess() {
  const columns = [
    "Invoice",
    "Patient",
    "Amount",
    "Status",
    "Due Date",
    "Actions",
  ];

  const data = [
    {
      invoice: "INV-2025-001",
      patient: "Ram",
      amount: "500",
      status: "completed",
      duedate: "29/07/2025",
      actions: "download,edit,eyeicon",
    },
    {
      invoice: "INV-2025-001",
      patient: "Ram",
      amount: "500",
      status: "completed",
      duedate: "29/07/2025",
      actions: "download,edit,eyeicon",
    },
    {
      invoice: "INV-2025-001",
      patient: "Ram",
      amount: "500",
      status: "completed",
      duedate: "29/07/2025",
      actions: "download,edit,eyeicon",
    },
    {
      invoice: "INV-2025-001",
      patient: "Ram",
      amount: "500",
      status: "completed",
      duedate: "29/07/2025",
      actions: "download,edit,eyeicon",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className=" bg-[#a7caba7a] rounded-xl p-5">
        <Table title="All invoicess" columns={columns} data={data} />
      </div>
    </div>
  );
}

export default Invoicess;
