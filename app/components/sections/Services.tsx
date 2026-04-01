"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Odoo Implementation & Customization",
    desc: "End-to-end Odoo ERP implementation and customization.",
    icon: "⚙️",
  },
  {
    title: "ERP & CRM Solutions",
    desc: "Centralized operations and customer management.",
    icon: "📊",
  },
  {
    title: "Custom Web Applications",
    desc: "Secure, scalable web apps with modern frameworks.",
    icon: "🌐",
  },
  {
    title: "Mobile Application Development",
    desc: "Flutter & React Native apps for Android and iOS.",
    icon: "📱",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Payment gateways, inventory & checkout systems.",
    icon: "🛒",
  },
  {
    title: "Cloud & Infrastructure Services",
    desc: "AWS cloud, CI/CD, deployment & monitoring.",
    icon: "☁️",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold">
          Custom Software Solutions Built for Your Business
        </h2>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-10 text-left"
            >
              <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
