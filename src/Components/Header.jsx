import React from "react";
import doctor from "../assets/doctor.png";
import { Bell, Sun } from "lucide-react";

function Header() {
  return (
    <div className="flex flex-row sm:flex-row items-center justify-between gap-6 sm:gap-4 p-4 sm:p-2 md:p-6 lg:p-10 w-full">
      {/* Search + Icons */}
      <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
        <input
          type="search"
          name="search"
          placeholder="Search..."
          className="py-2 px-4 sm:px-3 rounded-xl border border-gray-300 focus:outline-none w-full sm:w-[200px] md:w-[250px] lg:w-[350px]"
        />

        {/* Sun Icon - hidden on mobile */}
        <div className="hidden sm:flex items-center justify-center h-10 w-10 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-2xl bg-white shadow">
          <Sun className="w-5 h-5 text-gray-700 hover:text-teal-600 transition" />
        </div>

        {/* Bell Icon - hidden on mobile */}
        <div className="hidden sm:flex items-center justify-center h-10 w-10 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-2xl bg-white shadow">
          <Bell className="w-5 h-5 text-gray-700 hover:text-teal-600 transition" />
        </div>
      </div>

      {/* Doctor Info Card */}
      <div className="flex items-center gap-3 sm:gap-2 rounded-2xl shadow-lg px-4 py-2 bg-[#0F766E] w-full sm:w-auto">
        <div className="flex items-center justify-center h-10 w-10 sm:h-10 sm:w-10 rounded-2xl bg-white">
          <img src={doctor} alt="doctor" className="w-8 h-8" />
        </div>

        <div className="text-white">
          <h2 className="text-sm font-bold">My Profile</h2>
          <p className="text-sm text-white/80">amar@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
