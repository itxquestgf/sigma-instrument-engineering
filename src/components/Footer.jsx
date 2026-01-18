import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#081726] text-gray-300 pt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Top Footer ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10"
        >
          {/* ===== Company Info ===== */}
          <div>
            <h3 className="text-xl font-bold text-white leading-tight mb-4">
              PT SIGMA <br />
              <span className="text-yellow-400">INSTRUMENT ENGINEERING</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Solusi terpercaya untuk instrumentasi, kalibrasi, dan pengadaan
              alat ukur presisi.
            </p>
          </div>

          {/* ===== Services ===== */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Layanan
            </h4>
            <ul className="space-y-3">
              <li className="hover:text-yellow-400 transition cursor-pointer">
                Kalibrasi Alat Ukur
              </li>
              <li className="hover:text-yellow-400 transition cursor-pointer">
                Instrumentasi Industri
              </li>
              <li className="hover:text-yellow-400 transition cursor-pointer">
                Sertifikasi
              </li>
              <li className="hover:text-yellow-400 transition cursor-pointer">
                Pengadaan Alat
              </li>
            </ul>
          </div>

          {/* ===== Quick Contact ===== */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Kontak Cepat
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                📱 <span>085221303266</span>
              </li>
              <li className="flex items-center gap-2 break-all">
                ✉️ <span>sigmainstrumentengineering@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                📍 <span>Bandung, Jawa Barat</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* ===== Bottom Footer ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-6 text-center text-sm text-gray-500"
        >
          © 2026 PT Sigma Instrument Engineering. All Rights Reserved.
        </motion.div>

      </div>
    </footer>
  );
}
