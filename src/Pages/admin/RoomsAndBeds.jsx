import React from "react";

import totalrooms from "../../assets/totalrooms.png";
import door from "../../assets/door.png";
import search from "../../assets/search.png";
import location from "../../assets/locationicon.png";
import sheets from "../../assets/sheetsicon.png";
import status from "../../assets/statusicon.png";
import nurse from "../../assets/nurse.png";
import patient from "../../assets/patient.png";
import bed from "../../assets/bed.png";

function RoomsAndBeds() {
  const roles = [
    {
      img: door,
      ward: "icu",
      roomno: 101,
      floor: 101,
      status: "available",
      critical: "$800",
      totalbed: 4,
      available: 2,
      occupied: 2,
    },
    {
      img: door,
      ward: "icu",
      roomno: 101,
      floor: 1,
      status: "available",
      critical: "$800",
      totalbed: 4,
      available: 2,
      occupied: 2,
    },
    {
      img: door,
      ward: "icu",
      roomno: 101,
      floor: 2,
      status: "available",
      critical: "$800",
      totalbed: 4,
      available: 2,
      occupied: 2,
    },
    {
      img: door,
      ward: "icu",
      roomno: 101,
      floor: 3,
      status: "available",
      critical: "$800",
      totalbed: 4,
      available: 2,
      occupied: 2,
    },
  ];

  return (
    <div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Rooms", value: 35 },
            { label: "Total Beds", value: 35 },
            { label: "Occupied Beds", value: 35 },
            { label: "Available Beds", value: 35 },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Text Section */}
              <div className="flex flex-col justify-center items-center  p-8">
                <p className=" text-md font-semibold">{item.label}</p>
                <h2 className="text-3xl font-bold text-[#1E293B]">
                  {item.value}
                </h2>
              </div>

              {/* Icon Section */}
              <div className="flex items-center justify-center w-[150px] h-full rounded-tr-2xl rounded-br-2xl bg-[#24875C]">
                <img
                  src={totalrooms}
                  alt="icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* search dropdown */}
      <div className="p-6">
        <div className=" bg-[#D9D9D9] rounded-xl p-6">
          <h1 className="font-bold text-lg mb-4">Filter Rooms</h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <div className="relative w-full">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
                <img
                  src={search}
                  alt="search"
                  className="absolute left-3 w-6 h-6 "
                />
                <input
                  type="text"
                  name="Search"
                  placeholder="Search Rooms..."
                  className="w-full placeholder:text-gray-500 placeholder:text-base outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="relative w-full">
              <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
                <img
                  src={location}
                  alt="location icon"
                  className="absolute left-3 w-6 h-6"
                />

                <select
                  name="status"
                  className="w-full  text-gray-700 placeholder:text-base outline-none  pr-6"
                >
                  <option value="">All Floors</option>
                  <option value="active">Floor 1</option>
                  <option value="pending">Floor2</option>
                </select>
              </div>
            </div>

            <div className="relative w-full">
              <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
                <img
                  src={sheets}
                  alt="sheets icon"
                  className="absolute left-3 w-6 h-6"
                />

                <select
                  name="status"
                  className="w-full bg-transparent text-gray-700 placeholder:text-base outline-none  pr-6"
                >
                  <option value="">All Types</option>
                  <option value="active">Floor 1</option>
                  <option value="pending">Floor2</option>
                </select>
              </div>
            </div>

            <div className="relative w-full">
              <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2 pl-10 w-full">
                <img
                  src={status}
                  alt="status icon"
                  className="absolute left-3 w-6 h-6"
                />

                <select
                  name="status"
                  className="w-full bg-transparent text-gray-700 placeholder:text-base outline-none pr-6"
                >
                  <option value="">status</option>
                  <option value="active">Floor 1</option>
                  <option value="pending">Floor2</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms */}
      <div>
        {/* <div className=" rounded-xl  w-full grid grid-cols-4 p-2 gap-8 ">
            {roles.map((role, index) => (
              <div key={index} >
                <div className="bg-white rounded-xl p-5 ">
                  <div className="flex justify-between">
                    <div className="h-[80px] w-[70px] bg-[#24875C] flex flex-col items-center justify-center rounded-xl">
                        <img src={role.img} className="w-12 h-12 mb-2 " />
                      </div>
                  
                    <div>
                      <p className="font-bold">Room No: {role.roomno}</p>
                      <p className="text-gray-600 font-bold">Floor: {role.floor}</p>
                    </div>

                    <div className=" flex flex-col gap-2">
                      <p className="bg-green-200 px-6 text-[#133b0f] py-1 rounded-full font-bold">{role.status}</p>
                      <h1 className="bg-red-200 text-center text-[#3b0f0f] p-1 rounded-full font-bold">{role.ward}</h1>
                    </div>
                  </div>

                  <div className="flex  justify-between px-4 p-5">
                    <div>
                      <p>Critical Care: </p>
                      <span>{role.critical}</span>
                    </div>

                    <div>
                      <p>Total Beds: </p>
                      <span>{role.totalbed}</span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-center font-bold">Bed status</p>

                  <div className="flex  justify-between p-3">
                   <div className="flex"> <p className="text-black bg-[#D9D9D9] font-semibold rounded-full px-5 py-1 ">
                      Available:  {role.available}
                    </p>

                 </div>
                    <p className="text- bg-[#D9D9D9] font-semibold rounded-full px-5 py-1">Occupied: {role.occupied}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        <div className="text-end px-10">
          <button className="text-white bg-[#24875C] rounded-xl font-bold px-4 py-2 text-end">
            Add Room
          </button>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 w-full">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Header Section */}
              <div className="flex justify-between items-start mb-4">
                <div className="h-[80px] w-[70px] bg-[#24875C] flex items-center justify-center rounded-xl">
                  <img src={role.img} alt="Role" className="w-12 h-12" />
                </div>

                <div className="text-right">
                  <p className="font-semibold text-lg text-gray-700">
                    Room No: <span className="text-black">{role.roomno}</span>
                  </p>
                  <p className="text-gray-500 text-sm">Floor: {role.floor}</p>
                </div>
              </div>

              {/* Status Tags */}
              <div className="flex justify-between items-center mb-4">
                <span className="bg-green-100 text-green-800 px-4 py-1 text-xs font-semibold rounded-full shadow-sm">
                  {role.status}
                </span>
                <span className="bg-red-100 text-red-800 px-4 py-1 text-xs font-semibold rounded-full shadow-sm">
                  {role.ward}
                </span>
              </div>

              {/* Details Section */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <p className="text-gray-500">Critical Care</p>
                  <p className="font-bold text-black">{role.critical}</p>
                </div>
                <div>
                  <p className="text-gray-500">Total Beds</p>
                  <p className="font-bold text-black">{role.totalbed}</p>
                </div>
              </div>

              {/* Bed Status */}
              <p className="text-center text-gray-500 font-semibold mb-2">
                Bed Status
              </p>
              <div className="flex justify-between">
                <p className="bg-[#E0F7E9] text-green-900 font-semibold rounded-full px-5 py-1 text-sm">
                  Available: {role.available}
                </p>
                <p className="bg-[#FDECEA] text-red-800 font-semibold rounded-full px-5 py-1 text-sm">
                  Occupied: {role.occupied}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomsAndBeds;
