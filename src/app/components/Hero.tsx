import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between h-[70vh] bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-50 px-6 md:px-16 py-8 overflow-hidden rounded-3xl shadow-xl mt-6 mx-auto max-w-7xl animate-fade-in group"
      id="home"
    >
      <div className="z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-700 mb-4 drop-shadow-lg tracking-tight animate-slide-in">Happy Namkeen & Sweets</h1>
        <p className="text-xl md:text-2xl text-orange-900 font-medium mb-2 animate-fade-in delay-100">Taja namkeen with perfect taste</p>
        <span className="text-base md:text-lg text-orange-600 animate-fade-in delay-200 mb-6">Since 1998</span>

        <a
          href="#products"
          className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-orange-400 hover:to-yellow-400 transition text-lg animate-bounce"
        >
          Explore Products
        </a>
      </div>
      {/* Banner image with a subtle animation */}
      <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 animate-fade-in delay-300">
        <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-300 bg-white flex items-center justify-center">
          <Image
            src="/namkeen-banner.png"
            alt="Namkeen Banner"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
        </div>
      </div>
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-300 to-transparent opacity-20 pointer-events-none rounded-3xl" />

      {/* Fog cursor effect removed */}


    </section>
  );
}
