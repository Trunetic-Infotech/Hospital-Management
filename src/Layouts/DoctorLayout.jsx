import React from "react";
import Sidebar from "../Components/Sidebar";
import { doctorMenu } from "../constants/SidebarMenu";
import Header from "../Components/Header";

function DoctorLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-[10%] bg-[#EFECEC] rounded-2xl shadow-lg p-4">
        <Sidebar sidebarItems={doctorMenu} />
      </div>
     

      <main>{children}</main>
    </div>
  );
}

export default DoctorLayout;
