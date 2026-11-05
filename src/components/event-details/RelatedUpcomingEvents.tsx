import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { IEvents } from "@/types/event";
const RelatedUpcomingEvents = async ({
  eventCategory,
}: {
  eventCategory: { category: string; _id: string };
}) => {
  const relatedEventRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/related/${eventCategory.category}`,
  );
  const relatedEvents: IEvents = await relatedEventRes.json();
  const related: IEvents = relatedEvents.filter(
    (f) => f._id !== eventCategory._id,
  );
  if (relatedEvents.length === 0) {
    notFound();
  }
  return (
    <aside className="w-full">
      <div className="bg-white dark:bg-[#101812] rounded-2xl border border-zinc-200/80 p-4 sm:p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
        <h2 className="text-base dark:text-[#F3F5EF] sm:text-lg font-bold text-zinc-900 tracking-tight mb-4">
          Related Upcoming Events
        </h2>

        <div className="space-y-3">
          {related.map((item) => {
            return (
              <Link
                key={item._id}
                href={`/event-details/${item._id}`}
                className="group flex items-center dark:bg-[#1B271E] gap-3 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl border border-zinc-200/80 hover:border-emerald-600/50 hover:shadow-sm bg-white transition-all duration-200"
              >
                <div className="relative w-20 h-16 sm:w-[86px] sm:h-[70px] rounded-lg overflow-hidden shrink-0 bg-zinc-100">
                  <Image
                    src={item.event_cover_image}
                    alt={item.event_title}
                    fill
                    sizes="100px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="min-w-0 flex-1 space-y-1">
                  <h3 className="text-sm dark:text-[#F3F5EF] sm:text-[14.5px] font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors truncate">
                    {item.event_title}
                  </h3>

                  <div className="flex items-center dark:text-[#B5C0B5] gap-1.5 text-zinc-700 text-xs font-medium">
                    <Calendar className="w-3.5 dark:text-[#F3F5EF] h-3.5 text-zinc-800 shrink-0 stroke-[2.2]" />
                    <span>{item.event_date.split("T")[0]}</span>
                  </div>

                  <div className="flex items-center dark:text-[#B5C0B5] gap-1.5 text-zinc-500 text-xs">
                    <MapPin className="w-3.5 dark:text-[#F3F5EF]  h-3.5 text-zinc-500 shrink-0 stroke-[2]" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default RelatedUpcomingEvents;
