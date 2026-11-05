"use client";

import React from "react";
import { ArrowRight, Search, Users, Heart, Leaf } from "lucide-react";

interface StepItem {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    number: 1,
    title: "Discover Events",
    description: "Find meaningful events near you.",
    icon: (
      <div className="relative flex items-center justify-center">
        <Search className="w-10 h-10 text-[#0b3829] stroke-[2.4]" />
        {/* Subtle vibrant green glow in center of lens */}
        <div className="absolute top-1.5 left-1.5 w-4 h-4 rounded-full bg-[#22c55e] opacity-80 pointer-events-none blur-[1px]" />
      </div>
    ),
  },
  {
    number: 2,
    title: "Join the Community",
    description: "Be part of a caring community.",
    icon: (
      <div className="flex items-center justify-center">
        <Users className="w-11 h-11 text-[#0b3829] stroke-[2.2] fill-[#0b3829]" />
      </div>
    ),
  },
  {
    number: 3,
    title: "Make an Impact",
    description: "Help others and create positive change.",
    icon: (
      <div className="flex items-center justify-center">
        <Heart className="w-11 h-11 text-[#0b3829] fill-[#0b3829] stroke-[1.5]" />
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-14 sm:py-20 bg-[#f7f6f0] dark:bg-[#101812] border-t border-zinc-200/50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading and Tag */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-4 sm:space-y-5">
            {/* Tag Badge */}
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#d8f993] text-[#13341b] tracking-wide shadow-sm">
                How It Works
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl dark:text-[#F3F5EF] sm:text-4xl lg:text-[44px] font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
              Get Involved <br />
              in 3 Simple Steps
            </h2>

            {/* Subtitle with small leaf flourish */}
            <p className="relative text-zinc-600 text-sm dark:text-[#B5C0B5] sm:text-base leading-relaxed max-w-sm">
              Together, we can make a difference in our community.
              {/* Sprout / leaf doodle */}
              <Leaf className="inline text-green-500 size-5 ml-1" />
            </p>
          </div>

          {/* Right Column: 3 Steps with Connecting Arrows */}
          <div className="lg:col-span-7 xl:col-span-8 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center lg:justify-between gap-8 md:gap-4 xl:gap-6">
              {steps.map((step, idx) => (
                <React.Fragment key={step.number}>
                  {/* Step Card */}
                  <div className="flex flex-col items-center text-center max-w-[210px] w-full group">
                    {/* Top Step Icon Container with Badge */}
                    <div className="relative mb-5">
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0b3829] text-white text-xs font-bold flex items-center justify-center shadow-md z-10">
                        {step.number}
                      </div>

                      {/* Rounded Lime Square Box */}
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-[28px] bg-[#e4f8c8] hover:bg-[#dcf4bd] flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-105 group-hover:shadow-md">
                        {step.icon}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg dark:text-[#F3F5EF]  sm:text-[19px] font-bold text-zinc-900 tracking-tight mb-2 group-hover:text-emerald-900 dark:group-hover:text-[#6ee1b5] transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-zinc-600 dark:text-[#B5C0B5] text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Arrow between steps (Hidden on mobile, visible on tablet/desktop) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center pt-12 text-[#9bb88c]">
                      <ArrowRight className="w-6 h-6 stroke-[2]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
