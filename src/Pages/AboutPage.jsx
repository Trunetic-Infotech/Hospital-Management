import React from 'react'
import img1 from "../assets/about.jpg"
import icon1 from "../assets/about_icon/icon1.png"
import icon2 from "../assets/about_icon/icon2.png"
import icon3 from "../assets/about_icon/icon3.png"
import icon4 from "../assets/about_icon/icon4.png"
import icon5 from "../assets/about_icon/icon5.png"
import icon6 from "../assets/about_icon/icon6.png"
import icon7 from "../assets/about_icon/icon7.png"
import icon8 from "../assets/about_icon/icon8.png"
import Navbar from './Navbar'


import mission1 from "../assets/mission/img_1.jpg"
import mission2 from "../assets/mission/img_2.jpeg"
import mission3 from "../assets/mission/img_3.jpg"
import mission4 from "../assets/mission/img_4.jpg"
import mission_icon1 from "../assets/mission_icon/mission_icon1.png"
import mission_icon2 from '../assets/mission_icon/mission_icon2.png'
import mission_icon3 from "../assets/mission_icon/mission_icon3.png"
import mission_icon4 from "../assets/mission_icon/mission_icon4.png"

const AboutPage = () => {
    const software = [
        { img: icon1, details: "Patient registration and tracking" },
        { img: icon2, details: "Appointment management" },
        { img: icon3, details: "Electronic medical records" },
        { img: icon4, details: "Billing and insurance processing" },
        { img: icon5, details: "Inventory and pharmacy control" },
        { img: icon6, details: "Data analytics and reporting" },
        { img: icon7, details: "Role based access control" },
        { img: icon8, details: "Security" }
    ]

    const mission = [
        {
            image: mission1, icon: mission_icon1, text: "Empowering Global Healthcare", para: "Our mission is to provide hospitals and clinics across the world with powerful, intuitive, and secure software that simplifies healthcare management and improves patient care."
        },
        {
            image: mission2, icon: mission_icon2, text: "Supporting Medical Proffessionals", para: "We are dedicated to helping doctors, nurses, and administrators work more efficiently with digital tools that reduce complexity and enhance decision-making."
        },
        {
            image: mission3, icon: mission_icon3, text: "Accessible & scalable Technology", para: "Whether you're a small rural clinic or a large metropolitan hospital, our platform scales to your needs—ensuring that high-quality digital healthcare is accessible everywhere."
        },
        {
            image: mission4, icon: mission_icon4, text: "Putting Patients First", para: "Every feature we build is designed with the patient in mind—enabling faster service, better record keeping, and more personalized care."
        },


    ]
    return (
        <div>
            <div>
                <img src={img1} className='h-screen w-full' />
            </div>

            {/* <--2nd part> */}
            <div className='bg-[#e1f1f0] py-10'>

                <div className=''>
                    <p className='text-4xl font-bold font-serif text-[#194744] text-center p-5'>Our Software Offers</p>
                </div>
                <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 '>
                    {software.map((item, index) => (


                        <div className='w-[250px] rounded-lg p-2 my-2 mx-4 shadow-2xl rounded-tl-3xl bg-slate-100'>
                            <img src={item.img} className='m-2 w-[40px] bg-slate-200 rounded-full py-2 px-1 ' />
                            <p className='text-lg font-semibold font-serif m-2 hover:text-[#2b6b67]'>{item.details}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* <3rd part--> */}
            <div className='max-w-[1200px] mx-auto'>
                <div className='text-center mx-8 my-10'>
                    <p className='text-4xl font-bold font-serif text-[#194744]'>Our <span className='text-yellow-800'>Mission</span></p>
                    <p className='text-lg font-medium my-4'>At Medcare, our mission is to empower healthcare providers worldwide with smart, secure, and scalable technology.</p>
                </div>
                <div className='grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-36 my-10 mx-10'>
                    {mission.map((missions, index) => (
                        <div className='w-[250px] h-[350px] shadow-2xl'>
                            <div className="relative">
                                {/* Main Image with green overlay */}
                                <img src={missions.image} className="w-full h-auto" alt="Mission" />
                                {/* Green overlay */}
                                <div className="absolute inset-0 bg-green-400 opacity-30 mix-blend-multiply pointer-events-none"></div>
                                {/* Icon positioned at the bottom */}
                                <img
                                    src={missions.icon}
                                    className="bg-[#25524d] rounded-full border-4 border-white absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-14 h-14"
                                    alt="Icon"
                                />
                            </div>
                            <div>
                                <p className='text-lg font-bold font-serif mx-2 my-4'>{missions.text}</p>
                                <p className='text-sm font-medium m-2 text-gray-600'>{missions.para}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>


        </div>
    )
}

export default AboutPage
