"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Plus,
} from "lucide-react";

const communityAvatars = [
  { src: "/images/avatars/avatar1.jpg", alt: "Volunteer member 1" },
  { src: "/images/avatars/avatar2.jpg", alt: "Volunteer member 2" },
  { src: "/images/avatars/avatar3.jpg", alt: "Volunteer member 3" },
  { src: "/images/avatars/avatar4.jpg", alt: "Volunteer member 4" },
];

const stats = [
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
    value: "250+",
    label: "Events Organized",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "50K+",
    label: "Volunteers Joined",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-800"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    value: "100+",
    label: "Communities Helped",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    value: "5+",
    label: "Years of Impact",
  },
];

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden pt-4 pb-12 lg:pt-8 lg:pb-16">
      {/* Background Organic Shapes */}
      {/* Top right organic wavy wave */}
      <div className="absolute top-0 right-0 w-[55%] h-[260px] pointer-events-none z-10 hidden md:block">
        <svg
          viewBox="0 0 700 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <path
            d="M0 0C120 40 280 80 420 50C560 20 640 0 700 0V260C620 220 500 240 380 200C240 150 100 210 0 260V0Z"
            fill="#edf5ed"
            fillOpacity="0.45"
          />
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[500px] lg:min-h-[560px]">
          {/* Left Column: Typography, CTAs, Social Proof */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-2 lg:pt-6">
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-extrabold tracking-tight text-zinc-900 leading-[1.08]">
              Small Acts.
              <span className="relative block text-[#15803d] mt-1 sm:mt-2">
                Big Change.
                {/* Hand-drawn Green Doodle Above 'Big' */}
                <svg
                  className="absolute -top-7 sm:-top-9 left-2 sm:left-4 w-12 sm:w-16 h-8 text-[#16a34a] pointer-events-none"
                  viewBox="0 0 50 35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                >
                  <path d="M10 28C18 18 26 10 35 4" />
                  <path d="M22 30C28 21 34 13 42 7" />
                </svg>
                {/* Hand-drawn Green Underline Beneath 'Change.' */}
                <svg
                  className="absolute -bottom-3 sm:-bottom-4 left-0 w-[240px] sm:w-[320px] h-4 text-[#16a34a]/80 pointer-events-none"
                  viewBox="0 0 320 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M4 10C65 14 160 13 240 7C275 4.5 300 8.5 316 11" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-base sm:text-lg text-zinc-600 max-w-lg leading-relaxed font-normal">
              Join community events, help people, and build a kinder, stronger
              society together.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              {/* Primary: Explore Events */}
              <Link
                href="/events"
                className="inline-flex items-center gap-2.5 bg-[#0a382c] hover:bg-[#0f4d3d] text-white px-7 py-3.5 rounded-full font-semibold text-base shadow-sm hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5 text-emerald-300 stroke-[2]" />
                <span>Explore Events</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              {/* Secondary: Create an Event */}
              <Link
                href="/create-event"
                className="inline-flex items-center gap-2 border-2 border-[#0a382c] text-[#0a382c] hover:bg-[#0a382c]/5 px-7 py-3.5 rounded-full font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Plus className="w-5 h-5 stroke-[2.5]" />
                <span>Create an Event</span>
              </Link>
            </div>

            {/* Social Proof Community Avatars */}
            <div className="mt-10 sm:mt-12 flex items-center gap-4">
              <div className="flex -space-x-3 overflow-hidden p-0.5">
                {communityAvatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="relative w-11 h-11 rounded-full hover:scale-105 ring-2 ring-white overflow-hidden shadow-sm bg-zinc-200"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      width={44}
                      height={44}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-zinc-800 leading-snug">
                <span className="font-bold text-zinc-950">10K+</span> People are
                part
                <br />
                <span className="text-zinc-600 font-normal">
                  of our community
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Organic Curved Accents */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-[620px] h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl lg:rounded-[40px] overflow-hidden shadow-2xl shadow-emerald-950/10">
              {/* Background volunteer photo */}
              <Image
                src="/images/volunteer-hero.jpg"
                alt="Volunteers in green shirts helping community members with warmth and care"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
              />

              {/* Seamless Left Edge Blend Gradient for Natural Integration */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#f8faf8]/90 via-[#f8faf8]/40 to-transparent pointer-events-none" />

              {/* Bottom organic translucent chartreuse/green curves */}
              <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none">
                <svg
                  viewBox="0 0 600 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full object-cover"
                >
                  <path
                    d="M-20 160C80 80 240 60 400 120C480 150 560 160 620 160H-20Z"
                    fill="#84cc16"
                    fillOpacity="0.35"
                  />
                  <path
                    d="M120 160C220 100 360 80 500 110C560 125 600 145 640 160H120Z"
                    fill="#22c55e"
                    fillOpacity="0.25"
                  />
                </svg>
              </div>
              {/* Bottom-left floating leaf graphic */}
              <div className="absolute bottom-4 left-6 pointer-events-none drop-shadow-sm">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 36C12 36 10 24 22 14C34 4 44 4 44 4C44 4 42 16 32 26C20 38 12 36 12 36Z"
                    fill="#a3e635"
                    fillOpacity="0.85"
                  />
                  <path
                    d="M12 36C22 26 34 16 44 4"
                    stroke="#15803d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeOpacity="0.6"
                  />
                </svg>
              </div>
            </div>

            {/* Right side large circular accent arc */}
            <div className="absolute -right-8 -bottom-10 w-44 h-44 rounded-full border-[18px] border-lime-400/40 pointer-events-none hidden sm:block -z-10" />
          </div>
        </div>

        {/* Bottom Floating Stats Strip */}
        <div className="mt-14 sm:mt-18 relative z-30">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl shadow-zinc-200/60 border border-zinc-100/90 py-6 px-6 sm:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 sm:gap-5 ${
                    index !== 0 ? "lg:border-l lg:border-zinc-200/80 lg:pl-8" : ""
                  }`}
                >
                  {/* Green Icon Box */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-800">
                    {stat.icon}
                  </div>

                  {/* Stat text */}
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-500 font-medium whitespace-nowrap mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
