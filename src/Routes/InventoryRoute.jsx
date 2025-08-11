import React from "react";
import InventoryLayout from "../Layouts/InventoryLayout";
import { Navigate, Route, Routes } from "react-router-dom";

import InventoryDashboard from "../Pages/inventory/InventoryDashboard";
import MedicalSupplies from "../Pages/inventory/MedicalSupplies";
import NewEquipmentRequest from "../Pages/inventory/NewEquipmentRequest";
import PendingSupplies from "../Pages/inventory/PendingSupplies";
import StockUsage from "../Pages/inventory/StockUsage";

function InventoryRoute() {
  return (
    <InventoryLayout>
      <Routes>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<InventoryDashboard />} />
        <Route path="medicalsupplies" element={<MedicalSupplies />} />
        <Route path="newequipmentrequest" element={<NewEquipmentRequest />} />
        <Route path="pendingsupplies" element={<PendingSupplies />} />
        <Route path="stockusage" element={<StockUsage />} />
      </Routes>
    </InventoryLayout>
  );
}

export default InventoryRoute;
