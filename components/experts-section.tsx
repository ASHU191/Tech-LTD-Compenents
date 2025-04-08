  "use client"
  import { useState, useEffect, useRef } from "react"
  import Image from "next/image"
  import { ChevronLeft, ChevronRight } from "lucide-react"
  import Member1 from "../public/images/member1.png"
  import Member2 from "../public/images/member2.png"
  import Member3 from "../public/images/member3.png"
  import Member4 from "../public/images/member4.png"

  export default function ExpertsSection() {
    const teamMembers = [
      {
        id: 1,
        name: "John Doe",
        role: "Lead Developer",
        image: Member1,
      },
      {
        id: 2,
        name: "Jane Smith",
        role: "UX Designer",
        image: Member2,
      },
      {
        id: 3,
        name: "Robert Johnson",
        role: "Project Manager",
        image: Member3,
      },
      {
        id: 4,
        name: "Emily Davis",
        role: "Marketing Specialist",
        image: Member4,
      },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

    // Function to go to next slide
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length)
    }

    // Function to go to previous slide
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
    }

    // Auto-play functionality
    useEffect(() => {
      if (isAutoPlaying) {
        autoPlayRef.current = setInterval(() => {
          nextSlide()
        }, 4000)
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
      <div id="team" className="bg-black text-white py-20">
        {/* Content */}
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">Meet Our Experts</h2>
          <p className="max-w-4xl mx-auto text-lg mb-16">
            While vulnerability can help build trust, it's not the only way. Trust also grows through reliability, clear
            communication, and consistent actions, allowing team members to feel secure without needing to expose personal
            vulnerabilities.
          </p>

          {/* Mobile Carousel - Only visible on mobile */}
          <div className="md:hidden">
            <div className="relative px-4">
              {/* Carousel container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {teamMembers.map((member) => (
                    <div key={member.id} className="w-full flex-shrink-0 px-2">
                      <div className="bg-gray-900 rounded-lg overflow-hidden group">
                        <div className="relative h-96 overflow-hidden">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            style={{ objectFit: "cover" }}
                            className="transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <div>
                              <h3 className="text-xl font-bold">{member.name}</h3>
                              <p className="text-rose-400">{member.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
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
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={() => {
                  nextSlide()
                  handleInteraction()
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center mt-6 gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index)
                      handleInteraction()
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentSlide === index ? "bg-rose-500" : "bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Team members grid - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-rose-400">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

