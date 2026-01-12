import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero1 from "../assets/images/hero1.jpg";
import Hero2 from "../assets/images/hero2.jpg";
import Hero3 from "../assets/images/hero3.jpg";

const images = [Hero1, Hero2, Hero3];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background slideshow */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={img} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B1C2D]/70" />
        </div>
      ))}

      {/* Animated content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <span className="text-yellow-400 uppercase tracking-widest text-sm mb-4">
            Profesional & Terpercaya
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            PT SIGMA INSTRUMENT ENGINEERING
          </h1>

          <h2 className="text-lg md:text-2xl font-semibold text-yellow-300 mb-4 max-w-4xl">
            Solusi Instrumentasi & Kalibrasi Terpercaya untuk Industri Modern
          </h2>

          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-4xl">
            Spesialis dalam instrumentasi, kalibrasi, sertifikasi, dan pengadaan
            alat ukur presisi untuk kebutuhan industri, laboratorium, dan proyek
            teknik.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="px-8 py-3 rounded-xl bg-yellow-400 text-[#0B1C2D] font-semibold hover:bg-yellow-500 transition">
              Hubungi Kami
            </button>
            <button className="px-8 py-3 rounded-xl border border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-[#0B1C2D] transition">
              Layanan
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
