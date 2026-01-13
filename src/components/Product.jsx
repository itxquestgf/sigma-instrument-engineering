import { motion } from "framer-motion";

/* Animation variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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

export default function Product() {
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
            Produk & Pengadaan
          </h2>
          <p className="text-yellow-300 text-lg max-w-3xl mx-auto">
            Menyediakan berbagai alat ukur dan peralatan instrumentasi berkualitas tinggi
          </p>
        </motion.div>

        {/* ===== Product Grid ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: "📏",
              title: "Pressure Gauge",
              desc: "Digital & Analog Pressure Meter",
            },
            {
              icon: "🌡️",
              title: "Thermometer",
              desc: "Digital & Thermocouple",
            },
            {
              icon: "⚖️",
              title: "Timbangan Digital",
              desc: "Berbagai Kapasitas",
            },
            {
              icon: "⚡",
              title: "Multimeter",
              desc: "Clamp Meter & Digital",
            },
            {
              icon: "📊",
              title: "Data Logger",
              desc: "Temperature & Humidity",
            },
            {
              icon: "📡",
              title: "Sensor Industri",
              desc: "IoT Monitoring Device",
            },
            {
              icon: "💧",
              title: "Flow Meter",
              desc: "Liquid & Gas Flow",
            },
            {
              icon: "🔧",
              title: "Lainnya",
              desc: "Pengadaan Sesuai Kebutuhan",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-yellow-400/40 transition text-center"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-4xl mb-4 text-yellow-400"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Keunggulan Kami ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Keunggulan Kami
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Mengapa memilih PT Sigma Instrument Engineering sebagai partner Anda
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
              {
                icon: "🧑‍🔬",
                title: "Tenaga Ahli",
                desc: "Berpengalaman & Tersertifikasi",
              },
              {
                icon: "🎯",
                title: "Peralatan Standar",
                desc: "Terkalibrasi & Teruji",
              },
              {
                icon: "⚡",
                title: "Proses Cepat",
                desc: "Efisien & Akurat",
              },
              {
                icon: "📋",
                title: "Laporan Lengkap",
                desc: "Sertifikat Resmi",
              },
              {
                icon: "💰",
                title: "Harga Kompetitif",
                desc: "Terjangkau & Transparan",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={card}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-yellow-400/40 transition text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-4xl mb-4 text-yellow-400"
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-white font-semibold text-lg mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
