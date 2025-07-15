import React from 'react'
import img1 from "../assets/health.png"
import logo1 from "../assets/logo.png"
import icon1 from "../assets/icons8-admin-50.png"



const Home = () => {
  return (
    <div className='bg-gradient-to-r from-teal-600 to-emerald-900  w-full h-full'>
      <div className='p-5 flex justify-end'>
        <button className='w-[120px] h-[50px] bg-white rounded-full text-xl font-serif mx-2'>Login</button>
            <button className='w-[120px] h-[50px] bg-white rounded-full text-xl font-serif'>Register</button>
      </div>
     
            <div className='flex justify-center p-10'>
                {/* <--Rightside> */}
                <div className='w-[50%] mx-40 flex-col justify-center'>
                     <img src={logo1} className='w-[400px]  h-[350px]' />
                    <div className=' font-bold text-5xl text-white leading-snug tracking-wide'>
                    <p className=''>A heritage in care.</p>
                       <p> A reputation in</p>
                        <p>excellence
                    </p>
                </div>
               
               <div className='w-[90%] my-10'>
                 <p className='text-xl text-white tracking-wide leading-relaxed font-serif'>MedCare Hospital provides excellent service by prirotrizing 
                    the safety and security of patients</p>
               </div>
                </div>
                {/* <--Leftside> */}
                 <div className=''>
               <img src={img1} className='w-[1000px] h-[600px] my-20 rounded-full' />
         </div>
            </div>

          
        


     

 
      
    </div>
  )
}

export default Home
