import logo from "../assets/logo3.png";
import React, { useState } from "react";

import {
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  ClipboardList,
  X,
  AlertTriangle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();

  const roles = [
    { label: "Admin", icon: ShieldCheck, color: "text-black", role: "Admin" },
    { label: "Doctor", icon: Stethoscope, color: "text-black", role: "Doctor" },
    {
      label: "Patient",
      icon: HeartPulse,
      color: "text-black",
      role: "Patient",
    },
    {
      label: "Receptionist",
      icon: ClipboardList,
      color: "text-red-400 hover:text-white",
      role: "receptionist",
    },
    {
      label: "Room & Beds",
      icon: ClipboardList,
      color: "text-black",
      role: "room-beds",
    },
    // {
    //   label: "Appointments",
    //   icon: ClipboardList,
    //   color: "text-black",
    //   role: "appointments",
    // },
    // {
    //   label: "Billing & Payments",
    //   icon: ClipboardList,
    //   color: "text-black",
    //   role: "billing",
    // },
    // {
    //   label: "Reports",
    //   icon: ClipboardList,
    //   color: "text-black",
    //   role: "reports",
    // },
    {
      label: "Labrotary",
      icon: ClipboardList,
      color: "text-black",
      role: "Labrotary",
    },
     {
      label: "Inventory",
      icon: ClipboardList,
      color: "text-black",
      role: "Inventory",
    },
    // {
    //   label: "Complaints",
    //   icon: ClipboardList,
    //   color: "text-black",
    //   role: "complaints",
    // },
    // {
    //   label: "Inventory",
    //   icon: ClipboardList,
    //   color: "text-black",
    //   role: "inventory",
    // },
    // {
    //   label: "Shift & Schedule",
    //   icon: ClipboardList,
    //   color: "text-black",
    //   role: "shift-schedule",
    // },
    {
      label: "Emergency Alert",
      icon: AlertTriangle,
      color: "text-red-500 hover:text-white",
      role: "Emergency-Alert",
    },
    // {
    //   label: "Attendance",
    //   icon: ClipboardList,
    //   color: "text-black",
    //   role: "attendance",
    // },
  ];
  return (
    <div className="w-full relative bg-gradient-to-bl from-emerald-700 via-teal-500 to-white h-20">
      <div className="flex justify-between px-8">
        {/* <--Logo> */}
        <div className="flex">
          <img src={logo} className=" h-[60px] mx-2 my-4" />
          <div className="px-1 py-3">
            <h1 className="font-bold text-3xl text-[#0F766E]">MedCare</h1>
            <p className="font-serif text-lg text-[#0F766E]">Medical Centre</p>
          </div>
        </div>

        <nav>
          <ul className="flex my-4">
            <li className="text-white my-2 mx-5 font-semibold text-xl hover:text-[#0F766E] ">
              Home
            </li>
            <li className="text-white my-2 mx-5 font-semibold text-xl hover:text-[#0F766E]">
              About
            </li>
            <li className="text-white my-2 mx-5 font-semibold text-xl hover:text-[#0F766E]">
              Services
            </li>
            <li className="text-white my-2 mx-5 font-semibold text-xl hover:text-[#0F766E]">
              Contact
            </li>
          </ul>
        </nav>
        <div className=" flex justify-end  p-3">
          <button
            onClick={() => setShowSidebar(true)}
            className="w-[120px] h-[50px] bg-white rounded-full text-xl font-serif mx-2"
          >
            Login
          </button>
          <button className="w-[120px] h-[50px] bg-white rounded-full text-xl font-serif">
            Register
          </button>
        </div>
      </div>

      {showSidebar && (
        <div className="absolute top-1 right-1 h-[85vh] w-72 bg-gradient-to-bl from-emerald-700 via-teal-500 to-white text-black flex flex-col p-6 shadow-2xl rounded-2xl border border-blue-300 z-50 transition-all duration-300 ease-in-out">
          {/* Close Button */}
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setShowSidebar(false)}
              className="hover:text-red-600 transition"
            >
              <X size={26} />
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Login
          </h2>

          <div className="flex flex-col gap-4 ">
            {roles.map((role, index) => (
              <button
                key={index}
                onClick={() => navigate(`/login/${role.role}`)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl bg-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-400 text-white hover:text-black transition-all duration-300 shadow-md ${role.color}`}
              >
                <role.icon
                  size={22}
                  className="transition-transform group-hover:scale-110 text-black"
                />
                <span className="text-lg font-medium text-black">
                  {role.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
