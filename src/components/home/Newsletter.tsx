"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4000);
  };

  return (
    <section className="relative w-full pb-10 sm:pb-14 bg-[#f7f6f0] dark:bg-[#101812] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Capsule Container */}
        <div className="relative rounded-[28px] sm:rounded-full bg-[#0b3829] text-white px-6 sm:px-10 lg:px-12 py-5 sm:py-6 shadow-[0_12px_40px_-12px_rgba(11,56,41,0.35)] flex flex-col lg:flex-row items-center justify-between gap-6 overflow-visible">
          {/* Decorative Background Curved Vine / Tendril on the Left */}
          <div className="absolute -left-2 top-0 bottom-0 w-28 pointer-events-none select-none overflow-hidden rounded-l-[28px] sm:rounded-l-full">
            <svg
              className="w-full h-full text-[#6ee740] opacity-45"
              viewBox="0 0 120 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M-10,85 C25,75 40,30 20,15 C2,0 -15,40 10,65 C35,90 60,70 50,45 C42,25 30,30 28,40" />
            </svg>
          </div>

          {/* Left Content Area: Icon + Title & Description */}
          <div className="relative z-10 flex items-center gap-4 sm:gap-5 w-full lg:w-auto">
            {/* Lime Green Mail Icon */}
            <div className="shrink-0">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-[#99f74a] fill-current"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rounded envelope shape */}
                <path
                  d="M8 12C5.79086 12 4 13.7909 4 16V32C4 34.2091 5.79086 36 8 36H40C42.2091 36 44 34.2091 44 32V16C44 13.7909 42.2091 12 40 12H8ZM9.41406 16H38.5859L24 26.9395L9.41406 16ZM7.17188 18.2324L18.4238 26.6719L7 33.5254V18.2324ZM40.8281 18.2324V33.5254L29.5762 26.6719L40.8281 18.2324ZM20.7305 28.4023L23.3887 30.3965C23.75 30.6675 24.25 30.6675 24.6113 30.3965L27.2695 28.4023L38.3887 35.0742H9.61133L20.7305 28.4023Z"
                />
              </svg>
            </div>

            {/* Typography */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                Stay Updated!
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm font-normal mt-0.5 leading-snug">
                Subscribe to our newsletter and never miss an important event.
              </p>
            </div>
          </div>

          {/* Right Form Area: Email Input & Subscribe Button */}
          <div className="relative z-10 w-full lg:w-auto">
            {isSubscribed ? (
              <div className="flex items-center gap-2 bg-[#99f74a]/20 border border-[#99f74a]/50 text-[#99f74a] px-5 py-2.5 rounded-full text-sm font-medium animate-in fade-in duration-300">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 w-full"
              >
                {/* Outlined Pill Input */}
                <div className="w-full sm:w-auto">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full sm:w-[280px] md:w-[320px] bg-transparent border border-white/35 text-white placeholder:text-zinc-400 text-xs sm:text-sm px-5 py-3 rounded-full outline-none focus:border-white focus:ring-1 focus:ring-white/50 transition-all"
                  />
                </div>

                {/* Lime Green Subscribe Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#b4f654] hover:bg-[#a1ec3e] text-zinc-950 font-bold px-7 sm:px-8 py-3 rounded-full text-xs sm:text-sm shadow-sm hover:shadow transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Decorative Green Leaves Overflowing on the Right Edge */}
          <div className="absolute -right-3 sm:-right-4 -top-3 sm:-top-4 w-16 sm:w-20 h-24 sm:h-28 pointer-events-none select-none z-20">
            <svg
              viewBox="0 0 100 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-md"
            >
              {/* Back Leaf */}
              <g transform="rotate(-15 50 60)">
                <path
                  d="M45 10C65 30 85 70 65 110C45 90 25 50 45 10Z"
                  fill="url(#leafGradientBack)"
                />
                <path
                  d="M45 10C55 50 55 80 65 110"
                  stroke="#5bb81d"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </g>

              {/* Front Vibrant Lime Leaf */}
              <g transform="rotate(22 60 70)">
                <path
                  d="M50 5C75 30 95 75 70 120C45 95 25 55 50 5Z"
                  fill="url(#leafGradientFront)"
                />
                {/* Center Leaf Vein */}
                <path
                  d="M50 5C60 45 62 85 70 120"
                  stroke="#83e62f"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Subtle side veins */}
                <path
                  d="M55 40C65 42 72 48 72 48"
                  stroke="#83e62f"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M58 60C68 62 76 68 76 68"
                  stroke="#83e62f"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M60 80C70 82 74 88 74 88"
                  stroke="#83e62f"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </g>

              <defs>
                <linearGradient
                  id="leafGradientFront"
                  x1="30"
                  y1="10"
                  x2="85"
                  y2="110"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#b5f756" />
                  <stop offset="0.6" stopColor="#96ee3d" />
                  <stop offset="1" stopColor="#6dc822" />
                </linearGradient>
                <linearGradient
                  id="leafGradientBack"
                  x1="30"
                  y1="20"
                  x2="80"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#75d326" />
                  <stop offset="1" stopColor="#4ca415" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
