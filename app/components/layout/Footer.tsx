"use client";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Decorative Glow */}
      <span className="absolute top-0 -translate-x-1/2 left-1/2">
        <svg
          width="1260"
          height="457"
          viewBox="0 0 1260 457"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f)">
            <circle cx="630" cy="-173.3" r="230" fill="#3B2EFF" />
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="0"
              y="-803.3"
              width="1260"
              height="1260"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" />
              <feGaussianBlur stdDeviation="200" />
            </filter>
          </defs>
        </svg>
      </span>

      {/* Footer Content */}
      <div className="relative z-10 py-16 xl:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-y-12 gap-x-8 lg:grid-cols-12">

            {/* About */}
            <div className="lg:col-span-4">
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
              <p className="text-sm text-gray-400 mb-6">
                Transforming businesses with AI-powered ERP, web, mobile,
                and cloud solutions. We build scalable, secure, and
                intelligent systems for enterprises and startups.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/#about" className="hover:text-white">About</a></li>
                <li><a href="/services" className="hover:text-white">Services</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Docs</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-semibold mb-4">
                Subscribe to Newsletter
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Get updates about our AI, ERP, and software solutions.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold transition"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>

          
        </div>
      </div>
      {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 text-center">
            <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Zokbee. All rights reserved.
            </p>
        </div>

    </footer>
  );
}
