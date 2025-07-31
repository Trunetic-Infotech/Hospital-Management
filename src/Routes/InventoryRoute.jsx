import React from 'react'
import InventoryLayout from '../Layouts/InventoryLayout'
import { Navigate, Route, Routes } from 'react-router-dom'

import InventoryDashboard from "../Pages/inventory/InventoryDashboard"
import MedicalSupplies from "../Pages/inventory/MedicalSupplies"



function InventoryRoute() {
  return (
    <InventoryLayout>
      <Routes>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={< InventoryDashboard/>} />
        <Route path="medicalsupplies" element={<MedicalSupplies/>} />
       
      </Routes>
    </InventoryLayout>
  )
}

export default InventoryRoute