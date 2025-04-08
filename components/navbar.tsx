"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/saylani-logo.png" // Corrected path (file should be in /public folder)
              alt="Saylani Tech Limited"
              width={150} // Adjust width as needed
              height={40} // Adjust height as needed
              priority // Optimizes loading for above-the-fold images
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              "Home",
              "About",
              "Services",
              "Contact",
              "Team",
              "Portfolio",
              "Career",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-rose-400 transition"
              >
                {item}
              </Link>
            ))}
           <button className="bg-[#4D143D] hover:bg-rose-700 text-white px-4 py-2 rounded-md transition">
  Get Started →
</button>

          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {[
              "Home",
              "About",
              "Services",
              "Contact",
              "Team",
              "Portfolio",
              "Career",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-rose-400 transition py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="bg-[#4D143D] hover:bg-rose-700 text-white px-4 py-2 rounded-md transition w-full">
              Get Started →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
