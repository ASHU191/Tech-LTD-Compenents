"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Img1 from "../public/images/Angular.png"
import Img2 from "../public/images/React.png"
import Img3 from "../public/images/Flutter.png"
import Img4 from "../public/images/C++.png"
import Img5 from "../public/images/Web.png"

export default function TechSection() {
  const orbitRef1 = useRef<HTMLDivElement>(null)
  const orbitRef2 = useRef<HTMLDivElement>(null)
  const orbitRef3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const orbit1 = orbitRef1.current
    const orbit2 = orbitRef2.current
    const orbit3 = orbitRef3.current

    if (orbit1 && orbit2 && orbit3) {
      let rotation1 = 0
      let rotation2 = 180
      let rotation3 = 90

      const animate = () => {
        rotation1 += 0.3
        rotation2 += 0.5
        rotation3 += 0.8

        orbit1.style.transform = `translate(-50%, -50%) rotate(${rotation1}deg)`
        orbit2.style.transform = `translate(-50%, -50%) rotate(${rotation2}deg)`
        orbit3.style.transform = `translate(-50%, -50%) rotate(${rotation3}deg)`

        requestAnimationFrame(animate)
      }

      animate()
    }
  }, [])

  return (
    <div id="services" className="relative bg-black text-white py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              We Use Top Notch
              <br />
              100% Technologies
            </h2>
            <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto lg:mx-0">
              We leverage cutting-edge, 100% reliable technologies to deliver robust, high-performance solutions. Our
              focus on innovation ensures you get the best tools and systems tailored to your needs, driving success and
              efficiency.
            </p>
          </div>

          {/* Orbiting Tech Icons */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] mx-auto w-full max-w-[500px]">
            {/* Center label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-rose-400">Saylani</h3>
              <p className="text-base md:text-lg lg:text-xl">Tech limited</p>
            </div>

            {/* Outer Orbit */}
            <div
              ref={orbitRef1}
              className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full"
              style={{ transform: "translate(-50%, -50%) rotate(0deg)" }}
            >
              <div className="absolute inset-0 rounded-full border border-gray-700 border-dashed"></div>

              {/* React */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
                <Image src={Img2} alt="React" width={24} height={24} className="object-contain" />
              </div>

              {/* Angular */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
                <Image src={Img1} alt="Angular" width={24} height={24} className="object-contain" />
              </div>

              {/* Dot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
            </div>

            {/* Middle Orbit */}
            <div
              ref={orbitRef2}
              className="absolute top-1/2 left-1/2 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full"
              style={{ transform: "translate(-50%, -50%) rotate(0deg)" }}
            >
              <div className="absolute inset-0 rounded-full border border-gray-700 border-dashed"></div>

              {/* C++ */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-blue-500 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
                <Image src={Img4} alt="C++" width={24} height={24} className="object-contain" />
              </div>

              {/* Web */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-blue-500 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
                <Image src={Img5} alt="Web" width={24} height={24} className="object-contain" />
              </div>

              {/* Dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
            </div>

            {/* Inner Orbit */}
            <div
              ref={orbitRef3}
              className="absolute top-1/2 left-1/2 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[270px] md:h-[270px] lg:w-[300px] lg:h-[300px] rounded-full"
              style={{ transform: "translate(-50%, -50%) rotate(0deg)" }}
            >
              <div className="absolute inset-0 rounded-full border border-gray-700 border-dashed"></div>

              {/* Flutter */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-blue-600 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
                <Image src={Img3} alt="Flutter" width={24} height={24} className="object-contain" />
              </div>

              {/* Dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#000"
            d="M0,224L120,213.3C240,203,480,181,720,181.3C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}
