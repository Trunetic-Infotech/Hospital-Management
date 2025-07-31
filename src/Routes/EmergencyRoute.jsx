import React from "react";
import EmergencyLayout from "../Layouts/EmergencyLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import EmergencyDashboard from "../Pages/emergency/EmergencyDashboard";
import PatientDetails from "../Pages/emergency/PatientDetails";
import AmbulanceTracking from "../Pages/emergency/AmbulanceTracking";
import StaffContact from "../Pages/emergency/StaffContact";

function EmergencyRoute() {
  return (
    <EmergencyLayout>
      <Routes>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<EmergencyDashboard />} />
        <Route path="patientdetails" element={<PatientDetails />} />
        <Route path="ambulancetracking" element={<AmbulanceTracking />} />
        <Route path="staffcontact" element={<StaffContact />} />
      </Routes>
    </EmergencyLayout>
  );
}

export default EmergencyRoute;
