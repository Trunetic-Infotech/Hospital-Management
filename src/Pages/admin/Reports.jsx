import React, { useState } from "react";
import Table from "../../Components/Table";

import { Search } from "lucide-react";

function Invoicess() {
  // const [showcomponent, selectshowcomponent] = useState("");

  const columns = [
    "Patient",
    "Doctor",
    "Department",
    "Submitted Date",
    "Due Date",
    "Types",
    "priority",
    "Status",
    "Actions",
  ];

  const data = [
    {
      patient: "Ram",
      doctor: "DR.Aniket",
      department: "completed",
      submitteddate: "29/07/2025",
      duedate: "29/07/2025",
      types: "radiology",
      priority: "high priority",
      status: "require",
      actions: "download,edit,eyeicon",
    },
    {
      patient: "Ram",
      doctor: "DR.Aniket",
      department: "completed",
      submitteddate: "29/07/2025",
      duedate: "29/07/2025",
      types: "sergery",
      priority: "low priority",
      status: "inprogress",
      actions: "download,edit,eyeicon",
    },
    {
      patient: "Ram",
      doctor: "DR.Aniket",
      department: "completed",
      submitteddate: "29/07/2025",
      duedate: "29/07/2025",
      types: "radiology",
      priority: "medium priority",
      status: "pending",
      actions: "download,edit,eyeicon",
    },
    {
      patient: "Ram",
      doctor: "DR.Aniket",
      department: "completed",
      submitteddate: "29/07/2025",
      duedate: "29/07/2025",
      types: "radiology",
      priority: "high priority",
      status: "overdue",
      actions: "download,edit,eyeicon",
    },
    {
      patient: "Ram",
      doctor: "DR.Aniket",
      department: "completed",
      submitteddate: "29/07/2025",
      duedate: "29/07/2025",
      types: "radiology",
      priority: "high priority",
      status: "require",
      actions: "download,edit,eyeicon",
    },
  ];

  const roles = [
    {
      label: "Overdue Reports",
      count: "1",
    },
    {
      label: "High Priority",
      count: "5",
    },
    {
      label: "Pending Reviews",
      count: "5",
    },
    {
      label: "Total Reports",
      count: "20",
    },
  ];

  const [filteredItems, setFilteredItems] = useState(data); // Initial full list

  const filterdata = (filterType, value) => {
    if (value === "") {
      setFilteredItems(data); // Reset to full data
    } else {
      const filtered = data.filter((item) =>
        item[filterType]?.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered); // Update table
    }
  };

  return (
    <div className="flex flex-col gap-5 p-4">
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

      <div className=" bg-[#a7caba7a] rounded-xl p-6">
        <h1 className="font-bold text-lg mb-4">Filter Rooms</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          <div className="relative w-full">
            <div className="flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <Search className="absolute left-3 w-6 h-6" />
              <input
                type="text"
                name="Search"
                placeholder="Search Rooms..."
                className="w-full placeholder:text-gray-500 placeholder:text-base outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <select
                onChange={(e) => filterdata("types", e.target.value)}
                name="Types"
                className="w-full  text-gray-700 placeholder:text-base outline-none  pr-6"
              >
                <option value="">All Types</option>
                <option value="radiology"> Radiology</option>
                <option value="sergery">Sergery</option>
                <option value="labrotary"> Labrotary</option>
                <option value="discharge">Discharge</option>
              </select>
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <select
                onChange={(e) => filterdata("priority", e.target.value)}
                name="priority"
                className="w-full bg-transparent text-gray-700 placeholder:text-base outline-none  pr-6"
              >
                <option value="">All Priorities</option>
                <option value="low priority">Low Priority</option>
                <option value="high priority">High Priority</option>
                <option value="medium priority">Medium Priority</option>
              </select>
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <select
                onChange={(e) => filterdata("status", e.target.value)}
                name="status"
                className="w-full bg-transparent text-gray-700 placeholder:text-base outline-none  pr-6"
              >
                <option value="">All status</option>
                <option value="pending">Pending</option>
                <option value="inprogress">In Progress</option>
                <option value="require">Requires Approval</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#a7caba7a] rounded-xl p-5">
        <Table title="Reports" columns={columns} data={filteredItems} />
      </div>
    </div>
  );
}

export default Invoicess;
