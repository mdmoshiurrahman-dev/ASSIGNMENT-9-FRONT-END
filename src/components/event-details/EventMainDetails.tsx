import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import JoinEventCard from "./JoinEventCard";
import { Event } from "@/types/event";
import { IoPerson } from "react-icons/io5";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { EventJoin, EventJoinNeeds } from "@/types/EventJoinRes";
import { getJwtTokenFromServer } from "@/lib/getJwtTokenFromServer";

const EventMainDetails = async ({ event }: { event: Event }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  let joinUserData: EventJoin = { events: [], participant_email: "", _id: "" };
  if (session?.user?.email) {
    try {
      const token = await getJwtTokenFromServer();
      if (token) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/get-join-event/${session.user.email}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        if (res.ok) {
          joinUserData = await res.json();
        }
      }
    } catch (err) {
      console.warn("Failed to fetch join info:", err);
    }
  }

  const data: EventJoinNeeds = { ...joinUserData, event_id: event._id };

  return (
    <div className="w-full  space-y-6">
      {/* Event Cover Image with Category Badge */}
      <div className="relative w-full aspect-[16/9]  sm:aspect-[21/10] md:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200/70">
        <Image
          src={event.event_cover_image}
          alt={event.event_title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
          <div className="inline-flex items-center gap-2 bg-[#1b4d2e] text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-md backdrop-blur-xs">
            <span>{event.category}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="pt-2">
          <h2 className="text-xl sm:text-2xl dark:text-[#F3F5EF] font-bold text-zinc-900 tracking-tight">
            Host Details
          </h2>

          {/* Host Profile Info */}
          <div className="mt-4 flex items-center gap-3.5 sm:gap-4">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2.5px] border-2 border-emerald-600 bg-white shadow-xs shrink-0">
              <div className="relative flex justify-center items-center w-full h-full rounded-full overflow-hidden">
                {event.creator_image ? (
                  <Image
                    src={event.creator_image}
                    alt="SocialServe Team Host Avatar"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                ) : (
                  <IoPerson className="size-16" />
                )}
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg dark:text-[#F3F5EF] font-bold text-zinc-900 leading-snug">
                {event.creator_name}
              </h3>
              <p className="text-xs sm:text-sm dark:text-[#B5C0B5] text-zinc-500 font-normal">
                {event.creator_email}
              </p>
            </div>
          </div>
          <div className="mt-6 border-b border-zinc-200/90" />
        </div>
        <div className="md:flex justify-center items-center">
          <JoinEventCard data={data} />
        </div>
      </div>
      <div className="pt-2 space-y-4">
        <h1 className="text-2xl sm:text-3xl dark:text-[#F3F5EF] font-extrabold text-zinc-900 tracking-tight">
          {event.event_title}
        </h1>
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
            <span className="font-medium text-zinc-700">{event.location}</span>
          </div>
        </div>

        <div className="prose dark:text-[#B5C0B5] prose-zinc max-w-none text-zinc-600 leading-relaxed text-sm sm:text-base pt-2">
          <p>{event.event_description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventMainDetails;
