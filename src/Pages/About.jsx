import React from 'react'
import img1 from "../assets/doctors.jpg"
import img2 from "../assets/icon2.png"


const About = () => {
  return (
    <div className='  lg:flex items-center justify-center my-32 sm:flex-row '>
     
   <div className='lg:w-[500px] sm:w-[100%] px-10'>
         <img src={img1} className='rounded-xl w-[500px]' />
   </div>
      
      <div className='px-10 py-10 sm:w-[100%] lg:w-[60%]'>
        <h1 className='text-2xl sm:text-3xl font-semibold text-yellow-800'><span className=' text-xl sm:text-3xl font-bold text-[#0F766E]'>MedCare - </span> The Hospital Management System</h1>
        <div className=' text-sm leading-relaxed space-y-2 font-serif my-4' >
          <p className=''>MedCare is an all-in-one, cloud-based Hospital Management System (HMS) designed to streamline healthcare operations across the globe.
            From small clinics to multi-location hospital chains, our platform unifies patient records, billing, appointments, lab diagnostics, pharmacy, and more—into a single, secure, and intelligent system.
            It helps healthcare providers improve patient care, reduce costs, and make data-driven decisions with ease.</p>
        </div>
        <button className='bg-[#0F766E] p-2 rounded-full text-white font-semibold text-lg my-2'>About Us</button>
       
      </div>

    </div>
  )
}

export default About
