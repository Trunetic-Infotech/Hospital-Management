import React from "react";

import img1 from "../../assets/bed.png";
import img2 from "../../assets/medical-team.png";
import img3 from "../../assets/patient.png";
import img4 from "../../assets/ambulance.png";
import img5 from "../../assets/clock.png";
import Table from "../../Components/Table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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

  const data1 = [
    { month: "Jan", Open: 100, InProgress: 250, Validation: 400 },
    { month: "Feb", Open: 120, InProgress: 300, Validation: 450 },
    { month: "Mar", Open: 180, InProgress: 280, Validation: 320 },
    { month: "Apr", Open: 220, InProgress: 270, Validation: 350 },
    { month: "May", Open: 300, InProgress: 310, Validation: 430 },
    { month: "Jun", Open: 210, InProgress: 240, Validation: 260 },
    { month: "Jul", Open: 190, InProgress: 220, Validation: 250 },
    { month: "Aug", Open: 140, InProgress: 190, Validation: 230 },
    { month: "Sep", Open: 200, InProgress: 280, Validation: 310 },
    { month: "Oct", Open: 230, InProgress: 300, Validation: 340 },
    { month: "Nov", Open: 260, InProgress: 320, Validation: 460 },
    { month: "Dec", Open: 280, InProgress: 340, Validation: 400 },
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
    <div className="p-4 flex flex-col gap-8">
      {/* Top Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-8 bg-[#a7caba7a] rounded-xl">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
              <img src={role.img} alt="icon" className="w-7 h-7" />
              <button className="bg-[#0F766E] text-white text-sm px-3 py-1 rounded-tr-xl hover:bg-[#0c5c54] transition-colors duration-300">
                View Details
              </button>
            </div>

            <hr className="border-2 border-gray-300" />

            {/* Card Content */}
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

      {/* Charts & Table Section */}
      <div className="flex flex-col xl:flex-row gap-6 bg-[#a7caba7a] rounded-xl w-full p-4">
        {/* Bar Chart */}
        <div className="w-full xl:w-1/2">
          <div className="w-full h-[300px] md:h-[400px] bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Orders with status</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data1}
                margin={{ top: 10, right: 20, left: 0, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  label={{
                    value: "Months of the year",
                    position: "bottom",
                    offset: 10,
                  }}
                />
                <YAxis
                  label={{
                    value: "No. of orders",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
                <Bar dataKey="Open" fill="#facc15" name="Open" />
                <Bar dataKey="InProgress" fill="#0ea5e9" name="In progress" />
                <Bar
                  dataKey="Validation"
                  fill="#14b8a6"
                  name="Ready for validation"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Table */}
        <div className="w-full xl:w-1/2">
          <div className="w-full bg-white p-6 rounded-xl shadow-md h-full">
            <Table
              title="Emergency And ICU Dashboard"
              columns={columns}
              data={data}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default LabrotaryDashboard;
