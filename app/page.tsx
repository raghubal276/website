"use client";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Benefits from "./components/sections/Benefits";
import Stats from "./components/sections/Stats";
import CTA from "./components/sections/CTA";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden bg-[#0b1220] text-white">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Benefits />
      {/* <Stats /> */}
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}
