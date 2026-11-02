import React from "react";
import Image from "next/image";
import { IEvent } from "@/types/event";
import {
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import JoinEventCard from "./JoinEventCard";

interface EventMainDetailsProps {
  event: IEvent;
}


const EventMainDetails = ({ event }:EventMainDetailsProps) => {
  return (
    <div className="w-full space-y-6">
      {/* Event Cover Image with Category Badge */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] md:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200/70">
        <Image
          src={event.event_cover_image || "/images/events/child-education.jpg"}
          alt={event.event_title || "Event Cover Image"}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
          className="object-cover"
        />

        {/* Overlay Dark Green Pill Badge */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
          <div className="inline-flex items-center gap-2 bg-[#1b4d2e] text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-md backdrop-blur-xs">
            <span>{event.category}</span>
          </div>
        </div>
      </div>

      {/* Host Details Section */}
     <div className="flex justify-between flex-col md:flex-row">
       <div className="pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
          Host Details
        </h2>

        {/* Host Profile Info */}
        <div className="mt-4 flex items-center gap-3.5 sm:gap-4">
          {/* Avatar with circular green border ring */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2.5px] border-2 border-emerald-600 bg-white shadow-xs shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/avatars/user.jpg"
                alt="SocialServe Team Host Avatar"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Name & Designation */}
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
              Md Reyad Ahmed
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 font-normal">
              mdreyadahmed36@gmail.com
            </p>
          </div>
        </div>

        {/* Divider line as seen in UI */}
        <div className="mt-6 border-b border-zinc-200/90" />
      </div>
      <div className="md:flex justify-center items-center">
        <JoinEventCard/>
      </div>
     </div>

      {/* Additional Event Overview & Description (Seamless Extension) */}
      {event.event_description && (
        <div className="pt-2 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            {event.event_title}
          </h1>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-600">
              <div className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-lg">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-zinc-700">
                  {event.event_date}
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-lg">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-zinc-700">{event.time}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-lg">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-zinc-700">
                  {event.location}
                </span>
              </div>
          </div>

          <div className="prose prose-zinc max-w-none text-zinc-600 leading-relaxed text-sm sm:text-base pt-2">
            <p>{event.event_description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventMainDetails;
