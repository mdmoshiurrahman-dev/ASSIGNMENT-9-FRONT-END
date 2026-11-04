export default function ProfileSkeleton() {
  return (
    <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 animate-pulse space-y-8">
      {/* Hero skeleton */}
      <div className="h-64 rounded-3xl bg-zinc-200/60" />
      {/* Stats skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-24 rounded-2xl bg-zinc-200/60" />
        <div className="h-24 rounded-2xl bg-zinc-200/60" />
      </div>
      {/* Joined events cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-96 rounded-3xl bg-zinc-200/60" />
        ))}
      </div>
    </div>
  );
}