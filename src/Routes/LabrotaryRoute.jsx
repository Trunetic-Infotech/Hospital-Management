import React from "react";
import LabrotaryLayout from "../Layouts/LabrotaryLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import LabrotaryDashboard from "../Pages/labrotary/LabrotaryDashboard";
import EquipmentAvailabolity from "../Pages/labrotary/EqipmentAvailability";
import SampleCollection from "../Pages/labrotary/SampleCollection";
import PatientTestHistory from "../Pages/labrotary/PatientTestHistory";
import LabDetails from "../Pages/labrotary/LabDetails";
import PendingTest from "../Pages/labrotary/PendingTest";

function LabrotaryRoute() {
  return (
    <LabrotaryLayout>
      <Routes>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<LabrotaryDashboard />} />
        <Route path="pendingtest" element={<PendingTest/>} />
        <Route path="samplecollection" element={<SampleCollection />} />
        <Route
          path="equipmentavailability"
          element={<EquipmentAvailabolity />}
        />
        <Route path="patienttesthistory" element={<PatientTestHistory />} />
        <Route path="labdetails" element={<LabDetails />} />
      </Routes>
    </LabrotaryLayout>
  );
}

export default LabrotaryRoute;
