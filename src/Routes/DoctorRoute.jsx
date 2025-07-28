import React from "react";
import AdminLayout from "../Layouts/AdminLayout";
import { Navigate, Routes, Route } from "react-router-dom";

import AdminDashboard from "../Pages/admin/AdminDashboard";
import DoctorDashboard from "../Pages/doctor/DoctorDashboard";

import DoctorLayout from "../Layouts/DoctorLayout";
import Home from "../Pages/doctor/Home";

function DoctorRoute() {
  return (
    <DoctorLayout>
      <Routes>

        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path='home'  element={<Home/>} />
        
      </Routes>
    </DoctorLayout>
  );
}

export default DoctorRoute;
