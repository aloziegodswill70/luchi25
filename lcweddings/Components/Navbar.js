import Link from "next/link";
import React from 'react'


const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/About" className="hover:underline">
          About
        </Link>
        <Link href="/Contacts" className="hover:underline">
          Contacts
        </Link>
        <Link href="/Donation" className="hover:underline">
          Donation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
