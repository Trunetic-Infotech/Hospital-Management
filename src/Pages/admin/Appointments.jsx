import React, { useState } from "react";

import Table from "../../Components/Table";

function Appointments() {
  const [selectedrole, setSelectedrole] = useState("ALL");

  const columns = [
    "Patientname",
    "Age",
    "Date",
    "Time",
    "Doctor",
    "Status",
    "Department",
  ];

  

  const data = [
    {
      patientname: "Ram",
      age: "15",
      date: "24/07/2024",
      time: "10:05",
      doctor: "Dr.Aniket",
      status: "upcoming",
      department: "cardiology",
    },
    {
      patientname: "Aniket",
      age: "15",
      date: "24/07/2024",
      time: "8:30",
      doctor: "Dr.Aniket",
      status: "past",
      department: "cardiology",
    },
  ];

  const roles = [{ label: "ALL" }, { label: "UPCOMING" }, { label: "PAST" }];

  const filteredItems =
    selectedrole === "ALL"
      ? data
      : data.filter(
          (items) => items.status?.toLowerCase() === selectedrole.toLowerCase()
        );
        

  return (
    <div className="relative">
      <div className=" p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-4 gap-3 px-2">
          <h1></h1>
          <h1 className="font-bold text-2xl text-center sm:text-left">
            Appointments
          </h1>
        
        </div>

        {/* Role Buttons and Icon */}
        <div className="bg-[#D9D9D9] p-3 rounded-2xl flex flex-wrap items-center justify-center gap-4">
          {roles.map((role, index) => (
            <button
              key={index}
              onClick={() =>{ setSelectedrole(role.label);
                // console.log(filteredItems)
              }}
              className={`px-6 md:px-10 py-2 ${
                selectedrole === role.label
                  ? "bg-[#0F766E] text-white"
                  : "bg-white text-gray-600"
              } rounded-full font-bold whitespace-nowrap`}
            >
              {role.label}
            </button>
          ))}
        </div>
      </div>

      <Table title="Appointments" columns={columns} data={filteredItems} />
    </div>
  );
}

export default Appointments;
