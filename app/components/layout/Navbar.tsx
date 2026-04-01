"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0b1220]/80 backdrop-blur border-b border-white/10">
    {/* <nav className="fixed w-full z-50 bg-[#020617] border-b border-white/10"> */}

      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* <div className="text-2xl font-bold text-Blue-400">
          Zokbee
        </div> */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/zokbee_logo_font_new_bg.png"
            alt="Company Logo"
            width={120}
            height={10}
            priority
            className="object-contain mix-blend-lighten"
          />
        </Link>
        

        <div className="hidden md:flex gap-8 items-center text-sm">
          <a href="/" className="hover:text-purple-400">Home</a>
          <a href="/#about" className="hover:text-purple-400">About</a>
          <a href="/services" className="hover:text-purple-400">Services</a>
          <a href="/contact" className="px-4 py-2 bg-purple-600 rounded-lg">
            Get Started
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0b1220] px-6 pb-6 flex flex-col gap-4">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="/contact" className="bg-purple-600 py-2 text-center rounded-lg">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
