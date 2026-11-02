import React from "react";

const EventDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]/80 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6 animate-pulse">
          <div className="h-4 w-28 rounded bg-zinc-200" />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Event Details */}
          <div className="lg:col-span-8 space-y-6 animate-pulse">
            {/* Cover Image */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] md:h-[420px] rounded-2xl sm:rounded-3xl bg-zinc-200" />

            {/* Host Details + Join Card */}
            <div className="flex justify-between flex-col md:flex-row gap-6">
              <div className="pt-2 flex-1">
                {/* Heading */}
                <div className="h-7 w-36 rounded bg-zinc-200" />

                {/* Host Profile */}
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-zinc-200 shrink-0" />

                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-40 max-w-full rounded bg-zinc-200" />
                    <div className="h-4 w-52 max-w-full rounded bg-zinc-200" />
                  </div>
                </div>

                {/* Divider */}
                <div className="mt-6 border-b border-zinc-200" />
              </div>

              {/* Join Event Card */}
              <div className="md:flex md:justify-center md:items-center">
                <div className="w-44 h-24 rounded-2xl bg-zinc-200" />
              </div>
            </div>

            {/* Event Title & Description */}
            <div className="pt-2 space-y-5">
              <div className="space-y-2">
                <div className="h-8 w-4/5 rounded bg-zinc-200" />
                <div className="h-8 w-2/5 rounded bg-zinc-200" />
              </div>

              {/* Date, Time, Location */}
              <div className="flex flex-wrap gap-3">
                <div className="h-9 w-32 rounded-lg bg-zinc-200" />
                <div className="h-9 w-28 rounded-lg bg-zinc-200" />
                <div className="h-9 w-40 rounded-lg bg-zinc-200" />
              </div>

              {/* Description Paragraphs */}
              <div className="space-y-3 pt-2">
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-11/12 rounded bg-zinc-200" />
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-3/4 rounded bg-zinc-200" />
              </div>
            </div>
          </div>

          {/* Related Events Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-6 animate-pulse">
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-4 sm:p-5 shadow-sm">
              {/* Sidebar Heading */}
              <div className="h-6 w-52 max-w-full rounded bg-zinc-200 mb-5" />

              {/* Related Event Items */}
              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl border border-zinc-200/80"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-16 sm:w-[86px] sm:h-[70px] rounded-lg bg-zinc-200 shrink-0" />

                    {/* Event Information */}
                    <div className="min-w-0 flex-1 space-y-2">
                      <div className="h-4 w-full rounded bg-zinc-200" />
                      <div className="h-4 w-3/5 rounded bg-zinc-200" />
                      <div className="h-3 w-4/5 rounded bg-zinc-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSkeleton;
