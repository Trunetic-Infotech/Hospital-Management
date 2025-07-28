import React from "react";

import doctor from "../../assets/doctor.png";
import nurse from "../../assets/nurse.png";
import patient from "../../assets/patient.png";
import bed from "../../assets/bed.png";
import PatientAdmission from "./graphs/PatientAdmission";
import MedicinesSold from "./graphs/MedicinesSold";
import BedAvailability from "./graphs/BedAvailability";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";

function AdminDashboard() {
  return (
    <div className="h-full  bg-[#EFECEC] rounded-2xl gap-10  overflow-y-auto">
      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-3">
        <div className="flex justify-between bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div>
            <h2 className="text-3xl font-bold">35</h2>
            <p className="text-gray-600 mt-2">Total Doctors</p>
          </div>
          <div className="flex items-center justify-center h-[60px] w-[60px] rounded-2xl bg-[#0F766E]">
            <img src={doctor} alt="doctor" className="w-10 h-10" />
          </div>
        </div>

        <div className="flex justify-between bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div>
            <h2 className="text-3xl font-bold">10</h2>
            <p className="text-gray-600 mt-2">Total Nurses</p>
          </div>
          <div className="flex items-center justify-center h-[60px] w-[60px] rounded-2xl bg-[#0F766E]">
            <img src={nurse} alt="nurse" className="w-10 h-10" />
          </div>
        </div>

        <div className="flex justify-between bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div>
            <h2 className="text-3xl font-bold">50</h2>
            <p className="text-gray-600 mt-2">Occupied Beds</p>
          </div>
          <div className="flex items-center justify-center h-[60px] w-[60px] rounded-2xl bg-[#0F766E]">
            <img src={bed} alt="bed" className="w-10 h-10" />
          </div>
        </div>

        {/* Admitted Patients */}
        <div className="flex justify-between bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div>
            <h2 className="text-3xl font-bold">30</h2>
            <p className="text-gray-600 mt-2">Admitted Patients</p>
          </div>
          <div className="flex items-center justify-center h-[60px] w-[60px] rounded-2xl bg-[#0F766E]">
            <img src={patient} alt="patient" className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Graph */}

      <div className="px-5 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 place-item-center">
          <div className="">
            <PatientAdmission />
          </div>
          <div className=" ">
            <MedicinesSold />
          </div>
          <div className="md:col-span-2 lg:col-span-1  ">
            <BedAvailability />
          </div>
        </div>
      </div>

      {/* table */}

      <div className="px-4">
        <div className="h-[40%] bg-white rounded-2xl shadow-lg p-5">
          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Patient Admission Overview
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
                <tr>
                  <th className="px-6 py-3">Patient Name</th>
                  <th className="px-6 py-3">Age</th>
                  <th className="px-6 py-3">Room No</th>
                  <th className="px-6 py-3">Bed No</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Doctor</th>
                </tr>
              </thead>

              <tbody className="text-gray-700 text-sm">
                <tr className="bg-white shadow hover:bg-gray-50 rounded-xl transition">
                  <td className="px-6 py-4 font-medium">Ram</td>
                  <td className="px-6 py-4">22</td>
                  <td className="px-6 py-4">05</td>
                  <td className="px-6 py-4">20</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                      Critical
                    </span>
                  </td>
                  <td className="px-6 py-4">Dr. Aniket</td>
                </tr>

                {/* Add more rows as needed */}
              </tbody>

              <tbody className="text-gray-700 text-sm">
                <tr className="bg-white shadow hover:bg-gray-50 rounded-xl transition">
                  <td className="px-6 py-4 font-medium">Ram</td>
                  <td className="px-6 py-4">22</td>
                  <td className="px-6 py-4">05</td>
                  <td className="px-6 py-4">20</td>
                  <td className="px-6 py-4">
                    <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Recovering
                    </span>
                  </td>
                  <td className="px-6 py-4">Dr. Aniket</td>
                </tr>

                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
