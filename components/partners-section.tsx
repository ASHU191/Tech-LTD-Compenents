"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Cpu } from "lucide-react"
import Img1 from "../public/images/partners-section.png"
import Logo1 from "../public/images/1.png"
import Logo2 from "../public/images/2.png"
import Logo3 from "../public/images/3.png"
import Logo4 from "../public/images/4.png"
import Logo5 from "../public/images/5.png"

export default function PartnersSection() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5]
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % logos.length)
  }

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + logos.length) % logos.length)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  // Pause auto-play when user interacts with carousel
  const handleInteraction = () => {
    setIsAutoPlaying(false)
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  return (
    <div id="about" className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Partners Section in a Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          {/* Text Section */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold">Proud partners of</h2>
            <p className="text-xl">Saylani Tech Limited</p>
          </div>

          {/* Mobile Carousel - Only visible on mobile */}
          <div className="block md:hidden w-full">
            <div className="relative">
              {/* Carousel container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {logos.map((logo, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex justify-center items-center p-4">
                      <Image
                        src={logo || "/placeholder.svg"}
                        alt={`Partner logo ${index + 1}`}
                        width={120}
                        height={60}
                        className="max-w-full max-h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={() => {
                  prevSlide()
                  handleInteraction()
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  nextSlide()
                  handleInteraction()
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center mt-4 gap-2">
                {logos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index)
                      handleInteraction()
                    }}
                    className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-purple-900" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Partner Logos in a Single Row - Hidden on mobile */}
          <div className="hidden md:flex flex-wrap justify-center lg:justify-end items-center gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="w-32 h-16 flex items-center justify-center">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Partner logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Software Services (Row Layout) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-20">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            {/* Larger Cpu icon without border */}
            <div className="mb-6">
              <Cpu className="w-16 h-16 text-purple-900" />
            </div>

            <h2 className="text-4xl font-bold mb-6">Software Services</h2>

            <p className="text-gray-600 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu. In hac habitasse platea
              dictumst. Lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu. In hac
              habitasse platea dictumst.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 rounded-xl overflow-hidden">
            <Image
              src={Img1 || "/placeholder.svg"}
              alt="Data center with blue lighting"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
