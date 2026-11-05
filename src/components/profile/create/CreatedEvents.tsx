"use client";
import Link from "next/link";
import { Plus } from "lucide-react";
import { IEventRes } from "@/types/event";
import Cart from "./Cart";
import NotFound from "./NotFound";
export default function CreatedEvents({
  createdEventData,
}: {
  createdEventData: IEventRes;
}) {
  return (
    <section className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Header section with '+ Create New Event' button */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h2 className="text-2xl dark:text-[#F3F5EF] sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Events You&apos;ve Created
          </h2>
        </div>

        <Link
          href="/create-event"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#143527] text-white text-sm font-semibold transition-all shadow-xs active:scale-[0.98] self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Create New Event</span>
        </Link>
      </div>

      {/* Events Grid */}
      {createdEventData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {createdEventData.map((event) => (
            <Cart key={event._id} event={event} />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
}
