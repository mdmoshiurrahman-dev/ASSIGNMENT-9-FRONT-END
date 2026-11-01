import { IEvent } from "@/types/event";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCart = ({ event }: { event: IEvent }) => {
  const eventDate = new Date(event.event_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="group bg-white rounded-[26px] p-3 sm:p-3.5 border border-black/[0.04] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_-6px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1">
      <div>
        {/* Event Image with Badge */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-zinc-100">
          <Image
            src={event.event_cover_image}
            alt={event.event_title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Category Tag Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block bg-[#86ef60] text-zinc-900 text-xs sm:text-[13px] font-bold px-3.5 py-1 rounded-full shadow-sm tracking-wide">
              {event.category}
            </span>
          </div>
        </div>

        {/* Event Details Content */}
        <div className="px-1.5 pt-4 pb-2 space-y-2.5">
          {/* Title */}
          <h3 className="text-lg sm:text-[19px] font-bold text-zinc-900 tracking-tight group-hover:text-emerald-800 transition-colors">
            {event.event_title}
          </h3>

          {/* Info Rows */}
          <div className="space-y-2 pt-0.5">
            {/* Location */}
            <div className="flex items-center gap-2 text-zinc-700 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-[#16a34a] shrink-0 fill-[#16a34a]/15 stroke-[2.2]" />
              <span className="font-medium truncate">{event.location}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-zinc-700 text-xs sm:text-sm">
              <Calendar className="w-4 h-4 text-[#16a34a] shrink-0 stroke-[2.2]" />

              <span className="font-medium">{eventDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Bottom Link */}
      <div className="px-1.5 pt-3 border-t border-zinc-100/80">
        <Link
          href={"#"}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-emerald-800 transition-colors"
        >
          <span>View Event</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default EventCart;
