<<<<<<< HEAD
import React, { useState } from "react";
import img1 from "../assets/homeimage3.jpg";
import logo1 from "../assets/logo.png";
=======
import React from 'react'
import img1 from "../assets/health.png"
import logo1 from "../assets/logo.png"
import icon1 from "../assets/icons8-admin-50.png"
import image from "../assets/background.jpg"
import img2 from "../assets/home_page.jpg"
>>>>>>> 270bfdc374b8aea2385609e8cbc9ab3ac3d8c8dd


import Navbar from "../Components/Navbar";

const Home = () => {
<<<<<<< HEAD
 
=======
  return (
   <div className="w-full">
  <img
    src={img2}
    alt="Hospital Banner"
    className="w-full h-auto block"
  />
</div>
  ) 
}
>>>>>>> 270bfdc374b8aea2385609e8cbc9ab3ac3d8c8dd

  return (
    <div className="relative h-screen w-full bg-white overflow-auto">
     

      <Navbar/>

      {/* Main Home Content (Always Visible) */}
      <div className="flex justify-center p-10">
        {/* Left Side */}
        <div className="w-[50%] mx-40 flex-col justify-center">
          <img src={logo1} className="w-[400px] h-[350px]" />
          <div className="font-bold text-5xl text-black leading-snug tracking-wide">
            <p>A heritage in care.</p>
            <p>A reputation in</p>
            <p>excellence</p>
          </div>
          <div className="w-[90%] my-10">
            <p className="text-xl text-black tracking-wide leading-relaxed font-serif">
              MedCare Hospital provides excellent service by prioritizing the
              safety and security of patients
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <img
            src={img1}
            className="w-[700px] h-[500px] my-20 rounded-[100px]"
          />
        </div>
      </div>

     
    </div>
  );
};

export default Home;
