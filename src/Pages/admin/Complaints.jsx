import React, { useState } from "react";
import Table from "../../Components/Table";

import { Search } from "lucide-react";

function Complaints() {
  const columns = ["Patient", "Subject", "Department", "Date", "Status"];

  const data = [
    {
      patient: "Ram",
      subject: "medicine issue",
      department: "sergery",
      date: "29/07/2025",
      status: "open",
    },
    {
      patient: "Ram",
      subject: "medicine issue",
      department: "radiology",
      date: "29/07/2025",
      status: "closed",
    },
    {
      patient: "Ram",
      subject: "medicine issue",
      department: "sergery",
      date: "29/07/2025",
      status: "inprogress",
    },
    {
      patient: "Ram",
      subject: "medicine issue",
      department: "labrotary",
      date: "29/07/2025",
      status: "open",
    },
    {
      patient: "Ram",
      subject: "medicine issue",
      department: "sergery",
      date: "29/07/2025",
      status: "open",
    },
  ];

  const roles = [
    {
      label: "Total Complaints",
      count: "50",
    },
    {
      label: "Open Complaints",
      count: "10",
    },
    {
      label: "Inprogress",
      count: "5",
    },
    {
      label: "Closed",
      count: "20",
    },
  ];

  const [showcomponent, setshowcomponent] = useState("");

  const filteredItems =
    showcomponent === ""
      ? data
      : data.filter((items) =>
          items.department.toLowerCase().includes(showcomponent.toLowerCase())
        );

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
                placeholder="Search..."
                className="w-full placeholder:text-gray-500 placeholder:text-base outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
              <select
                onChange={(e) => setshowcomponent(e.target.value)}
                name="Types"
                className="w-full  text-gray-700 placeholder:text-base outline-none  pr-6"
              >
                <option value="">All Departments</option>
                <option value="radiology"> Radiology</option>
                <option value="sergery">Sergery</option>
                <option value="labrotary"> Labrotary</option>
                <option value="discharge">Discharge</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#a7caba7a] rounded-xl p-5">
        <Table title="Complaints" columns={columns} data={filteredItems} />
      </div>
    </div>
  );
}

export default Complaints;
