import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white text-center mt-8 shadow-inner animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <span className="text-base md:text-lg font-semibold tracking-wide flex items-center gap-2">
          <img src="/namkeen-banner.png" alt="Happy Namkeen Logo" className="w-8 h-8 rounded-full border-2 border-white shadow" />
          Happy Namkeen and Sweets
        </span>
        <div className="flex gap-6 justify-center text-lg">
          <a href="#home" className="hover:underline hover:text-yellow-100 transition">Home</a>
          <a href="#products" className="hover:underline hover:text-yellow-100 transition">Products</a>
          <a href="#contact" className="hover:underline hover:text-yellow-100 transition">Contact</a>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200 transition"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition"><FaFacebook /></a>
          <a href="https://wa.me/918824646810" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="mt-4 text-xs text-yellow-100/80">© 2025 Happy Namkeen and Sweets. All rights reserved.</div>
    </footer>
  );
}
