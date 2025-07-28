import { useState } from "react";




import Login from "./Pages/Login";

import AdminRoute from "./Routes/AdminRoute";
import DoctorRoute from "./Routes/DoctorRoute";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import EmergencyRoute from "./Routes/EmergencyRoute";
import LabrotaryRoute from "./Routes/LabrotaryRoute";
import InventoryRoute from "./Routes/InventoryRoute";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import About from './Pages/About'

import Why from './Pages/Why'
import Blogs from './Pages/Blogs'
import Features from './Pages/Features'
import Faq from './Pages/Faq'
import Main from './Pages/Main'
import Footer from './Pages/Footer'
import Contact from './Pages/Contact'
import AboutPage from './Pages/AboutPage'
import BlogsPage from './Pages/BlogsPage'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
    
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='AboutPage' element={<AboutPage />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='BlogsPage' element={<BlogsPage />} />
        <Route path='Home' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Blogs' element={<Blogs />} />
        <Route path='Why' element={<Why />} />

     
        <Route path="/login/:role" element={<Login />} />
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path="/doctor/*" element={<DoctorRoute />} />
        <Route path="/emergency/*" element={<EmergencyRoute />} />
        <Route path="/labrotary/*" element={<LabrotaryRoute />} />
         <Route path="/inventory/*" element={<InventoryRoute />} />
      </Routes>
      <Footer />
    

    
    </>
  );
}

export default App;
