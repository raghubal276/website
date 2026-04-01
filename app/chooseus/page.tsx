"use client";

import { motion } from "framer-motion";

export default function Choosepage() {
  return (
    
        
        <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {[
              { title: "Expert Team", desc: "Experienced engineers delivering reliable solutions." },
              { title: "Fast Delivery", desc: "Agile execution with faster turnaround time." },
              { title: "Quality Focus", desc: "Every project undergoes strict quality checks." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="p-10 bg-gray-50 rounded-2xl border shadow-md"
              >
                <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-3">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}