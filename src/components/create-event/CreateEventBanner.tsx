import { Calendar } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CreateEventBanner = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#d9f4a4] via-[#e5f9be] to-[#c7ec84] py-10 sm:py-14 lg:py-16 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              {/* Left Column: Badge, Title & Subtitle */}
              <div className="space-y-3 sm:space-y-4 max-w-2xl text-center md:text-left">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-zinc-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-xs">
                  <Calendar className="w-4 h-4 text-emerald-700 stroke-[2.2]" />
                  <span>Join & Make a Difference</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#08281d] tracking-tight leading-[1.12]">
                  Create a New{" "}
                  <span className="relative inline-block text-[#15803d]">
                    Event
                    {/* Doodle underline beneath Event */}
                    <svg
                      className="absolute -bottom-2.5 sm:-bottom-3 left-0 w-full h-3 text-[#16a34a] pointer-events-none"
                      viewBox="0 0 100 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7C25 4 65 3 98 8"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Hand-drawn accent ticks above right */}
                    <span className="absolute -top-3.5 -right-5 text-[#16a34a] font-bold text-lg select-none">
                      <svg
                        className="w-5 h-5 text-[#16a34a]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                      >
                        <path d="M14 4L18 8" />
                        <path d="M8 2L12 6" />
                      </svg>
                    </span>
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-zinc-700 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                  Add details and help build a kinder, stronger society.
                </p>
              </div>

              {/* Right Column: "Together for a better society" Artwork */}
              <div className="shrink-0 flex items-center justify-center">
                <div className="relative w-44 h-full sm:w-56 md:w-64 lg:w-72">
                  <Image
                    src="/together_for_better_socity.jpeg"
                    alt="Together for a better society"
                    width={320}
                    height={200}
                    priority
                    className="w-full h-auto object-contain mix-blend-multiply select-none pointer-events-none drop-shadow-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default CreateEventBanner