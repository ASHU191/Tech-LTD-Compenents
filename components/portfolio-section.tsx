"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

import Project1 from "../public/images/partners-section.png"
import Project2 from "../public/images/testimonial-section.png"
import Project3 from "../public/images/partners-section.png"
import Project4 from "../public/images/testimonial-section.png"
import Project5 from "../public/images/testimonial-section.png"

// Sample project data
const projects = [
  {
    id: 1,
    image: Project1,
    alt: "Project 1",
  },
  {
    id: 2,
    image: Project2,
    alt: "Project 2",
  },
  {
    id: 3,
    image: Project3,
    alt: "Project 3",
  },
  {
    id: 4,
    image: Project4,
    alt: "Project 4",
  },
  {
    id: 5,
    image: Project5,
    alt: "Project 5",
  },
]

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = projects.length
  const isFirstSlide = currentIndex === 0

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    setCurrentPage((prev) => (prev % totalPages) + 1)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1))
  }

  // Calculate which projects to show (current, prev, next)
  const visibleProjects = [
    projects[(currentIndex - 1 + projects.length) % projects.length],
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
  ]

  return (
    <div id="portfolio" className="bg-black text-white py-16 px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Showcase</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>
        </div>

        {/* Portfolio showcase carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left card (previous project) - hidden on first slide */}
          {!isFirstSlide && (
            <div className="hidden lg:block lg:col-span-3 rounded-3xl overflow-hidden">
              <div className="h-[550px] w-full">
                <Image
                  src={visibleProjects[0].image || "/placeholder.svg"}
                  alt={visibleProjects[0].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Center card (current project) - takes full width on first slide */}
          <div className={`lg:col-span-${isFirstSlide ? "9" : "6"} rounded-3xl overflow-hidden`}>
            <div className="h-[550px] w-full">
              <Image
                src={visibleProjects[1].image || "/placeholder.svg"}
                alt={visibleProjects[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right card (next project) */}
          <div className="hidden lg:block lg:col-span-3 rounded-3xl overflow-hidden">
            <div className="h-[550px] w-full">
              <Image
                src={visibleProjects[2].image || "/placeholder.svg"}
                alt={visibleProjects[2].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Portfolio navigation */}
        <div className="flex justify-between items-center mt-8">
          <div>
            <h2 className="text-3xl font-bold">Shadowbey</h2>
            <p className="text-gray-400">App Development</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-gray-500 text-sm mr-4">
              {currentPage} / {totalPages}
            </div>

            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center transition hover:bg-gray-800"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center transition hover:bg-gray-800"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

