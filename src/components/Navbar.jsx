import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import logo from "./assests/Frame.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggles the menu state
  };

  return (
    <nav className="bg-custom-gradient text-[#003459] font-bold font-gilroy relative">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-4 py-4">
        {/* Hamburger Icon (Mobile Only) - Positioned to the left */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Logo in the center */}
        <div className="flex-grow text-center">
          <img src={logo} alt="Logo" className="h-10 mx-auto" />
        </div>

        {/* Placeholder for alignment (empty div to keep the layout balanced) */}
        <div className="md:hidden w-8"></div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:items-center space-x-6">
          <a href="/" className="hover:text-indigo-700">
            Home
          </a>
          <a href="/category" className="hover:text-indigo-700">
            Category
          </a>
          <a href="/about" className="hover:text-indigo-700">
            About
          </a>
          <a href="/contact" className="hover:text-indigo-700">
            Contact
          </a>
        </div>

        {/* Search and Buttons (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459] text-sm"
            type="text"
            placeholder="🔍 Search something here"
          />
          <button className="bg-[#003459] text-white px-6 py-2 rounded-full font-bold text-sm">
            Join the community
          </button>
          <button className="px-6 py-2 rounded-full border border-[#003459] text-[#003459] text-sm">
            VND ▼
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-custom-gradient text-center z-50">
          <div className="flex flex-col items-center space-y-4 py-8">
            <a href="/" className="hover:text-indigo-700">
              Home
            </a>
            <a href="/category" className="hover:text-indigo-700">
              Category
            </a>
            <a href="/about" className="hover:text-indigo-700">
              About
            </a>
            <a href="/contact" className="hover:text-indigo-700">
              Contact
            </a>

            {/* Mobile Search and Buttons */}
            <input
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459] text-sm"
              type="text"
              placeholder="🔍 Search something here"
            />
            <button className="bg-[#003459] text-white px-6 py-2 rounded-full font-bold text-sm">
              Join the community
            </button>
            <button className="px-6 py-2 rounded-full border border-[#003459] text-[#003459] text-sm">
              VND ▼
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
