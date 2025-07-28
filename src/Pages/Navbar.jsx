import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"; // your preferred icons
import { Link } from 'react-router-dom';
import img1 from"../assets/medcare.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full bg-green-100'>
      <div className='flex flex-wrap items-center justify-between px-4 lg:px-8 py-2'>

        {/* Logo Section */}
        <div className="flex items-center h-[80px] px-4 bg-white">
  <img
    src={img1}
    alt="logo"
    className="h-full w-auto object-contain"
  />
</div>


        {/* Hamburger Icon (only on small screens) */}
        <div className='lg:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <RxCross1 size={28} /> : <RxHamburgerMenu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex lg:items-center lg:space-x-8'>
          <nav>
            <div className='flex my-4'>
              <Link to="/" className='text-green-950 my-2 mx-4 font-semibold text-xl hover:text-[#0F766E] hover:-translate-y-1 hover:shadow-xl hover:scale-105'>Home</Link>
              <Link to="/AboutPage" className='text-green-950 my-2 mx-4 font-semibold text-xl hover:text-[#0F766E]  hover:-translate-y-1 hover:shadow-xl hover:scale-105'>About</Link>
              <Link to="/Contact" className='text-green-950 my-2 mx-4 font-semibold text-xl hover:text-[#0F766E]  hover:-translate-y-1 hover:shadow-xl hover:scale-105'>Contact</Link>
              <Link to="/BlogsPage" className='text-green-950 my-2 mx-4 font-semibold text-xl hover:text-[#0F766E]  hover:-translate-y-1 hover:shadow-xl hover:scale-105'>Blog</Link>
            </div>
          </nav>
          <div className='flex'>
            <button className='bg-[#0F766E] text-white w-[100px] h-[50px] mx-2 rounded-xl text-lg font-semibold'>Login</button>
            <button className='bg-[#0F766E] text-white w-[100px] h-[50px] mx-2 rounded-xl text-lg font-bold'>Register</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='lg:hidden px-4 pb-4'>
          <nav>
            <ul className='flex flex-col gap-2'>
              <li className='text-green-950 font-semibold text-lg hover:text-[#0F766E]'>Home</li>
              <li className='text-green-950 font-semibold text-lg hover:text-[#0F766E]'>About</li>
              <li className='text-green-950 font-semibold text-lg hover:text-[#0F766E]'>Services</li>
              <li className='text-green-950 font-semibold text-lg hover:text-[#0F766E]'>Contact</li>
            </ul>
          </nav>
          <div className='flex flex-col mt-4 gap-2'>
            <button className='bg-[#0F766E] text-white w-full h-[45px] rounded-xl text-base font-semibold'>Login</button>
            <button className='bg-[#0F766E] text-white w-full h-[45px] rounded-xl text-base font-bold'>Register</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
