"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
      <section className="py-28 bg-gradient-to-r from-purple-600 to-blue-600 text-center">
        <h2 className="text-4xl font-bold">Ready to Build Something Amazing?</h2>
        <p className="mt-4 text-lg text-blue-100">
          Let’s discuss your idea and turn it into reality.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block px-12 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>

  );
}