
export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white text-center mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <span className="text-sm md:text-base">© 2025 Happy Namkeen and Sweets. All rights reserved.</span>
        <div className="flex gap-6 justify-center">
          <a href="#home" className="hover:underline hover:text-yellow-100 transition">Home</a>
          <a href="#products" className="hover:underline hover:text-yellow-100 transition">Products</a>
          <a href="#contact" className="hover:underline hover:text-yellow-100 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
