"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import {
  Calendar,
  MapPin,
  Users,
  Image as ImageIcon,
  Tag,
  FileText,
  Clock,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  "Plantation",
  "Donation",
  "Cleanup",
  "Food Drive",
  "Education",
  "Healthcare",
  "Animal Welfare",
  "Community Service",
];

export default function CreateEventPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="min-h-screen bg-[#f8faf8] text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col justify-between">
      <div>
        {/* Top Header Banner Section */}
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

        {/* Event Form Section */}
        <section className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 pb-16 z-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] border border-zinc-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-zinc-100 pb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span>Event Information</span>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                  Fill in the necessary information below to organize your
                  social impact event.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Event Title */}
                <div className="md:col-span-2 space-y-1.5">
                  <label
                    htmlFor="title"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Event Title <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      placeholder="e.g. Winter Blanket Distribution Drive"
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="category"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Category <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Tag className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="category"
                      name="category"
                      required
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all cursor-pointer"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="location"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Location / Area <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      placeholder="e.g. Dhanmondi, Dhaka"
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="date"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Event Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="time"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Time <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Image URL / Banner */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="imageUrl"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Event Cover Image URL
                  </label>
                  <div className="relative">
                    <ImageIcon className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="url"
                      id="imageUrl"
                      name="imageUrl"
                      placeholder="https://example.com/event-image.jpg"
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Event Description */}
                <div className="md:col-span-2 space-y-1.5">
                  <label
                    htmlFor="description"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Event Description <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      placeholder="Provide details about the event, objectives, what volunteers should bring, and meeting point..."
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl p-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all resize-y"
                    />
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 border-t border-zinc-100">
                <Link href="/" className="w-full sm:w-auto">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full px-6 h-11 border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto rounded-full px-8 h-11 bg-[#0b3829] hover:bg-[#07261c] text-white font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? "Publishing..." : "Publish Event"}
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
