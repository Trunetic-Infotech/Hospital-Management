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
import BillingAndPayments from "../Pages/admin/BillingAndPayments";
import Reports from "../Pages/admin/Reports";
import Complaints from "../Pages/admin/Complaints";
import Inventory from "../Pages/admin/Inventory";
import ShiftsAndSchedules from "../Pages/admin/ShiftsAndSchedules";
import EmergencyAlerts from "../Pages/admin/EmergencyAlerts";
import Attendance from "../Pages/admin/Attendence";
import MortuaryRecords from "../Pages/admin/MortuaryRecords"
import Pharmacy from "../Pages/admin/Pharmacy";


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
        <Route path="pharmacy" element={<Pharmacy />} />
        <Route path="billingandpayments" element={<BillingAndPayments />} />
        <Route path="reports" element={<Reports />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="shiftsandschedules" element={<ShiftsAndSchedules />} />
        <Route path="emergencyalerts" element={<EmergencyAlerts/>} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="mortuaryrecords" element={<MortuaryRecords />} />
    
      </Routes>
    </AdminLayout>
  );
}

export default AdminRoute;
