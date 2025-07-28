import React from "react";

import img1 from "../../assets/bed.png";
import img2 from "../../assets/medical-team.png";
import img3 from "../../assets/patient.png";
import img4 from "../../assets/ambulance.png";
import img5 from "../../assets/clock.png";
import Table from "../../Components/Table";

function EmergencyDashboard() {
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
      label: "ICU Bed Availability",
    },
    {
      img: img2,
      label: "ICU Bed Availability",
    },
    {
      img: img3,
      label: "ICU Bed Availability",
    },
    {
      img: img4,
      label: "ICU Bed Availability",
    },
    {
      img: img5,
      label: "ICU Bed Availability",
    },
  ];
  return (
    <div className="p-4 flex flex-col gap-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 gap-10 p-4 sm:p-6 md:p-8 lg:p-8 bg-[#a7caba7a] rounded-xl ">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl flex  flex-col gap-1 "
          >
            <div className="w-16 h-16 bg-[#c1f7ff] rounded-full flex items-center justify-center mx-auto mb-4">
              <img src={role.img} alt={role.label} className="w-10 h-10" />
            </div>

            <h1 className="text-lg font-semibold text-center text-gray-800 mb-3">
              {role.label}
            </h1>

            <div className="flex justify-between  text-sm font-medium px-4">
              <h1 className="bg-gray-300 rounded-full px-3 font-extrabold py-2">
                10
              </h1>
              <h2 className="bg-green-200 rounded-full px-3 font-bold text-green-800 py-2">
                4 occupied
              </h2>
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

export default EmergencyDashboard;
