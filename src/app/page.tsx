
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Sweets from "./components/Sweets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Add a subtle animated background
function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100 animate-gradient-move" />
  );
}

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="pt-0 pb-8">
        <Hero />
        {/* Section divider */}
        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full shadow-lg animate-pulse" />
        </div>
        <section className="my-12">
          <About />
        </section>
        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full shadow-lg animate-pulse" />
        </div>
        <section className="my-12">
          <Products />
        </section>
        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-400 rounded-full shadow-lg animate-pulse" />
        </div>
        <section className="my-12">
          <Sweets />
        </section>
        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full shadow-lg animate-pulse" />
        </div>
        <section className="my-12">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
