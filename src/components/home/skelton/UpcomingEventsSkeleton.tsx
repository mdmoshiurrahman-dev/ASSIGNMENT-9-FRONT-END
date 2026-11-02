const UpcomingEventsSkeleton = () => {
  return (
    <section className="relative w-full py-12 md:py-16 bg-[#f7f6f0] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Hero Skeleton */}
          <div className="lg:col-span-4 xl:col-span-3.5 flex flex-col">
            <div className="animate-pulse">
              {/* Badge */}
              <div className="h-7 w-44 rounded-full bg-zinc-200 mb-5" />

              {/* Title */}
              <div className="space-y-3 mb-5">
                <div className="h-10 sm:h-12 w-full max-w-xs rounded-md bg-zinc-200" />
                <div className="h-10 sm:h-12 w-4/5 max-w-xs rounded-md bg-zinc-200" />
              </div>

              {/* Description */}
              <div className="space-y-2 max-w-sm">
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-11/12 rounded bg-zinc-200" />
                <div className="h-4 w-3/4 rounded bg-zinc-200" />
              </div>
              <div className="mt-8 hidden lg:block">
                <div className="h-48 w-full max-w-xs rounded-2xl bg-zinc-200" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 xl:col-span-8.5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <div className="animate-pulse">
                    {/* Event Cover Image */}
                    <div className="h-48 w-full bg-zinc-200" />

                    {/* Card Content */}
                    <div className="p-4 space-y-4">
                      {/* Category */}
                      <div className="h-5 w-24 rounded-full bg-zinc-200" />

                      {/* Event Title */}
                      <div className="space-y-2">
                        <div className="h-6 w-full rounded bg-zinc-200" />
                        <div className="h-6 w-3/4 rounded bg-zinc-200" />
                      </div>

                      {/* Date and Location */}
                      <div className="space-y-3 pt-2">
                        <div className="h-4 w-4/5 rounded bg-zinc-200" />
                        <div className="h-4 w-3/5 rounded bg-zinc-200" />
                      </div>

                      {/* Button */}
                      <div className="h-10 w-full rounded-lg bg-zinc-200 mt-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSkeleton;
