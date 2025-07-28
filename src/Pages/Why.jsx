import React from 'react'
import icon1 from "../assets/why_icon/icon1.png"
import icon2 from "../assets/why_icon/icon2.png"
import icon3 from "../assets/why_icon/icon3.png"

import doctor from '../assets/doctor_img.png'

const Why = () => {

    const card1 = [
        { id: 1, image: icon1, heading: "Best Treatment", info: "Medcare provides a wide array of medical services, including specialized treatments, preventative care, and wellness advice." },
        { id: 2, image: icon2, heading: "Emergency Help", info: "Medcare provides a wide array of medical services, including specialized treatments, preventative care, and wellness advice." },
        { id: 3, image: icon3, heading: "Medical Staff", info: "Medcare provides a wide array of medical services, including specialized treatments, preventative care, and wellness advice." }
    ]
    const card2 = [
        { id: 4, image: icon1, heading: "Best Treatment", info: "Medcare provides a wide array of medical services, including specialized treatments, preventative care, and wellness advice." },
        { id: 5, image: icon2, heading: "Emergency Help", info: "Medcare provides a wide array of medical services, including specialized treatments, preventative care, and wellness advice." },
        { id: 6, image: icon3, heading: "Medical Staff", info: "Medcare provides a wide array of medical services, including specialized treatments, preventative care, and wellness advice." }
    ]
    return (
      <div className="flex flex-col items-center my-20">
  <h1 className="text-4xl font-bold">Why Choose Us?</h1>
  <div className="max-w-[1200px] text-center my-5">
    <p className="text-slate-500 text-base font-semibold ">
      Our reputation for outstanding care and family-like atmosphere, together
      with advanced medical technology and facilities ensures we attract
      leading consultants and specialists from the industry to work with us.
    </p>
  </div>

  {/* Grid Section */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[1200px] text-center ">
    {/* First Column */}
    <div className="flex flex-col items-start justify-start space-y-4   px-4">
      {card1.map((card) => (
        <div key={card.id} className="flex items-start space-x-2">
          <img
            src={card.image}
            className="bg-[#0F766E] rounded-full w-[50px] p-2"
            alt={card.heading}
          />
          <div className="text-left">
            <h2 className="text-xl font-semibold text-slate-800">
              {card.heading}
            </h2>
            <p className="text-base text-slate-800 leading-relaxed">
              {card.info}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Middle Column with Image */}
    <div className="h-[400px] flex items-center justify-center">
      <img
        src={doctor}
        alt="Doctor"
        className="max-w-full max-h-full object-contain"
      />
    </div>

    {/* Third Column */}
    <div className=" flex flex-col items-start justify-start space-y-4 px-4">
      {card1.map((card) => (
        <div key={card.id} className="flex items-start space-x-2">
          <img
            src={card.image}
            className="bg-[#0F766E] rounded-full w-[50px] p-2"
            alt={card.heading}
          />
          <div className="text-left">
            <h2 className="text-xl font-semibold text-slate-800">
              {card.heading}
            </h2>
            <p className="text-base text-slate-800 leading-relaxed">
              {card.info}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    )
}

export default Why
