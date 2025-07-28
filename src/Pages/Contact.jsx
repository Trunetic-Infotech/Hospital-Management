import React from 'react'
import img1 from "../assets/location.png"
import img2 from "../assets/email.png"
import img3 from "../assets/phone.png"

const Contact = () => {
    return (
        <div className='  my-40 sm:flex justify-center sm:my-20'>
            <div className=' w-[800px] px-10 bg-[rgb(226,219,196)] shadow-2xl sm:relative overflow-visible'>
                <div className='w-[400px]'>
                    <div className='m-4'>
                        <h1 className='text-3xl text-[#247c75] font-bold'>Get in Touch</h1>
                        <p className='text-slate-400 text-[15px] font-normal'>Feel free to contact us anytime</p>
                    </div>
                    <form className='my-8'>
                        <div className='m-4'>
                            <label className='text-lg font-normal block  mx-2 text-[#165a54]'>Name</label>
                            <input placeholder='Enter you name' className='border m-1 text-sm px-20 py-2 rounded-2xl' />
                        </div>
                        <div className='m-4'>
                            <label className='text-lg font-normal block mx-2 text-[#165a54]'>Email</label>
                            <input placeholder='Enter you email' className='border m-1 text-sm px-20 py-2 rounded-2xl' />
                        </div>
                        <div className='m-4'>
                            <label className='text-lg font-normal block mx-2 text-[#165a54]'>Phone</label>
                            <input placeholder='Enter you number' className='border m-1 text-sm px-20 py-2 rounded-2xl' />
                        </div>
                        <div className='m-4'>
                            <label className='text-lg font-normal block mx-2 text-[#165a54]'>Message</label>
                            <input placeholder='Enter message' className='border m-1 text-sm px-20 py-10 rounded-2xl' />
                        </div>
                        <div className='text-center'>
                            <button className=' bg-[#247c75]  text-white text-normal text-lg m-1 rounded-3xl py-2 px-4'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='bg-[#165a54] shadow-2xl w-[400px] py-20 rounded-md hidden sm:flex flex-col justify-center items-center   sm:absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2'>
                    <div>
                        <p className='text-2xl font-normal text-white'>Contact Us</p>
                    </div>

                    <div className='w-[250px]'>
                        <div className='flex mx-1 my-6'>
                            <img src={img1} className='w-[20px] h-[25px] mx-2' />
                            <p className='text-white font-semibold text-sm'>101 C wing, Amir Apartment, near Motherhood hospital, Tetavli, Kausa, Mumbra, Thane, Maharashtra 400612</p>
                        </div>
                        <div className='flex mx-1 my-6'>
                            <img src={img2} className='w-[30px] h-[25px] mx-2' />
                            <p className='text-white font-semibold text-sm'>support@truneticinfotech.com</p>
                        </div>
                        <div className='flex mx-1 my-6'>
                            <img src={img3} className='w-[30px] h-[25px] mx-2' />
                            <p className='text-white font-semibold text-sm'>+91 93729 69593</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
