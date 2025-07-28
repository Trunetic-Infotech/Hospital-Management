import React, { useState } from "react";

import Table from "../../Components/Table";

function Patients() {
  const [selectedrole, setSelectedrole] = useState("ALL");

  const columns = [
    "Patient Name",
    "Age",
    "Room No",
    "Bed No",
    "Status",
    "Doctor",
  ];

  const data = [
    {
      patientname: "Ram",
      age: 22,
      roomno: "05",
      bedno: "20",
      status: "admitted",
      // condition: (
      //   <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
      //     Critical
      //   </span>
      // ),
      doctor: "Dr. Aniket",
    },

    {
      patientname: "Aniket",
      age: 22,
      roomno: "05",
      bedno: "20",
      status: "discharged",
      // condition: (
      //   <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-semibold">
      //     Recovering
      //   </span>
      // ),
      doctor: "Dr. Aniket",
    },
   
  ];

  const roles = [
    { label: "ALL" },
    { label: "ADMITTED" },
    { label: "DISCHARGED" },
    { label: "OPD" },
  ];

  // const filteredItems = roles.filter((item) =>
  //   item.status.toLowerCase().includes(selectedrole.toLowerCase())
  // );

  const filteredItems =
    selectedrole === "ALL"
      ? data
      : data.filter(
          (item) => item.status?.toLowerCase() === selectedrole.toLowerCase()
        );

  // console.log(filteredItems);

  return (
    <div className="relative">
      <div className=" p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-4 gap-3 px-2">
     
          <h1 className="font-bold text-2xl  sm:text-left">
            Patients
          </h1>
      
        </div>

        {/* Role Buttons and Icon */}
        <div className="bg-[#D9D9D9] p-3 rounded-2xl flex flex-wrap items-center justify-center gap-4">
          {roles.map((role, index) => (
            <button
              key={index}
              onClick={() => setSelectedrole(role.label)}
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

      <Table title="Patients" columns={columns} data={filteredItems} />
    </div>
  );
}

export default Patients;
