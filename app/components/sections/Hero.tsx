"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-purple-600/30 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Transform Your Business <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            with ERP & AI Technology
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-300"
        >
          From ERP customization and cloud platforms to web, mobile,
          and AI-powered applications — we build technology that drives growth.
        </motion.p>
      </div>
    </section>
  );
}
