import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Profile() {
  return (
    <section className="py-24 bg-[#0B1C2D] text-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Title ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Profil Perusahaan
          </h2>
          <p className="text-yellow-300 text-lg max-w-3xl mx-auto">
            Komitmen kami adalah memberikan layanan yang akurat, profesional, dan tepat waktu
          </p>
        </motion.div>

        {/* ===== Tentang | Visi | Misi ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {/* Tentang Kami */}
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-yellow-400/40 transition"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-yellow-400 text-3xl mb-4"
            >
              🏢
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Tentang Kami
            </h3>
            <p className="text-gray-300 leading-relaxed">
              PT Sigma Instrument Engineering adalah perusahaan yang bergerak di
              bidang <span className="text-yellow-300">instrumentasi, kalibrasi,
              sertifikasi</span>, dan pengadaan alat ukur presisi untuk kebutuhan
              industri, laboratorium, dan proyek teknik.
              <br /><br />
              Kami berkomitmen memberikan layanan yang akurat, profesional, dan
              tepat waktu dengan dukungan tenaga ahli berpengalaman serta
              peralatan standar yang terkalibrasi.
            </p>
          </motion.div>

          {/* Visi */}
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-yellow-400/40 transition"
          >
            <motion.div
              whileHover={{ rotate: -5, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-yellow-400 text-3xl mb-4"
            >
              🎯
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Visi
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Menjadi perusahaan terdepan dalam bidang
              <span className="text-yellow-300"> instrumentasi dan kalibrasi </span>
              yang terpercaya, profesional, serta berkontribusi dalam peningkatan
              standar kualitas industri di Indonesia.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-yellow-400/40 transition"
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-yellow-400 text-3xl mb-4"
            >
              🚀
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Misi
            </h3>
            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>
                <span className="text-yellow-300">
                  Menjadi mitra teknis jangka panjang bagi klien
                </span>
              </li>
              <li>Memberikan layanan kalibrasi yang akurat dan terpercaya</li>
              <li>Menyediakan alat ukur berkualitas tinggi untuk kebutuhan industri</li>
              <li>Mengikuti perkembangan teknologi industri terbaru</li>
              <li>Memberikan layanan terbaik demi kepuasan pelanggan</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ===== Bidang Usaha ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Bidang Usaha
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Layanan profesional untuk mendukung kebutuhan industri modern dan berstandar tinggi
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              { icon: "🏭", title: "Instrumentasi Industri" },
              { icon: "📏", title: "Jasa Kalibrasi Alat Ukur" },
              { icon: "📜", title: "Jasa Sertifikasi Alat Ukur" },
              { icon: "🛒", title: "Pengadaan Alat Ukur" },
              { icon: "🤖", title: "Otomasi & Monitoring" },
              { icon: "🔧", title: "Perawatan & Perbaikan" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-400/40 transition"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-4xl mb-4 text-yellow-400"
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-white font-semibold text-lg">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
