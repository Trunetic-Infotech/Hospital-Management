import { icons, Key } from "lucide-react";
import React, { useState } from "react";

import { X } from "lucide-react";

import category from "../../assets/category.png";
import doctor from "../../assets/doctor.png";
import call from "../../assets/call.png";
import availibility from "../../assets/availibility.png";
import star from "../../assets/star.png";



function NursesAndStaff() {
  const [selectedrole, setSelectedrole] = useState("ALL");

  const [showcomponent, setShowcomponent] = useState("Nurses");

  const [showform, setShowform] = useState(false);



  const Nurse = [
    { label: "ALL" },
    { label: "REGISTERED NURSE" },
    { label: "NURSE PRACTITIONER" },
    { label: "NURSING ASSISTANT" },
    { label: "HEAD NURSE" },
    { label: "CHARGE NURSE" },
    { label: "ICU NURSE" },
  ];

  const Staff = [
    { label: "ALL" },
    { label: "LAB TECHNECIAN" },
    { label: "PHARMACIST" },
    { label: "OTA" },
    { label: "PHARMACIST" },
    { label: "MEDICAL RECORD STAFF" },
    { label: "DIALYSIS TECHNECIAN" },
  ];

  const profile = [
    {
      Image: doctor,
      rating: "4.5",
      name: "DR.Topan Kumar ",
      category: "registered nurse",
      button1: "Availability",
      button2: "Make A Call",
    },

    {
      rating: "4.5",
      name: "DR.Topan Kumar ",
      category: "registered nurse",
      button1: "Availability",
      button2: "Make A Call",
    },

    {
      rating: "4.5",
      name: "DR.Topan Kumar ",
      category: "SERGERY",
      button1: "Availability",
      button2: "Make A Call",
    },
    {
      rating: "4.5",
      name: "DR.Topan Kumar ",
      category: "nursing assistant",
      button1: "Availability",
      button2: "Make A Call",
    },
    {
      rating: "4.5",
      name: "DR.Topan Kumar ",
      category: "nursing assistant",
      button1: "Availability",
      button2: "Make A Call",
    },
    {
      rating: "4.5",
      name: "DR.Topan Kumar ",
      category: "head nurse",
      button1: "Availability",
      button2: "Make A Call",
    },
    {
      rating: "4.5",
      name: "DR.Topan Kumar ",
      category: "charge nurse",
      button1: "Availability",
      button2: "Make A Call",
    },
    {
      rating: "4.5",
      name: "DR.Topan Kumar ",
      category: "Dermatologist",
      button1: "Availability",
      button2: "Make A Call",
    },
    {
      rating: "4.5",
      name: "DR.Topan Kumar ",
      category: "Dermatologist",
      button1: "Availability",
      button2: "Make A Call",
    },
    {
      rating: "4.5",
      name: "DR.Topan Kumar ",
      category: "ota",
      button1: "Availability",
      button2: "Make A Call",
    },
  ];

  const filteredItems = selectedrole === ("ALL") ? profile : profile.filter((prof) =>
    prof.category.toLowerCase().includes(selectedrole.toLowerCase())
  );

  //   const filtereditems = Staff.filter((stff) =>
  //   stff.category.toLowerCase().includes(selectedrole.toLowerCase())
  // );

  console.log(filteredItems);

  return (
    <div className={` relative `}>
      <div className={`p-4 sm:p-6 ${showform ? "opacity-50" : " "}`}>
        <div className="flex flex-col sm:flex-row justify-between items-center  mb-4 gap-3 px-2">
          <h1></h1>

          <div className="flex gap-2">
            {/* Nurses Button */}
            <button
              onClick={() => {
                setShowcomponent("Nurses");
              }}
              className={`px-10 py-2 rounded-full font-extrabold transition-all duration-300 ${
                showcomponent === "Nurses"
                  ? "bg-[#0F766E] text-white"
                  : "bg-[#D9D9D9] text-black"
              }`}
            >
              Nurses
            </button>

            {/* Staff Button */}
            <button
              onClick={() => {
                setShowcomponent("Staff");
              }}
              className={`px-10 py-2 rounded-full font-bold transition-all duration-300 ${
                showcomponent === "Staff"
                  ? "bg-[#0F766E] text-white"
                  : "bg-[#D9D9D9] text-black"
              }`}
            >
              Staff
            </button>
          </div>

          <button
            onClick={() => setShowform(true)}
            className="px-6 py-2 bg-[#0F766E] rounded-full font-bold text-white"
          >
            Add
          </button>
        </div>
      </div>

      <div className={` ${showform ? "opacity-50" : " "}`}>
        {showcomponent === "Nurses" ? (
          <>
            {/* Role Buttons and Icon */}
            <div className="bg-[#D9D9D9] p-3 rounded-2xl flex flex-wrap items-center justify-center gap-4">
              {Nurse.map((role, index) => (
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

              <img
                src={category}
                alt="Category"
                className="w-8 h-8 md:ml-6 ml-auto mt-1"
              />
            </div>

            <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5 p-2 ">
              {filteredItems.map((role, index) => (
                <div
                  key={index}
                  className="relative  bg-white flex flex-col p-5 items-center rounded-2xl gap-4 "
                >
                  <div className="absolute left-5">
                    <span className="flex gap-1 bg-[#E8DFDF] px-4 py-1 rounded-full text-[#FD7E14] ">
                      {role.rating}
                      <img src={star} className="h-5 w-5 " />
                    </span>
                  </div>
                  <img
                    src={doctor}
                    className="h-20 w-20 bg text-center bg-gray-50 rounded-full "
                  >
                    {role.img}
                  </img>
                  <h1 className="text-center font-bold text-md">{role.name}</h1>

                  <h1 className=" px-4 py-2 bg-[#C0CEDB] text-[#2A7BC7] rounded-full font-bold">
                    {role.category}
                  </h1>

                  <div className="flex flex-wrap gap-4 ">
                    <h1 className="flex gap-1 px-2 py-2 bg-[#EFECEC] text-[#808080] rounded-3xl font-bold">
                      <img src={availibility} className="h-6 " />
                      {role.button1}
                    </h1>
                    <h1 className="flex px-1 py-2 bg-[#EFECEC] text-[#808080] rounded-xl font-bold">
                      <img src={call} className="h-6 " />
                      {role.button2}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="bg-[#D9D9D9] p-3 rounded-2xl flex flex-wrap items-center justify-center gap-4">
              {Staff.map((role, index) => (
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

              <img
                src={category}
                alt="Category"
                className="w-8 h-8 md:ml-6 ml-auto mt-1"
              />
            </div>

            <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-5 p-2 ">
              {filteredItems.map((role, index) => (
                <div
                  key={index}
                  className="relative  bg-white flex flex-col p-5 items-center rounded-2xl gap-4 "
                >
                  <div className="absolute left-5">
                    <span className="flex gap-1 bg-[#E8DFDF] px-4 py-1 rounded-full text-[#FD7E14] ">
                      {role.rating}
                      <img src={star} className="h-5 w-5 " />
                    </span>
                  </div>
                  <img
                    src={doctor}
                    className="h-20 w-20 bg text-center bg-gray-50 rounded-full "
                  >
                    {role.img}
                  </img>
                  <h1 className="text-center font-bold text-md">{role.name}</h1>

                  <h1 className=" px-4 py-2 bg-[#C0CEDB] text-[#2A7BC7] rounded-full font-bold">
                    {role.category}
                  </h1>

                  <div className="flex flex-wrap gap-4 ">
                    <h1 className="flex gap-1 px-2 py-2 bg-[#EFECEC] text-[#808080] rounded-3xl font-bold">
                      <img src={availibility} className="h-6 " />
                      {role.button1}
                    </h1>
                    <h1 className="flex px-1 py-2 bg-[#EFECEC] text-[#808080] rounded-xl font-bold">
                      <img src={call} className="h-6 " />
                      {role.button2}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {showform && (
        <div className=" absolute left-[35%]   inset-0 z-50 ">
          <div className="   ">
            {/* close button */}
            <div className="flex justify-end mb-2"></div>
            <div className="max-w-md  mt-10 bg-white p-6 rounded-2xl shadow-md border border-gray-200  ">
              <button
                onClick={() => setShowform(false)}
                className="hover:text-red-600 transition"
              >
                <X size={26} />
              </button>
              <h1 className="text-2xl font-bold text-center text-teal-700 mb-6">
                Add 
              </h1>

              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter doctor's name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Category Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="e.g. Cardiologist, Dentist"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Department Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  placeholder="e.g. OPD, ICU"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NursesAndStaff;
