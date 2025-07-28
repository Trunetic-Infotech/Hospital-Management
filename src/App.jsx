import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

import AdminRoute from "./Routes/AdminRoute";
import DoctorRoute from "./Routes/DoctorRoute";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import EmergencyRoute from "./Routes/EmergencyRoute";
import LabrotaryRoute from "./Routes/LabrotaryRoute";
import InventoryRoute from "./Routes/InventoryRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path="/doctor/*" element={<DoctorRoute />} />
        <Route path="/emergency/*" element={<EmergencyRoute />} />
        <Route path="/labrotary/*" element={<LabrotaryRoute />} />
         <Route path="/inventory/*" element={<InventoryRoute />} />
      </Routes>
    </>
  );
}

export default App;
