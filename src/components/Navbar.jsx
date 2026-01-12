import Logo from "../assets/images/logo.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-[#0B1C2D]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-[150px]" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-200">
          {["Home", "Profile", "Legality", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-yellow-400 cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-400"
        >
          {/* Electro / Arduino style */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 12h6l3-6 3 12 3-6h3" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0B1C2D]/90 backdrop-blur px-6 py-6 space-y-4 text-gray-200"
          >
            {["Home", "Profile", "Legality", "Contact"].map((item) => (
              <div
                key={item}
                className="hover:text-yellow-400 cursor-pointer transition"
              >
                {item}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
