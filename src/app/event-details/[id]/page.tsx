import React from "react";
import EventMainDetails from "@/components/event-details/EventMainDetails";
import RelatedUpcomingEvents from "@/components/event-details/RelatedUpcomingEvents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Event } from "@/types/event";
interface PageProps {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log("fetch failed");
  }
  const event: Event = await res.json();
  console.log(event)
  const eventCategory = { category: event.category, _id: event._id };
  return (
    <div className="min-h-screen dark:bg-[#101812] transition duration-300 bg-[#fafafa]/80 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            href="/events"
            className="inline-flex items-center dark:text-[#F3F5EF] gap-2 text-xs sm:text-sm font-medium text-zinc-500 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Events</span>
          </Link>
        </div>

        {/* Main 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Event Main UI (Banner Image & Host Details) */}
          <div className="lg:col-span-8">
            <EventMainDetails event={event} />
          </div>

          {/* Right Column: Related Upcoming Events */}
          <div className="lg:col-span-4 sticky top-6">
            <RelatedUpcomingEvents eventCategory={eventCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
