"use client";
import { IEventRes } from "@/types/event";
import JoinedNotFound from "./JoinedNotFound";
import JoinedCart from "./JoinedCart";

export default function JoinedEvents({ events }: { events: IEventRes }) {
  return (
    <section className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Header section matching UI screenshot */}
      <div className="mb-6 sm:mb-8">
        <p className="text-sm dark:text-[#B5C0B5] sm:text-base font-semibold text-zinc-600 mb-1">
          Joined Events Section
        </p>
        <h2 className="text-2xl dark:text-[#F3F5EF] sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight">
          Events You&apos;re Part Of
        </h2>
      </div>
      {events.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {events.map((event) => (
            <JoinedCart key={event._id} event={event} />
          ))}
        </div>
      ) : (
        <JoinedNotFound />
      )}
    </section>
  );
}
