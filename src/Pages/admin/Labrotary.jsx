import React from "react";
import totalrooms from "../../assets/totalrooms.png";
import Table from "../../Components/Table";

function Labrotary() {
  const columns = ["testname", "patientid", "date", "status"];

  const data = [
    {
      testname: "Blood Test",
      patientid: "1234",
      date: "25/07/2025",
      status: "completed",
    },
    {
      testname: "X-Ray",
      patientid: "5678",
      date: "25/07/2025",
      status: "pending",
    },
    {
      testname: "MRI-SCAN",
      patientid: "1234",
      date: "25/07/2025",
      status: "canceld", color:"red" ,
    },
    {
      testname: "Blood Test",
      patientid: "1234",
      date: "25/07/2025",
      status: "completed",
    },
  ];

  return (
    <div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              label: "Tests",
              value: 35,
              color: "bg-blue-100",
              text: "text-blue-700",
            },
            {
              label: "Completed",
              value: 28,
              color: "bg-green-100",
              text: "text-green-700",
            },
            {
              label: "Pending",
              value: 5,
              color: "bg-yellow-100",
              text: "text-yellow-700",
            },
            {
              label: "Cancelled",
              value: 2,
              color: "bg-red-100",
              text: "text-red-700",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1"
            >
              {/* Text Section */}
              <div className="flex flex-col justify-center">
                <p className="text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                <h2 className="text-4xl font-bold text-[#1E293B]">
                  {item.value}
                </h2>
              </div>

              {/* Icon Section */}
              <div
                className={`w-14 h-14 ${item.color} ${item.text} rounded-xl flex items-center justify-center`}
              >
                <span className="text-xl font-bold">
                  {item.label[0]} {/* First letter as icon replacement */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Table title="Labrotary Details" columns={columns} data={data} />
    </div>
  );
}

export default Labrotary;
