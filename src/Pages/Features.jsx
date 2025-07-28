import React from 'react'
import img1 from "../assets/features_icons/medical_records.png"
import img2 from "../assets/features_icons/pharmacy.png"
import img3 from "../assets/features_icons/micro.png"
import img4 from "../assets/features_icons/report.png"
import img5 from "../assets/features_icons/employee.png"
import img6 from "../assets/features_icons/hospital-room.png"
import img7 from "../assets/features_icons/inventory.png"
import img8 from "../assets/features_icons/bill.png"


const Features = () => {

const cards=[
  {id:1, image:img1, feature:"Smart Electronic Medical Records", details:"AI-powered system that auto-summarizes patient history, highlights critical data, suggests diagnoses, and visualizes treatment timelines."},
  {id:2, image:img2, feature:"Pharmacy And Inventory Management", details:"AI-powered system that auto-summarizes patient history, highlights critical data, suggests diagnoses, and visualizes treatment timelines."},
  {id:3, image:img3, feature:"Laborartory Information System Integration", details:"AI-powered system that auto-summarizes patient history, highlights critical data, suggests diagnoses, and visualizes treatment timelines."},
  {id:4, image:img4, feature:"Advanced Analytics And Reporting ", details:"AI-powered system that auto-summarizes patient history, highlights critical data, suggests diagnoses, and visualizes treatment timelines."},
  {id:5, image:img5, feature:"Role - Based Access Control And Security", details:"AI-powered system that auto-summarizes patient history, highlights critical data, suggests diagnoses, and visualizes treatment timelines."},
  {id:6, image:img6, feature:"Real Time Bed And Ward Management", details:"AI-powered system that auto-summarizes patient history, highlights critical data, suggests diagnoses, and visualizes treatment timelines."},
  {id:7, image:img7, feature:"Inventory Forecasting", details:"AI-powered system that auto-summarizes patient history, highlights critical data, suggests diagnoses, and visualizes treatment timelines."},
  {id:8, image:img8, feature:"Integrated Billing With Multiplke Payment Gateways", details:"AI-powered system that auto-summarizes patient history, highlights critical data, suggests diagnoses, and visualizes treatment timelines."},

]
  return (
    <div className='flex-col items-center max-w-[1200px] mx-auto min-h-screen text-center'>
     <div className='my-10'>
       <h1 className='text-3xl text-[#0f766e] font-bold'>Medcare - <span className='font-bold text-yellow-800'>A Structured Way to Manage Healthcare</span></h1>
      <div>
        <p className='text-lg font-bold my-2'>Complete Patient Life Cycle Management</p>
      </div>
     </div>

      {/* <--Grid> */}
      <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {cards.map((card)=>(
          <div key={card.id} className='w-[250px] h-[250px] bg-slate-100 relative my-10 rounded-tl-[80px] shadow-2xl hover:bg-[#CFE3E2]'>
        <div className='w-[55px] bg-slate-100 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -mt-[25px]'>
            <img src={card.image} className='m-1'/>
        </div>
        <div className='py-10 flex-col items-center mx-4'>
          <h1 className='text-lg font-semibold text-center my-2'>{card.feature}</h1>
        <p className='text-sm text-gray-500 my-4 font-serif text-center'>{card.details}</p>
        </div>
        </div>
          
        ))}
        
      </div>
    </div>
  )
}

export default Features
