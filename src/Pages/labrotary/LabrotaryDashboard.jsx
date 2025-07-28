import React from "react";

import img1 from "../../assets/bed.png";
import img2 from "../../assets/medical-team.png";
import img3 from "../../assets/patient.png";
import img4 from "../../assets/ambulance.png";
import img5 from "../../assets/clock.png";
import Table from "../../Components/Table";

function LabrotaryDashboard() {
  const columns = ["Case ID", "Patient Name", "Type", "Time", "Date", "Status"];

  const data = [
    {
      caseid: "1234",
      patientname: "Ram",
      type: "Accident",
      time: "10:45",
      date: "09/07/2025",
      status: "critical",
    },
    {
      caseid: "1234",
      patientname: "Ram",
      type: "cardiac",
      time: "10:45",
      date: "09/07/2025",
      status: "emergency",
    },
    {
      caseid: "1234",
      patientname: "Ram",
      type: "Accident",
      time: "10:45",
      date: "09/07/2025",
      status: "stable",
    },
    {
      caseid: "1234",
      patientname: "Ram",
      type: "Accident",
      time: "10:45",
      date: "09/07/2025",
      status: "stable",
    },
  ];

  const roles = [
    {
      img: img1,
      label: "Pending Tests",
      count: "10",
    },
    {
      img: img2,
      label: "Completed Reports",
      count: "200",
    },
    {
      img: img3,
      label: "Samples",
      count: "5",
    },
    {
      img: img4,
      label: "Today Apooinments",
      count: "10",
    },
  ];
  return (
    <div className="p-4 flex flex-col gap-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-8 bg-[#a7caba7a] rounded-xl">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            {/* Top Bar with Icon and Button */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
              <img src={role.img} alt="icon" className="w-7 h-7" />
              <button className="bg-[#0F766E] text-white text-sm px-3 py-1 rounded-tr-xl hover:bg-[#0c5c54] transition-colors duration-300">
                View Details
              </button>
            </div>

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

      <div className="bg-[#a7caba7a] p-5 rounded-xl">
        <Table
          title="Emergency And ICU Dashboard"
          columns={columns}
          data={data}
        />
      </div>
    </div>
  );
}

export default LabrotaryDashboard;
