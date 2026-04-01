"use client";

import { motion } from "framer-motion";

export default function Benefits() {
  return (

<section className="py-28 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          The key benefits of using <br />
          our Services & tools.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-400"
        >
          Unlock the power of innovation with AI-powered ERP, web, mobile,
          and digital solutions built for scalability and growth.
        </motion.p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl p-10 text-left bg-gradient-to-br from-purple-600 to-indigo-600 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white">
              Enterprise ERP Solutions <br /> Powered by AI
            </h3>

            <p className="mt-4 text-purple-100 leading-relaxed">
              Optimize operations, enhance decision-making, and drive
              sustainable growth with secure, scalable ERP platforms.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["ERP", "AI", "Automation", "Analytics"].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm rounded-full bg-white/20 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl p-10 text-left bg-gradient-to-br from-sky-400 to-cyan-500 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white">
              Boost your Productivity <br /> 10X with AI Tools
            </h3>

            <p className="mt-4 text-sky-100 leading-relaxed">
              Discover intelligent AI tools that automate workflows,
              accelerate development, and improve business efficiency.
            </p>
          </motion.div>
        </div>

        {/* Bottom Wide Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl p-12 bg-gradient-to-r from-indigo-700 to-purple-700 text-left shadow-2xl"
        >
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold text-white">
              Transform Business Challenges <br /> into Digital Solutions
            </h3>

            <p className="mt-4 text-indigo-100">
              Leverage intelligent ERP systems, custom applications, and
              cloud solutions designed for performance, security, and scale.
            </p>

            <a
              href="/contact"
              className="inline-block mt-6 px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:bg-gray-200 transition"
            >
              Try it now for Free
            </a>
          </div>
        </motion.div>

      </div>
    </section>  
  );
}