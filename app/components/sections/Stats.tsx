
"use client";

import { motion } from "framer-motion";

export default function Stats() {
  return (

<section className="py-28 bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] text-center">
  <div className="max-w-7xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold text-white"
    >
      Our Impact in Numbers
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-6 max-w-3xl mx-auto text-lg text-gray-400"
    >
      Trusted by businesses globally, we deliver measurable results through innovative technology.
    </motion.p>

    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        { value: "200+", label: "Clients Served" },
        { value: "50+", label: "Projects Completed" },
        { value: "10+", label: "Years of Expertise" },
        { value: "95%", label: "Client Satisfaction" },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="bg-white/5 p-10 rounded-2xl border border-white/10 shadow-lg"
        >
          <h3 className="text-4xl font-bold text-purple-400">{stat.value}</h3>
          <p className="mt-2 text-gray-300">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


  );
}


