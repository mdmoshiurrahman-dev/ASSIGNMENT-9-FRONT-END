"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Image as ImageIcon,
  Tag,
  Clock,
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
const CreateEventFrom = () => {
  //   const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const event_create_date = new Date().toISOString();
    // setLoading(true);
    const fromData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(fromData.entries());
    const finalData = { ...data, event_create_date };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    });
    console.log(res);
  };
  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 pb-16 z-10">
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] border border-zinc-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-zinc-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>Event Information</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Fill in the necessary information below to organize your social
              impact event.
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
                  name="event_title"
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
                 // desible past date select opt
                  onFocus={(e) => {
                    e.target.min = new Date().toISOString().split("T")[0];
                  }}
                  type="date"
                  id="date"
                  name="event_date"
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
                  name="event_cover_image"
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
                  name="event_description"
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
              //   disabled={loading}
              className="w-full sm:w-auto rounded-full px-8 h-11 bg-[#0b3829] hover:bg-[#07261c] text-white font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              {/* {loading ? "Publishing..." : "Publish Event"} */}
              Publish Event
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateEventFrom;
