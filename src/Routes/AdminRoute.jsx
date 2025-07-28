import React from "react";
import AdminLayout from "../Layouts/AdminLayout";
import { Navigate, Routes, Route } from "react-router-dom";

import AdminDashboard from "../Pages/admin/AdminDashboard";
import Sidebar from "../Components/Sidebar";
import NursesAndStaff from "../Pages/admin/NursesAndStaff";
import Doctors from "../Pages/admin/Doctors";
import Patients from "../Pages/admin/Patients";
import Appointments from "../Pages/admin/Appointments";
import RoomsAndBeds from "../Pages/admin/RoomsAndBeds";
import Staff from "../Pages/admin/Staff";
import Labrotary from "../Pages/admin/Labrotary";

function AdminRoute() {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="nursesandstaff" element={<NursesAndStaff />} />
        <Route path="staff" element={<Staff />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="patients" element={<Patients />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="roomsandbeds" element={<RoomsAndBeds />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="labrotary" element={<Labrotary />} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminRoute;
