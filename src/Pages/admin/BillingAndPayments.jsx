import React, { useState } from "react";
import Table from "../../Components/Table";
import Invoicess from "../admin/Invoicess";
import Payments from "./Payments";

function BillingAndPayments() {
  const [showcomponent, setShowcomponent] = useState("overview");

  const roles = [
    {
      label: "Total Revenue",
      count: "10,200",
    },
    {
      label: "Pending Payments",
      count: "200",
    },
    {
      label: "Paid",
      count: "5",
    },
    {
      label: "Invoicess",
      count: "10",
    },
  ];

  const columns = ["Patients Name", "Price"];

  const data = [
    {
      patientsname: "Ram",
      price: "1000 RS",
    },
    {
      patientsname: "Ram",
      price: "1000 RS",
    },
    {
      patientsname: "Ram",
      price: "1000 RS",
    },
    {
      patientsname: "Ram",
      price: "1000 RS",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex gap-2">
        {/* Nurses Button */}
        <button
          onClick={() => setShowcomponent("overview")}
          className={`px-10 py-2 rounded-full font-extrabold transition-all duration-300 ${
            showcomponent === "overview"
              ? "bg-[#0F766E] text-white"
              : "bg-[#D9D9D9] text-black"
          }`}
        >
          Overview
        </button>

        {/* Invoicess Button */}
        <button
          onClick={() => {
            setShowcomponent("invoicess");
          }}
          className={`px-10 py-2 rounded-full font-bold transition-all duration-300 ${
            showcomponent === "invoicess"
              ? "bg-[#0F766E] text-white"
              : "bg-[#D9D9D9] text-black"
          }`}
        >
          Invoicess
        </button>

        <button
          onClick={() => {
            setShowcomponent("payments");
          }}
          className={`px-10 py-2 rounded-full font-bold transition-all duration-300 ${
            showcomponent === "payments"
              ? "bg-[#0F766E] text-white"
              : "bg-[#D9D9D9] text-black"
          }`}
        >
          Payments
        </button>
      </div>

      { showcomponent === "overview" && (
        <div>
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

        <div>
          <div className=" bg-[#a7caba7a] rounded-xl p-5">
            <Table title="Recent Payments" columns={columns} data={data} />
          </div>
        </div>
      </div>
      )}

      {showcomponent === "invoicess" && (
        <div>
          <Invoicess />
        </div>
      )}

       {showcomponent === "payments" && (
        <div className="bg-white rounded-xl p-5 shadow-md">
          <Payments />
        </div>
      )}
    </div>
  );
}

export default BillingAndPayments;
