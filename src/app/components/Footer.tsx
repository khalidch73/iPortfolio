// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed w-full bottom-0">
      <div className="flex justify-around py-2">
        {/* Logo for Home */}
        <Link href="/">
          <div className="footer-logo">Home</div>
        </Link>

        {/* Logo for About */}
        <Link href="/about">
          <div className="footer-logo">About</div>
        </Link>

        {/* Logo for Services */}
        <Link href="/services">
          <div className="footer-logo">Services</div>
        </Link>
      </div>
      <div className='flex justify-around'>
        {/* Logo for Technologies */}
        <Link href="/technologies">
          <div className="footer-logo">Technologies</div>
        </Link>

        {/* Logo for Portfolio */}
        <Link href="/portfolio">
          <div className="footer-logo">My Portfolio</div>
        </Link>

        {/* Logo for Contact */}
        <Link href="/contact">
          <div className="footer-logo">Contact Me</div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
