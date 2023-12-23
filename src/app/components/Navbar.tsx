import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 px-10 flex justify-between items-center fixed w-full">
      <div>
        <span className="text-xl font-bold">Khalid Nawaz</span>
      </div>
      <div>
        <button className="bg-gradient-to-r from-red-900 to-yellow-300 text-white font-bold py-2 px-4 rounded-full">
         <Link href={'https://www.linkedin.com/in/khalid-nawaz-bost-your-business-with-guest-posting-33b7661aa/'}>Let's Connect</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
