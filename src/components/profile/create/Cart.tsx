"use client";
import { Event } from "@/types/event";
import { Clock, MapPin, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Edit from "./Edit";
import Delete from "./Delete";
const Cart = ({ event }: { event: Event }) => {
  const eventDate = new Date(event.event_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div
      key={event._id}
      className="group relative bg-white rounded-3xl p-3.5 sm:p-4 border border-zinc-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-zinc-100">
          <Image
            src={event.event_cover_image}
            alt={event.event_title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <h3
          title={event.event_title}
          className="text-base sm:text-[17px] font-bold text-zinc-900 mt-3.5 tracking-tight truncate"
        >
          {event.event_title}
        </h3>

        <div className="mt-1.5">
          <span className="inline-block bg-[#ebf8d4] text-[#4d7c0f] text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {event.category}
          </span>
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-700 mt-3">
          <Clock className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
          <span className="truncate">{eventDate}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-700 mt-1.5">
          <MapPin className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
          <span className="truncate">{event.location}</span>
        </div>
        <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-zinc-100">
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${
              event.event_date > new Date().toISOString()
                ? "bg-[#dcfce7] text-[#15803d]"
                : "bg-[#e6f8d0] text-[#3f6212]"
            }`}
          >
            {event.event_date > new Date().toISOString()
              ? "Pending"
              : "Completed"}
          </span>
        </div>
      </div>

      <div className="relative mt-4 flex items-center gap-2">
        <Link
          href={`/event-details/${event._id}`}
          className="flex-1 py-2.5 px-4 bg-[#1b4332] hover:bg-[#143527] text-white text-xs sm:text-sm font-semibold rounded-xl text-center transition-colors shadow-xs active:scale-[0.99]"
        >
          Event Details
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="outline"
                className="py-2.5 px-3 border border-zinc-200/90 hover:bg-zinc-50 text-zinc-700 rounded-xl flex items-center justify-center transition-colors cursor-pointer active:scale-95"
              />
            }
          >
            <MoreHorizontal className="w-4 h-4 text-zinc-700" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <Edit event = {event}/>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Delete event = {event} />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Cart;
