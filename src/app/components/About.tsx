"use client";

import { FaStoreAlt, FaMapMarkerAlt, FaHeart, FaCheckCircle } from "react-icons/fa";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 px-4 bg-transparent" id="about">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className="bg-white/95 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8 p-8 border border-yellow-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="flex flex-col items-center justify-center mb-6 md:mb-0">
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-yellow-200 via-orange-200 to-yellow-100 border-4 border-yellow-300 rounded-full flex items-center justify-center shadow-lg mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'backOut' }}
            >
              <FaStoreAlt className="text-orange-500 text-5xl md:text-6xl" />
            </motion.div>
            <span className="text-orange-700 font-extrabold text-2xl md:text-3xl tracking-widest drop-shadow-lg font-serif animate-fade-in-slow">Since 1998</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 tracking-tight font-serif drop-shadow-lg animate-fade-in flex items-center justify-center md:justify-start gap-2">
              About Us <FaHeart className="text-pink-400 animate-pulse" />
            </h2>
            <p className="text-2xl md:text-3xl text-orange-800 font-bold mb-2 leading-relaxed font-serif animate-fade-in-slow">
              Happy Namkeen and Sweets
            </p>
            <ul className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed font-medium space-y-2 animate-fade-in text-left md:text-left mx-auto md:mx-0 max-w-xl">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Family-run since 1998</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-orange-500" /> 1k29 Mahaveer Nagar Ext., Shree Ram Circle, Kota</li>
              <li className="flex items-center gap-2"><FaHeart className="text-pink-400" /> Unmatched taste & freshness</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Serving with love & tradition for 25+ years</li>
            </ul>
            <p className="text-base md:text-lg text-orange-700 font-semibold mt-2 animate-fade-in text-center md:text-left">
              Visit us for a wide variety of <span className="text-orange-600 font-bold">namkeen</span>, <span className="text-pink-600 font-bold">sweets</span>, and <span className="text-red-500 font-bold">snacks</span> made fresh every day!
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <a href="#contact" className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-orange-500 hover:to-yellow-500 transition-colors text-lg tracking-wide animate-bounce">
                Visit Us
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
