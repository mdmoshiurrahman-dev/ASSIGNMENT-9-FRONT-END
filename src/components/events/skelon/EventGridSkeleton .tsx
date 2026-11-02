const EventGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 p-4 md:grid-cols-2 gap-4 mb-5 md:mb-8 lg:mb-12 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div
          key={item}
          className="overflow-hidden rounded-2xl bg-white shadow-sm animate-pulse"
        >
          {/* Event Cover */}
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

            {/* Date */}
            <div className="h-4 w-4/5 rounded bg-zinc-200" />

            {/* Location */}
            <div className="h-4 w-3/5 rounded bg-zinc-200" />

            {/* Button */}
            <div className="h-10 w-full rounded-lg bg-zinc-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventGridSkeleton;