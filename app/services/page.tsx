"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Odoo Implementation & Customization", desc: "Streamline your business operations with tailored Odoo solutions. From customization to integrations, we build Odoo systems that fit your workflow", icon: "⚙️" },
  { title: "ERP & CRM Solutions", desc: "Centralize data, automate processes, and strengthen customer relationships with scalable ERP and CRM systems built for growth.", icon: "📊" },
  { title: "Custom Web Applications", desc: "Build secure, high-performance web applications designed for scalability, speed, and seamless user experiences.", icon: "🌐" },
  { title: "Mobile Application Development", desc: "Deliver powerful mobile experiences with intuitive Android and iOS applications crafted for performance and usability.", icon: "📱" },
  { title: "E-Commerce Solutions", desc: "Launch and scale your online business with robust e-commerce platforms, secure payments, and smooth order management.", icon: "🛒" },
  { title: "Cloud & Infrastructure Services", desc: "Enhance scalability, security, and performance with cloud solutions designed for modern, data-driven businesses.", icon: "☁️" },
];

export default function ServicesPage() {
  return (
    <section className="py-28 bg-gray-50 min-h-screen">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl font-extrabold text-gray-900">
      Custom Software Solutions Built for Your Business
    </h1>

    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
      We design and develop scalable software solutions that help businesses
      operate smarter, faster, and more efficiently.
    </p>

    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          className="rounded-2xl bg-white border border-gray-200 p-10 text-left shadow-sm hover:shadow-xl transition"
        >
          <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center mb-6 text-white">
            {service.icon}
          </div>

          <h3 className="text-xl font-semibold text-gray-900">
            {service.title}
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}
