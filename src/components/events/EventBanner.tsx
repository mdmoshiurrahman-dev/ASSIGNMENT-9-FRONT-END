import { Calendar } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const EventBanner = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#dcf4af] via-[#e5f8be] to-[#d4f1a2]  overflow-hidden border-b border-black/[0.04]">
        {/* Subtle decorative background greenery wash on far left */}
        <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none opacity-40 select-none">
          <svg
            viewBox="0 0 100 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
          >
            <path
              d="M-20 30C15 50 35 90 20 140C5 110 -5 70 -20 30Z"
              fill="#529928"
            />
            <path
              d="M-10 110C20 130 35 165 25 200C10 180 0 150 -10 110Z"
              fill="#6cb538"
            />
          </svg>
        </div>

        {/* Center-Right Volunteers Photography with Smooth Gradient Mask */}
        <div className="absolute right-12 sm:right-28  md:right-40 lg:right-56 inset-y-0 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[520px] pointer-events-none select-none overflow-hidden opacity-90 lg:opacity-100">
          <div className="relative w-full h-full">
            <Image
              src="/images/events/tree-plantation.jpg"
              alt="Community Volunteers Planting Trees"
              fill
              priority
              sizes="(max-width: 768px) 50vw, 520px"
              className="object-cover object-center"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
              }}
            />
            {/* Subtle soft green blend overlay */}
            <div className="absolute inset-0 bg-[#e0f6b4]/20 mix-blend-color" />
          </div>
        </div>

        <div className="max-w-[1440px] bg-[#FFFFFF80] md:bg-transparent py-12 sm:py-16 lg:py-20 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">
            {/* Left Content Area: Badge, Title & Subtitle */}
            <div className="space-y-4 sm:space-y-5 max-w-xl text-center md:text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-zinc-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-xs">
                <Calendar className="w-4 h-4 text-emerald-700 stroke-[2.2]" />
                <span>Join & Make a Difference</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-[#08281d] tracking-tight leading-[1.12]">
                Upcoming{" "}
                <span className="relative inline-block text-[#15803d]">
                  Events
                  {/* Hand-drawn green doodle swoop underline */}
                  <svg
                    className="absolute -bottom-2.5 sm:-bottom-3.5 left-0 w-full h-3.5 text-[#16a34a] pointer-events-none"
                    viewBox="0 0 120 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C35 4 80 3 118 9"
                      stroke="currentColor"
                      strokeWidth="3.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Playful accent ticks above right */}
                  <span className="absolute -top-3.5 -right-5 text-[#16a34a] font-bold select-none">
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
                Discover and join community service events near you.
              </p>
            </div>

            {/* Far Right Area: "Together for a Better Community" Hand-drawn Typography & Sprout */}
            <div className="shrink-0 flex items-center justify-center relative">
              <div className="relative text-right sm:text-left select-none pr-4 sm:pr-8 py-2">
                {/* Upper tick marks */}
                <div className="flex items-center gap-1.5 justify-end sm:justify-start -mb-1 opacity-70">
                  <span className="w-3.5 h-[2px] bg-[#165b2a] rotate-[30deg] inline-block" />
                  <span className="w-3.5 h-[2px] bg-[#165b2a] rotate-[30deg] inline-block" />
                </div>

                {/* Handwritten Calligraphy Style Text */}
                <div className="font-serif italic text-emerald-950 font-bold leading-none space-y-1">
                  <div className="text-2xl sm:text-3xl md:text-[34px] tracking-tight">
                    Together
                  </div>
                  <div className="text-xl sm:text-2xl md:text-[28px] font-normal text-emerald-900 tracking-tight">
                    for a Better
                  </div>
                  <div className="relative inline-block text-2xl sm:text-3xl md:text-[34px] tracking-tight">
                    <span>Community</span>
                    {/* Underline beneath Community */}
                    <div className="w-full h-[2.5px] bg-[#165b2a] mt-1 rounded-full" />
                  </div>
                </div>

                {/* Decorative Green Leaves peeking behind right */}
                <div className="absolute -right-3 sm:-right-6 -bottom-3 sm:-bottom-4 w-12 sm:w-16 h-16 sm:h-20 pointer-events-none opacity-85">
                  <svg
                    viewBox="0 0 80 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-xs"
                  >
                    <g transform="rotate(25 40 50)">
                      <path
                        d="M38 5C58 25 74 60 55 95C35 75 20 45 38 5Z"
                        fill="#64be28"
                      />
                      <path
                        d="M38 5C45 35 48 65 55 95"
                        stroke="#8bf04d"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </g>
                    <g transform="rotate(-20 30 60)">
                      <path
                        d="M30 15C48 32 60 62 44 90C28 72 15 48 30 15Z"
                        fill="#4c9a1d"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default EventBanner