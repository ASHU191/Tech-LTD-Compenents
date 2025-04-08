"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Sample images for the carousel
const images = [
  {
    main: "/images/c7.jpg",
    next: "/images/c8.jpg",
  },
  {
    main: "/images/c8.jpg",
    next: "/images/c9.jpg",
  },
  {
    main: "/images/c9.jpg",
    next: "/images/c10.jpg",
  },
  {
    main: "/images/c10.jpg",
    next: "/images/c11.jpg",
  },
  {
    main: "/images/c11.jpg",
    next: "/images/c7.jpg",
  },
]

export default function ShadowbeyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const changeSlide = (index: number) => {
    setIsAnimating(true)
    setCurrentSlide(index)

    // Reset animation state after animation completes
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
    }, 600) // Match this with the CSS transition duration
  }

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % images.length
    changeSlide(newIndex)
  }

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + images.length) % images.length
    changeSlide(newIndex)
  }

  // Auto-advance the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [currentSlide])

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-blackSoftware Services text-white overflow-x-hidden">
      {/* Showcase heading and paragraph centered over the carousel */}
      <div className="text-center pt-10 pb-6 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Showcase</h2>
        <p className="max-w-3xl mx-auto text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
        </p>
      </div>

      {/* Main content area - removed right padding to allow image to extend to edge */}
      <div className="relative flex items-center py-4">
        {/* Modified container to have padding only on the left */}
        <div className="w-full pl-6 lg:pl-8 pr-0">
          <div className="flex w-full overflow-hidden">
            {/* Left spacing div to create the offset effect */}
            <div className="hidden lg:block lg:w-[20%]"></div>

            {/* Content container with proper spacing */}
            <div className="w-full lg:w-[80%] flex">
              {/* Main card - with increased height and animation */}
              <div
                className={`w-[80%] rounded-3xl overflow-hidden transition-all duration-600 ease-in-out ${isAnimating ? "scale-[0.98] opacity-90" : "scale-100 opacity-100"}`}
                style={{
                  height: "min(700px, 70vh)",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <div className={`w-full h-full relative ${images[currentSlide].bgMain}`}>
                  <Image
                    src={images[currentSlide].main || "/placeholder.svg"}
                    alt={`Slide ${currentSlide + 1}`}
                    fill
                    style={{
                      objectFit: "cover",
                      transition: "transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transform: isAnimating ? "scale(1.1)" : "scale(1)",
                    }}
                    priority
                  />
                </div>
              </div>

              {/* Next card preview - extended to the edge of the viewport */}
              <div
                className={`w-[20%] rounded-l-3xl overflow-hidden ml-4 transition-all duration-600 ease-in-out ${isAnimating ? "scale-[0.98] opacity-90" : "scale-100 opacity-100"}`}
                style={{
                  height: "min(550px, 500vh)",
                  marginTop: "50px",
                  marginBottom: "50px",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <div className={`absolute inset-0 w-[200%] h-full ${images[currentSlide].bgNext}`}>
                  <div className="relative w-full h-full">
                    <Image
                      src={images[currentSlide].next || "/placeholder.svg"}
                      alt={`Next slide preview`}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "left center",
                        transition: "transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transform: isAnimating ? "scale(1.1) translateX(-5%)" : "scale(1) translateX(0)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer area with container class for proper centering */}
      <div className="container mx-auto px-6 lg:px-8 py-4 mt-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium">Shadowbey</h1>
            <p className="text-lg text-gray-400">App Development</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

