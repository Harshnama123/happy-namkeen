

"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <span className="font-extrabold text-2xl text-white tracking-wide">Happy Namkeen & Sweets</span>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white font-semibold hover:text-yellow-100 transition">Home</a>
          <a href="#about" className="text-white font-semibold hover:text-yellow-100 transition">About</a>
          <a href="#products" className="text-white font-semibold hover:text-yellow-100 transition">Products</a>
          <a href="#contact" className="text-white font-semibold hover:text-yellow-100 transition">Contact</a>
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-8 rounded-full bg-white transition-all duration-300 mb-1 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-1 w-8 rounded-full bg-white transition-all duration-300 mb-1 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-8 rounded-full bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 px-4 pb-4">
          <a href="#home" className="block py-2 text-white font-semibold hover:text-yellow-100 transition">Home</a>
          <a href="#about" className="block py-2 text-white font-semibold hover:text-yellow-100 transition">About</a>
          <a href="#products" className="block py-2 text-white font-semibold hover:text-yellow-100 transition">Products</a>
          <a href="#contact" className="block py-2 text-white font-semibold hover:text-yellow-100 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
