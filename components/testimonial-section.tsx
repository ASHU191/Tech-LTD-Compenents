"use client";
import Image from "next/image";
import TestimonialImg from "../public/images/testimonial-section.png";

export default function TestimonialSection() {
  return (
    <div id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="bg-black text-white py-20 px-6 lg:px-8 rounded-3xl max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Logo and testimonial */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="text-lime-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider">SHADOWBEY</h3>
                  <p className="text-xs uppercase tracking-widest">DIGITAL AGENCY</p>
                </div>
              </div>

              {/* Testimonial */}
              <div>
                <blockquote className="text-3xl font-medium leading-tight mb-6">
                  "From the initial concept discussions to the final product, their team was attentive, innovative, and
                  professional throughout the entire process."
                </blockquote>

                <div>
                  <p className="text-xl font-bold">Romail Ahmed</p>
                  <p className="text-gray-400">CEO of Shadowbey</p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={TestimonialImg} // ✅ Use imported image here
                alt="Person giving presentation"
                width={600}
                height={400}
                className="w-full h-auto"
              />

              {/* Play button overlay */}
              <div className="absolute bottom-4 right-4 bg-white bg-opacity-20 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
