import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"; // your preferred icons
import { Link } from "react-router-dom";
import img1 from "../assets/medcare.png";

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
  const [menuOpen, setMenuOpen] = useState(false);
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
      label: "Billing & Payments",
      icon: ClipboardList,
      color: "text-black",
      role: "billing",
    },
  
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
 
    {
      label: "Emergency Alert",
      icon: AlertTriangle,
      color: "text-red-500 hover:text-white",
      role: "Emergency-Alert",
    },
   
  ];

  return (
    <div className="w-full bg-green-100">
      <div className="flex flex-wrap items-center justify-between px-4 lg:px-8 py-2">
        {/* Logo Section */}
        <div className="flex items-center h-[80px] px-4 bg-white">
          <img src={img1} alt="logo" className="h-full w-auto object-contain" />
        </div>

        {/* Hamburger Icon (only on small screens) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <RxCross1 size={28} /> : <RxHamburgerMenu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <nav>
            <div className="flex my-4">
              <Link
                to="/"
                className="text-green-950 my-2 mx-4 font-semibold text-xl hover:text-[#0F766E] hover:-translate-y-1 hover:shadow-xl hover:scale-105"
              >
                Home
              </Link>
              <Link
                to="/AboutPage"
                className="text-green-950 my-2 mx-4 font-semibold text-xl hover:text-[#0F766E]  hover:-translate-y-1 hover:shadow-xl hover:scale-105"
              >
                About
              </Link>
              <Link
                to="/Contact"
                className="text-green-950 my-2 mx-4 font-semibold text-xl hover:text-[#0F766E]  hover:-translate-y-1 hover:shadow-xl hover:scale-105"
              >
                Contact
              </Link>
              <Link
                to="/BlogsPage"
                className="text-green-950 my-2 mx-4 font-semibold text-xl hover:text-[#0F766E]  hover:-translate-y-1 hover:shadow-xl hover:scale-105"
              >
                Blog
              </Link>
            </div>
          </nav>
          <div className=" flex  mt-4 gap-2    ">
            <button
              onClick={() => setShowSidebar(true)}
              className="bg-[#0F766E] text-white w-full h-[45px] rounded-xl text-base font-semibold px-4
"
            >
              Login
            </button>
            <button
              className="bg-[#0F766E] text-white w-full h-[45px] rounded-xl text-base font-semibold px-4
"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <nav>
            <ul className="flex flex-col gap-2">
              <li className="text-green-950 font-semibold text-lg hover:text-[#0F766E]">
                Home
              </li>
              <li className="text-green-950 font-semibold text-lg hover:text-[#0F766E]">
                About
              </li>
              <li className="text-green-950 font-semibold text-lg hover:text-[#0F766E]">
                Services
              </li>
              <li className="text-green-950 font-semibold text-lg hover:text-[#0F766E]">
                Contact
              </li>
            </ul>
          </nav>
          <div className="flex flex-col mt-4 gap-2">
            <button className="bg-[#0F766E] text-white w-full h-[45px] rounded-xl text-base font-semibold">
              Login
            </button>
            <button className="bg-[#0F766E] text-white w-full h-[45px] rounded-xl text-base font-bold">
              Register
            </button>
          </div>
        </div>
      )}

      {showSidebar && (
        <div className="absolute top-1 right-1 h-[85vh] overflow-y-auto w-72 bg-gradient-to-bl from-emerald-700 via-teal-500 to-white text-black flex flex-col p-6 shadow-2xl rounded-2xl border border-blue-300 z-50 transition-all duration-300 ease-in-out">
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
                onClick={() => {
                  navigate(`/login/${role.role}`);
                  setShowSidebar(false);
                }}
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
