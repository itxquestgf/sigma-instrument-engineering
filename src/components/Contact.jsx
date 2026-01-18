import { motion } from "framer-motion";
import { useState } from "react";
import konsumen1 from "../assets/images/konsumen1.jpg";
import konsumen2 from "../assets/images/konsumen2.jpg";
import konsumen3 from "../assets/images/konsumen3.jpg";
import konsumen4 from "../assets/images/konsumen4.jpg";
import konsumen5 from "../assets/images/konsumen5.jpg";

/* ===== Animation Variants ===== */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="py-24 bg-[#0B1C2D] text-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hubungi Kami
          </h2>
          <p className="text-yellow-300 text-lg max-w-3xl mx-auto">
            Siap membantu kebutuhan instrumentasi dan kalibrasi Anda
          </p>
        </motion.div>

        {/* ===== GRID UTAMA ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >

          {/* ===== INFORMASI KONSUMEN (FULL WIDTH) ===== */}
          <motion.div
            variants={card}
            className="
              col-span-1 md:col-span-12
              bg-white/5 backdrop-blur
              rounded-2xl p-8
              border border-white/10
              hover:border-yellow-400/40 transition
            "
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              Informasi Konsumen
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Dipercaya oleh berbagai perusahaan & institusi
            </p>

<div
  className="
    flex gap-6 items-center
    overflow-x-auto
    pb-3
    snap-x snap-mandatory
    scrollbar-dark
  "
>

              {[konsumen1, konsumen2, konsumen3, konsumen4, konsumen5].map(
                (img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`konsumen-${i + 1}`}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="
                      h-20 md:h-24
                      min-w-[160px]
                      object-contain
                      bg-white/10
                      rounded-xl
                      p-4
                      snap-center
                      flex-shrink-0
                    "
                  />
                )
              )}
            </div>
          </motion.div>

          {/* ===== INFORMASI KONTAK ===== */}
          <motion.div
            variants={card}
            className="
              col-span-1 md:col-span-6
              bg-white/5 backdrop-blur
              rounded-2xl p-6
              border border-white/10
              hover:border-yellow-400/40 transition
              h-full
            "
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Informasi Kontak
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="flex gap-3">
                <span className="text-yellow-400">📍</span>
                Kp.Cimuncang Rt.01 Rw.13 No.67, Baleendah
              </p>
              <p className="flex gap-3">
                <span className="text-yellow-400">📱</span>
                089653828447
              </p>
              <p className="flex gap-3">
                <span className="text-yellow-400">✉️</span>
                sigmainstrumentengineering@gmail.com
              </p>
              <p className="flex gap-3">
                <span className="text-yellow-400">⏰</span>
                Senin–Jumat 08:00–17:00<br />
                Sabtu 08:00–12:00
              </p>
            </div>
          </motion.div>

          {/* ===== INFORMASI GPS ===== */}
          <motion.div
            variants={card}
            className="
              col-span-1 md:col-span-6
              bg-white/5 backdrop-blur
              rounded-2xl p-6
              border border-white/10
              hover:border-yellow-400/40 transition
              h-full
            "
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Lokasi Kami
            </h3>
            <div className="h-64 rounded-xl overflow-hidden">
              <iframe
                title="maps"
                src="https://maps.google.com/maps?q=Baleendah&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ===== FORM KIRIM PESAN ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.div
            variants={card}
            className="
              bg-white/5 backdrop-blur
              rounded-2xl p-8
              border border-white/10
              hover:border-yellow-400/40 transition
              max-w-3xl mx-auto
            "
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Kirim Pesan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Nama Anda"
                onChange={handleChange}
                className="w-full p-3 bg-[#0F253C] rounded-lg text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                onChange={handleChange}
                className="w-full p-3 bg-[#0F253C] rounded-lg text-white"
                required
              />
              <input
                name="phone"
                placeholder="08xxxxxxxxxx"
                onChange={handleChange}
                className="w-full p-3 bg-[#0F253C] rounded-lg text-white"
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Tuliskan pesan Anda..."
                onChange={handleChange}
                className="w-full p-3 bg-[#0F253C] rounded-lg text-white"
                required
              />
              <button
                type="submit"
                className="
                  w-full py-3
                  bg-yellow-400 text-[#0B1C2D]
                  font-semibold rounded-xl
                  hover:bg-yellow-500 transition
                "
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
