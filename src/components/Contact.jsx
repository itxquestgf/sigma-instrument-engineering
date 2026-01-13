import { motion } from "framer-motion";
import { useState } from "react";
import konsumen1 from "../assets/images/konsumen1.jpg";
import konsumen2 from "../assets/images/konsumen2.jpg";
import konsumen3 from "../assets/images/konsumen3.jpg";
import konsumen4 from "../assets/images/konsumen4.jpg";
import konsumen5 from "../assets/images/konsumen5.jpg";

/* Animation variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log(form);
  };

  return (
    <section className="py-24 bg-[#0B1C2D] text-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Header ===== */}
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

        {/* ===== Card: Informasi Konsumen ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-white/10 hover:border-yellow-400/40 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Informasi Konsumen</h3>
            <div className="space-y-4">
              <img src={konsumen1} alt="konsumen1" className="w-full h-32 object-cover rounded-xl mb-4" />
              <img src={konsumen2} alt="konsumen2" className="w-full h-32 object-cover rounded-xl mb-4" />
              <img src={konsumen3} alt="konsumen3" className="w-full h-32 object-cover rounded-xl mb-4" />
              <img src={konsumen4} alt="konsumen4" className="w-full h-32 object-cover rounded-xl mb-4" />
              <img src={konsumen5} alt="konsumen5" className="w-full h-32 object-cover rounded-xl mb-4" />
            </div>
          </motion.div>

          {/* ===== Card: Informasi Kontak ===== */}
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-white/10 hover:border-yellow-400/40 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Informasi Kontak</h3>
            <div className="space-y-4 text-left">
              <p className="flex items-center text-gray-300">
                <span className="text-yellow-400 mr-2">📍</span> Alamat: Kp.Cimuncang Rt.01 Rw.13 Nomor.67 Kel.Manggahang Kec.Baleendah
              </p>
              <p className="flex items-center text-gray-300">
                <span className="text-yellow-400 mr-2">📱</span> Telepon / WhatsApp: 085221303266
              </p>
              <p className="flex items-center text-gray-300">
                <span className="text-yellow-400 mr-2">✉️</span> Email: Ptsigmainstrumentengineering@gmail.com
              </p>
              <p className="flex items-center text-gray-300">
                <span className="text-yellow-400 mr-2">⏰</span> Jam Operasional: Senin - Jumat: 08:00 - 17:00 WIB, Sabtu: 08:00 - 12:00 WIB
              </p>
            </div>
          </motion.div>

          {/* ===== Card: Informasi GPS ===== */}
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-white/10 hover:border-yellow-400/40 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Informasi GPS</h3>
            <div className="h-64 bg-gray-500 rounded-xl">
              {/* Embed Google Maps or Map Image */}
              <img
                src="https://via.placeholder.com/400x200"
                alt="GPS"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </motion.div>

        </motion.div>

        {/* ===== Card: Kirim Pesan Form ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-white/10 hover:border-yellow-400/40 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
                required
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="08xxxxxxxxxx"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tuliskan pesan Anda..."
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
                rows="4"
                required
              />
              <button type="submit" className="w-full py-3 bg-yellow-400 text-[#0B1C2D] font-semibold rounded-xl hover:bg-yellow-500 transition">
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
