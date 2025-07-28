import React from 'react';
import logo from '../assets/medcare.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { name: 'Home', path: '/Home' },
    { name: 'About', path: '/About' },
    { name: 'Contact', path: '/Contact' },
    { name: 'Blog', path: '/Blog' },
    { name: 'Review', path: '/Review' },
  ];

  const services = [
    { name: 'Electronic Record', path: '/Home' },
    { name: 'Employee Management', path: '/About' },
    { name: 'Billing & Invoicing', path: '/Contact' },
    { name: 'Appointments & Scheduling', path: '/Blog' },
  ];

  return (
    <div className="bg-[#399b93] text-slate-200 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <img src={logo} className="w-36 mb-4" alt="Logo" />
          <p className="text-lg font-semibold  leading-relaxed">
            Our platform is designed to streamline hospital operations, enhance communication, and improve hospital success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-bold text-lg mb-4">Quick Links</p>
          <ul className="space-y-3">
            {links.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="hover:text-white transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="font-bold text-lg mb-4">Services</p>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <Link to={service.path} className="hover:text-white transition">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <p className="font-bold text-lg mb-4">Contact Us</p>
          <div className="space-y-2 text-sm">
            <p>
              01/C Wing, Amir Apartment, near Motherhood Hospital, Tetavli, Kausa, Mumbra, Thane-400612, Maharashtra.
            </p>
            <p>Email: <a href="mailto:support@truneticinfotech.com" className="underline">support@truneticinfotech.com</a></p>
            <p>Phone: <a href="tel:+919372969593" className="underline">+91 93729 69593</a></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
