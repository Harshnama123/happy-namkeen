
export default function Hero() {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between h-[60vh] md:h-[70vh] bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-100 px-6 md:px-16 py-8 overflow-hidden"
      id="home"
    >
      <div className="z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 drop-shadow">Happy Namkeen & Sweets</h1>
        <p className="text-lg md:text-xl text-orange-900 font-medium mb-2">Taja namkeen with perfect taste</p>
        <span className="text-sm md:text-base text-orange-600 mb-6">Since 1998</span>
        <a
          href="#products"
          className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-2 px-6 rounded-full shadow hover:from-orange-400 hover:to-yellow-400 transition"
        >
          Explore Products
        </a>
      </div>
      {/* Placeholder for future image/banner */}
      <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
        <div className="w-48 h-48 md:w-64 md:h-64 bg-orange-100 border-4 border-dashed border-yellow-400 rounded-full flex items-center justify-center opacity-60">
          {/* Future: Add shop image/banner here */}
        </div>
      </div>
      {/* Optional: Decorative background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-300 to-transparent opacity-30 pointer-events-none" />
    </section>
  );
}
