"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (

<section id="why-us" className="py-28 bg-[#0f172a] relative overflow-hidden">
  {/* Background Accent */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-700/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-2xl" />
  </div>

  <div className="max-w-7xl mx-auto px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold text-white mb-6"
    >
      Why Choose Us
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="max-w-3xl mx-auto text-lg text-gray-400 mb-12"
    >
      We combine expertise, innovation, and commitment to deliver scalable and high-quality digital solutions for businesses worldwide.
    </motion.p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        { icon: "👨‍💻", title: "Expert Team", desc: "Experienced developers, ERP consultants, and cloud engineers delivering reliable solutions." },
        { icon: "⚡", title: "Fast Delivery", desc: "Agile execution ensures projects are delivered on time without compromising quality." },
        { icon: "✅", title: "Quality Focus", desc: "Every solution goes through strict QA and testing to maintain highest standards." },
        { icon: "🤝", title: "Customer Centric", desc: "We prioritize your goals, building solutions tailored for your unique business needs." },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="relative bg-[#1c2333] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-600/30 flex items-center justify-center text-2xl mb-6">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}